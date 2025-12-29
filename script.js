/* script.js - Updated for Tailwind Design */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if(mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 2. Bio Generator Data & Logic ---
    const generateBtn = document.getElementById('generateBtn');
    const resultContainer = document.getElementById('resultsContainer');

    const bioDatabase = {
        fashion: {
            professional: [
                "Fashion Stylist | NYC 🗽\nHelping you look your best.\nDM for collaborations 📩",
                "Sustainable Fashion Advocate 🌿\nStyle without compromise.\nShop my closet below 👇"
            ],
            witty: [
                "I have enough clothes. \n- Said no woman ever. 👗",
                "Shopping is my cardio. 🛍️\nFashion addict & coffee lover."
            ],
            minimal: [
                "Style. Grace. Fashion.",
                "NYC | LA | MIA"
            ],
            bold: [
                "Born to stand out.",
                "Not your average stylist."
            ]
        },
        tech: {
            professional: [
                "Software Engineer 💻\nBuilding the future of web.\nCheck out my portfolio 👇",
                "Tech Reviewer 📱\nUnboxing the latest gadgets."
            ],
            witty: [
                "I turn coffee into code. ☕ -> 💻",
                "My computer is faster than yours."
            ],
            bold: [
                "Disrupting the industry.",
                "Innovate or die."
            ]
        }
        // Add more categories here as needed
    };

    if (generateBtn && resultContainer) {
        generateBtn.addEventListener('click', () => {
            const category = document.getElementById('category').value;
            const tone = document.getElementById('tone').value;

            // Simple loading effect
            generateBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">refresh</span> Generating...';
            
            setTimeout(() => {
                // Get data or fallback
                const catData = bioDatabase[category] || bioDatabase['fashion'];
                const toneData = catData[tone] || catData['professional'] || ["Bio ideas coming soon!"];

                // Clear previous results
                resultContainer.innerHTML = '';

                toneData.forEach((bio) => {
                    // Create Result Card HTML (Tailwind styled)
                    const card = document.createElement('div');
                    card.className = "group relative bg-white border-2 border-slate-100 hover:border-primary/30 rounded-2xl p-6 transition-all hover:shadow-lg flex flex-col sm:flex-row justify-between items-start gap-4 animate-fade-in-up";
                    
                    card.innerHTML = `
                        <div class="space-y-2 w-full">
                            <p class="text-slate-800 text-lg font-medium leading-relaxed whitespace-pre-line">${bio}</p>
                            <div class="flex flex-wrap gap-2 pt-2">
                                <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-purple-50 text-purple-700 uppercase">${category}</span>
                                <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 uppercase">${tone}</span>
                            </div>
                        </div>
                        <button class="flex-shrink-0 p-3 text-slate-400 hover:text-white hover:bg-primary rounded-xl transition-all shadow-sm copy-btn" title="Copy to clipboard">
                            <span class="material-symbols-outlined">content_copy</span>
                        </button>
                    `;
                    
                    // Add Copy Functionality
                    const copyBtn = card.querySelector('.copy-btn');
                    copyBtn.addEventListener('click', () => {
                        navigator.clipboard.writeText(bio).then(() => {
                            copyBtn.innerHTML = '<span class="material-symbols-outlined">check</span>';
                            copyBtn.classList.add('bg-green-500', 'text-white');
                            setTimeout(() => {
                                copyBtn.innerHTML = '<span class="material-symbols-outlined">content_copy</span>';
                                copyBtn.classList.remove('bg-green-500', 'text-white');
                            }, 2000);
                        });
                    });

                    resultContainer.appendChild(card);
                });

                // Reset Button
                generateBtn.innerHTML = '<span class="material-symbols-outlined">bolt</span> Generate Magic';
            }, 800); // 800ms simulated delay
        });
    }

});
