/* script.js - InstaGen AI with Gemini Integration */

// ==========================================
// ⚠️ SECURITY WARNING:
// You have hardcoded your API key below. 
// Do not commit this file to GitHub/GitLab public repos.
// ==========================================

const API_KEY = "AIzaSyBgDVVkZy5XfARj0gGMOQEA6p3Yh0nK6wI"; 

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Elements ---
    const generateBtn = document.getElementById('generateBtn');
    const resultContainer = document.getElementById('resultsContainer');
    const descriptionInput = document.getElementById('description');
    const categorySelect = document.getElementById('category');
    const toneSelect = document.getElementById('tone');
    
    // Preview Elements
    const previewBio = document.getElementById('previewBio');
    const previewCategory = document.getElementById('previewCategory');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // --- Mobile Menu Toggle ---
    if(mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Gemini API Function ---
    async function generateBios(description, category, tone) {
        
        const promptText = `
            Act as a social media expert. Write 3 distinct, engaging Instagram bios for a "${category}" account.
            Tone: ${tone}.
            User's specific details: "${description}".
            
            Requirements:
            1. Use relevant emojis.
            2. Keep it under 150 characters per bio.
            3. Include a call to action if appropriate.
            4. Formatting: Return ONLY the 3 bios separated by the delimiter "|||". Do not include introductory text like "Here are your bios".
        `;

        // FIXED: Use 'gemini-1.5-flash-latest' which is more stable on v1beta free tier
        // If this fails, the code below will auto-switch to 'gemini-pro'
        let modelName = "gemini-1.5-flash-latest";
        let url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;

        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
            });

            // FALLBACK LOGIC: If 1.5-flash is not found (404) or fails, try gemini-pro
            if (!response.ok) {
                console.warn(`Primary model ${modelName} failed. Trying fallback model...`);
                modelName = "gemini-pro";
                url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;
                
                response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error.message || `API Error: ${response.status}`);
                }
            }
            
            const data = await response.json();
            
            // Safety check
            if (!data.candidates || data.candidates.length === 0) {
                return ["AI couldn't generate a response. Please try a different description."];
            }

            const rawText = data.candidates[0].content.parts[0].text;
            const bios = rawText.split('|||').map(b => b.trim()).filter(b => b.length > 0);
            return bios;

        } catch (error) {
            console.error("Gemini Error:", error);
            return [`Error: ${error.message}. Check your internet connection.`];
        }
    }

    // --- Event Listener ---
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            
            // 1. Validation
            const desc = descriptionInput.value.trim();
            if (!desc) {
                alert("Please describe your page first! (e.g., 'I post travel photos from Bali')");
                descriptionInput.focus();
                return;
            }

            // 2. UI Loading State
            const originalBtnText = generateBtn.innerHTML;
            generateBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">refresh</span> Thinking...';
            generateBtn.disabled = true;
            generateBtn.classList.add('opacity-75', 'cursor-not-allowed');
            
            resultContainer.innerHTML = `
                <div class="flex flex-col items-center justify-center py-8 text-slate-400">
                    <span class="material-symbols-outlined animate-spin text-3xl mb-2">auto_mode</span>
                    <p>Connecting to AI...</p>
                </div>
            `;

            // 3. Call API
            const generatedBios = await generateBios(desc, categorySelect.value, toneSelect.value);

            // 4. Clear Loading & Reset
            resultContainer.innerHTML = '';
            generateBtn.innerHTML = originalBtnText;
            generateBtn.disabled = false;
            generateBtn.classList.remove('opacity-75', 'cursor-not-allowed');

            // 5. Update Preview Meta
            if(previewCategory) previewCategory.innerText = categorySelect.options[categorySelect.selectedIndex].text;

            // 6. Render Results
            generatedBios.forEach((bio, index) => {
                const card = document.createElement('div');
                card.className = "group relative bg-white border-2 border-slate-100 hover:border-primary rounded-xl p-5 transition-all shadow-sm hover:shadow-md cursor-pointer animate-fade-in-up";
                card.style.animationDelay = `${index * 150}ms`;
                
                card.innerHTML = `
                    <div class="flex justify-between items-start gap-4">
                        <p class="text-slate-800 text-base font-medium leading-relaxed whitespace-pre-line flex-1">${bio}</p>
                        <button class="text-slate-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-purple-50" title="Copy Bio">
                            <span class="material-symbols-outlined text-xl">content_copy</span>
                        </button>
                    </div>
                `;

                // Update Preview on Click
                card.addEventListener('click', () => {
                    if(previewBio) previewBio.innerText = bio;
                    document.querySelectorAll('#resultsContainer > div').forEach(d => {
                        d.classList.remove('border-primary', 'bg-purple-50', 'ring-2', 'ring-purple-100');
                    });
                    card.classList.add('border-primary', 'bg-purple-50', 'ring-2', 'ring-purple-100');
                });

                // Copy Logic
                const copyBtn = card.querySelector('button');
                copyBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(bio).then(() => {
                        const icon = copyBtn.querySelector('span');
                        icon.innerText = 'check';
                        icon.classList.add('text-green-500');
                        setTimeout(() => {
                            icon.innerText = 'content_copy';
                            icon.classList.remove('text-green-500');
                        }, 2000);
                    });
                });

                resultContainer.appendChild(card);
                
                if (index === 0 && previewBio) {
                    previewBio.innerText = bio;
                    card.classList.add('border-primary', 'bg-purple-50', 'ring-2', 'ring-purple-100');
                }
            });
        });
    }
});
