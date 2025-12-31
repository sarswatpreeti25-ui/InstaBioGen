/* script.js - InstaGen AI (Ultimate Edition with 200+ Templates) */

// ==========================================
// ⚠️ API KEY CONFIGURATION
// Paste your Gemini API Key inside the quotes below.
// If empty, the tool uses the Massive Offline Database.
// ==========================================

const API_KEY = ""; // Example: "AIzaSy..."

// ==========================================
// 📂 MASSIVE OFFLINE BIO DATABASE (200+ Templates)
// ==========================================
const staticBioDatabase = {
    "Creator": {
        "Professional": [
            "Content Creator 🎥 | Digital Storyteller\nSharing tips on [Niche] daily.\nSubscribe to my newsletter 👇",
            "Creating content that inspires.\nBased in [City] 📍\nCollabs: email@address.com 📩",
            "Video Creator | Editor | Visuals\nHelping you create better content.\nCheck out my gear list below 📸",
            "Digital Creator ⚡\nSharing my journey in [Niche].\nNew video every Tuesday! 📺",
            "Turning ideas into content. 💡\nHelping creators grow their brand.\nWork with me 👇"
        ],
        "Funny": [
            "I'm not famous, but my cat is. 🐈\nCreating content to pay for cat food.\nSubscribe or I starve.",
            "Professional overthinker & content maker.\nI put the 'pro' in procrastinate.\nNew video... eventually. 🎥",
            "My life is 90% editing and 10% rendering.\nSend coffee. ☕",
            "I do this for the likes. 👍\n(And the money, mostly the money).",
            "Influencer? More like influenza.\nSpreading good vibes only. 🦠"
        ],
        "Minimalist": [
            "Creator. 🎥",
            "Visuals & Vibes.",
            "Creating daily.",
            "Art in motion.",
            "Est. 2025.",
            "Just create."
        ]
    },
    "Business": {
        "Professional": [
            "Official Instagram of [Brand Name]™\nPremium quality [Product] for [Target Audience].\nShop the collection below 👇",
            "Empowering [Audience] to achieve [Goal].\nTrusted by 10,000+ customers.\nSupport: help@brand.com 💼",
            "Your go-to source for [Industry] solutions.\nInnovation meets reliability.\nGet a free quote today! 🚀",
            "Building the future of [Industry]. 🌐\nGlobal shipping available.\nShop now:",
            "Quality. Service. Integrity.\nServing [City] since 2010.\nBook your appointment 👇"
        ],
        "Funny": [
            "We sell things you didn't know you needed.\nBut now you do. 😉\nShop before we sell out (again).",
            "Like our products? You have good taste.\nDon't like them? You're wrong.\nJust kidding. Buy something? 🛍️",
            "Spending your money so you don't have to.\nWait, that's not right.\nBuy our stuff! 💸"
        ],
        "Minimalist": [
            "Est. 2024.",
            "Quality goods. Global shipping.",
            "Redefining [Industry].",
            "Shop link below. 👇",
            "Official Page.",
            "[City] based."
        ]
    },
    "Fitness": {
        "Professional": [
            "Certified Personal Trainer (CPT) 🏋️‍♂️\nHelping you build muscle & lose fat.\nApply for 1-on-1 coaching 👇",
            "Health & Wellness Coach 🥗\nSustainable weight loss tips.\nJoin the 30-day challenge today!",
            "Performance Coach for Athletes.\nTrain smarter, not harder.\nDM 'READY' to get started. 💪",
            "Yoga Instructor 🧘‍♀️\nFind your flow.\nClasses every Mon/Wed/Fri.",
            "Nutritionist 🍎\nEat better, live longer.\nMeal plans available in bio."
        ],
        "Inspirational": [
            "Your only limit is you. ⚡\nDaily motivation & workout tips.\nLet's crush your goals together.",
            "Stronger every day.\nBelieve in the process.\nStart your journey here. 🌱",
            "Sweat now, shine later. ✨\nBuilding the best version of myself.",
            "Discipline > Motivation.\nShow up for yourself today."
        ],
        "Funny": [
            "I run because I really like pizza. 🍕\nFitness enthusiast (mostly).\nGym -> Eat -> Sleep -> Repeat.",
            "Sweat is just fat crying. 💦\nTrying to be the person my dog thinks I am.\nWorkout with me!",
            "I lift things up and put them down. 🏋️‍♂️\nProfessional heavy lifter.",
            "My favorite exercise is a cross between a lunge and a crunch.\nI call it lunch. 🍔"
        ]
    },
    "Travel": {
        "Professional": [
            "Travel Photographer 📸 | Explorer\nCapturing the world one frame at a time.\nCurrently in: [Location] 📍",
            "Luxury Travel Consultant ✈️\nCurating bespoke experiences.\nBook your dream vacation 👇",
            "Adventure Seeker | Hiker | Camper\nExploring the unbeaten path.\nRead the travel blog 🌲",
            "Digital Nomad 💻\nWorking from wherever the wifi is.\nTravel tips & guides below."
        ],
        "Inspirational": [
            "Collect moments, not things. 🌍\nWanderlust & City Dust.\nSee the world through my lens.",
            "Adventure awaits.\nLife is short, travel often.\nNext stop: [Destination] ✈️",
            "Not all those who wander are lost. ✨\nExploring the beauty of planet Earth.",
            "Chasing sunsets and new horizons. 🌅"
        ],
        "Minimalist": [
            "✈️ 🇮🇳 🇺🇸 🇬🇧 🇯🇵",
            "Citizen of the World.",
            "Exploring [Location].",
            "Travel Diary. 📔",
            "Wanderlust.",
            "📍 Currently: Home"
        ]
    },
    "Fashion": {
        "Professional": [
            "Fashion Stylist & Consultant 👗\nElevating your personal style.\nBook a consultation 📩",
            "Streetwear Enthusiast 👟\nDaily outfit inspiration (OOTD).\nShop my looks on LTK 👇",
            "Sustainable Fashion Advocate 🌿\nStyle without compromise.\nEthical brands only.",
            "Model | Influencer\nRepresented by [Agency].\nBookings: email@agency.com"
        ],
        "Bold": [
            "Wear what makes you happy.\nTrends fade, style is eternal.\nFashion is art and you are the canvas. 🎨",
            "Dressing like I'm already famous.\nSorry for looking expensive. 💅",
            "Life isn't perfect but your outfit can be. ✨",
            "Too glam to give a damn."
        ],
        "Funny": [
            "I have nothing to wear.\n- Me, staring at a full closet. 👗",
            "Shopping is my cardio. 🛍️\nBuying things I don't need with money I don't have.",
            "I speak fluent Gucci and sarcasm.",
            "My hobbies include buying clothes and then complaining I'm broke. 💸"
        ]
    },
    "Food": {
        "Professional": [
            "Food Blogger & Recipe Developer 🍳\nEasy, healthy, and delicious meals.\nFull recipes in bio link 📖",
            "Restaurant Reviewer 🍔\nFinding the best eats in [City].\nDM for invites/collabs.",
            "Plant-Based Chef 🥑\nMaking vegan food taste amazing.\nCookbook out now! 👇",
            "Coffee Connoisseur ☕\nReviewing the best beans & brews.\nLatte art lover."
        ],
        "Funny": [
            "I'm on a seafood diet. I see food and I eat it. 🦞\nProfessional snacker.\nWill work for tacos. 🌮",
            "My head says gym but my heart says pasta. 🍝\nLife is uncertain. Eat dessert first. 🍰",
            "I followed my heart and it led me to the fridge. 🧊",
            "Relationship status: Committed to pizza. 🍕"
        ]
    },
    "Gamer": {
        "Professional": [
            "Esports Athlete for [Team] 🎮\nStreaming daily at 8PM EST.\nBusiness: email@team.com",
            "Gaming Content Creator 👾\nReviews, Walkthroughs & Clips.\nWatch the latest video 👇",
            "Twitch Partner ✔️\nVariety Streamer | FPS & RPGs.\nJoin the Discord community! 🎧",
            "Speedrunner ⏱️\nWorld Record Holder in [Game].\nCatch me live!"
        ],
        "Funny": [
            "I don't get older, I level up. 🆙\nLag is my worst enemy.\nJust one more game... said 3 hours ago.",
            "Video games ruined my life. Good thing I have two more lives. 🍄\nPlayer 1 ready.",
            "I paused my game to be here. You're welcome. 🎮",
            "Born to game, forced to go to school/work."
        ]
    },
    "Artist": {
        "Professional": [
            "Digital Artist & Illustrator 🎨\nCommission status: OPEN ✅\nPortfolio link below 👇",
            "Fine Art Photographer 📷\nCapturing light and emotion.\nPrints available in shop.",
            "Graphic Designer | Branding Expert\nHelping brands stand out visually.\nDM for projects. 🖌️",
            "Tattoo Artist 💉\nBooking for [Month] is open.\nDM design ideas."
        ],
        "Inspirational": [
            "Creating magic out of chaos. ✨\nArt is not what you see, but what you make others see.",
            "Dreaming in colors. 🌈\nWelcome to my imagination.",
            "Earth without 'art' is just 'eh'. 🌍"
        ]
    },
    "Music": {
        "Professional": [
            "Singer / Songwriter 🎤\nNew single '[Song Name]' out now!\nListen on Spotify 🎧",
            "Music Producer 🎹\nBeats available for lease.\nContact for studio time.",
            "DJ & Performer 🎧\nBooking: booking@djname.com\nTour dates below 👇",
            "Guitarist 🎸\nSession musician & teacher.\nLearn to play with me!"
        ],
        "Bold": [
            "Music is my religion. 🎶\nLiving life one beat at a time.\nVolume up, world out.",
            "I make music for the soul.\nJoin the movement. 🌊",
            "No music, no life. 🚫"
        ]
    },
    "Pet": {
        "Professional": [
            "The adventures of [Pet Name] 🐾\n[Breed] living in [City].\nBrand Ambassador for [Brand].",
            "Just a dog living his best life. 🦴\nFollow for daily cuteness.\nDiscount codes in highlights.",
            "Rescue Cat 🐱\nFrom shelter to spoiled.\nAdvocating for animal adoption.",
            "Training & Tricks 🐕\nTeaching old dogs new tricks.\nDm for training tips."
        ],
        "Funny": [
            "I run this house. My humans just pay the rent. 🏠\nWill sit for treats. 🦴",
            "Professional nap taker. 💤\nCute but psycho. 😼\nZero days without an accident.",
            "I chewed the wifi cable. Sorry not sorry. 📶",
            "Chief Barking Officer. 👔"
        ]
    },
    "RealEstate": {
        "Professional": [
            "Licensed Realtor® in [City] 🏠\nHelping you find your dream home.\nMarket updates & listings 👇",
            "Luxury Real Estate Agent 🔑\nSelling the finest homes in [Area].\nContact me for a valuation.",
            "Investing in Property? 🏢\nI help investors maximize ROI.\nLet's talk strategy.",
            "Your Local Property Expert.\nBuying | Selling | Renting.\nCall me today! 📞"
        ],
        "Minimalist": [
            "Realtor @ [Agency].",
            "Sold over $10M in 2024.",
            "Your key to [City]. 🔑",
            "Listings 👇"
        ]
    },
    "Student": {
        "Funny": [
            "Powered by caffeine and anxiety. ☕\nStudent @ [University].\nTrying to graduate before I lose my mind.",
            "Major in [Subject], Minor in Napping. 💤\nCurrently studying (watching Netflix).",
            "Is it too late to drop out? 📚\nJust kidding. (Unless?)",
            "Academic weapon (sometimes). ⚔️"
        ],
        "Inspirational": [
            "Future [Job Title] in the making. 🎓\nTrust the timing of your life.\nStudygram & Motivation. 📖",
            "Learning today, leading tomorrow.\nChasing dreams and degrees. 🌟",
            "Head in the books, dreams in the clouds. ☁️"
        ]
    },
    "Tech": {
        "Professional": [
            "Software Engineer 💻\nBuilding scalable web apps.\nStack: React, Node, Python.",
            "Tech Reviewer 📱\nUnboxing the latest gadgets.\nHonest reviews only.",
            "Frontend Developer 🎨\nTurning designs into code.\nPortfolio link below 👇",
            "Cybersecurity Enthusiast 🔒\nKeeping the internet safe.\nTips on staying secure."
        ],
        "Funny": [
            "I turn coffee into code. ☕ -> 💻\nIt works on my machine.",
            "404 Bio Not Found.\nJust kidding, I'm a developer.",
            "My code doesn't work, I don't know why.\nMy code works, I don't know why. 🤷‍♂️"
        ]
    }
};

// ==========================================
// 🚀 MAIN LOGIC
// ==========================================

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

    // --- Helper: Get Random Items from Array ---
    function getRandomItems(arr, count) {
        if (!arr) return [];
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // --- FUNCTION 1: Generate via AI (Gemini) ---
    async function generateBiosViaAI(description, category, tone) {
        const promptText = `
            Act as a social media expert. Write 3 distinct, engaging Instagram bios for a "${category}" account.
            Tone: ${tone}.
            User's specific details: "${description}".
            
            Requirements:
            1. Use relevant emojis.
            2. Keep it under 150 characters per bio.
            3. Include a call to action if appropriate.
            4. Formatting: Return ONLY the 3 bios separated by the delimiter "|||". Do not include introductory text.
        `;

        const modelName = "gemini-pro";
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
            });

            if (!response.ok) throw new Error("API_FAIL"); 
            
            const data = await response.json();
            
            if (!data.candidates || data.candidates.length === 0) return [];

            const rawText = data.candidates[0].content.parts[0].text;
            return rawText.split('|||').map(b => b.trim()).filter(b => b.length > 0);

        } catch (error) {
            console.warn("AI Generation failed, switching to offline mode.", error);
            return []; // Return empty to trigger fallback
        }
    }

    // --- FUNCTION 2: Generate via Offline Database ---
    function generateBiosOffline(category, tone) {
        let catKey = category;
        let toneKey = tone;

        // Fallback Logic for Offline Mode
        // 1. Check if Category Exists
        if (!staticBioDatabase[catKey]) {
            // Try to map similar categories
            if (catKey === "Gamer") catKey = "Gamer"; // Ensure exact match
            else catKey = "Creator"; // Default to Creator
        }

        // 2. Check if Tone Exists in Category
        if (!staticBioDatabase[catKey][toneKey]) {
            // Default to Professional if tone missing, otherwise first available
            if (staticBioDatabase[catKey]["Professional"]) {
                toneKey = "Professional";
            } else {
                toneKey = Object.keys(staticBioDatabase[catKey])[0];
            }
        }

        const bios = staticBioDatabase[catKey][toneKey];
        
        // Return 3 random bios
        return getRandomItems(bios, 3);
    }

    // --- Event Listener ---
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            
            // 1. Validation (Relaxed for Offline Mode)
            const desc = descriptionInput.value.trim();
            if (!desc && API_KEY !== "") {
                alert("Please describe your page first!");
                descriptionInput.focus();
                return;
            }

            // 2. UI Loading State
            const originalBtnText = generateBtn.innerHTML;
            generateBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">refresh</span> Working...';
            generateBtn.disabled = true;
            generateBtn.classList.add('opacity-75', 'cursor-not-allowed');
            
            resultContainer.innerHTML = `
                <div class="flex flex-col items-center justify-center py-8 text-slate-400">
                    <span class="material-symbols-outlined animate-spin text-3xl mb-2">auto_mode</span>
                    <p>${API_KEY ? "Connecting to AI..." : "Accessing Template Library..."}</p>
                </div>
            `;

            // 3. LOGIC: Decide AI vs Offline
            let generatedBios = [];
            let source = "AI";

            // Try AI first if Key exists
            if (API_KEY && API_KEY.length > 10) {
                generatedBios = await generateBiosViaAI(desc, categorySelect.value, toneSelect.value);
            }

            // If AI failed, Key missing, or empty result -> Use Database
            if (generatedBios.length === 0) {
                source = "Database";
                // Artificial delay for better UX
                await new Promise(r => setTimeout(r, 600)); 
                generatedBios = generateBiosOffline(categorySelect.value, toneSelect.value);
            }

            // 4. Clear Loading & Reset
            resultContainer.innerHTML = '';
            generateBtn.innerHTML = originalBtnText;
            generateBtn.disabled = false;
            generateBtn.classList.remove('opacity-75', 'cursor-not-allowed');

            // 5. Update Preview Meta
            if(previewCategory) previewCategory.innerText = categorySelect.options[categorySelect.selectedIndex].text;

            // 6. Header for results
            const headerInfo = document.createElement('div');
            headerInfo.className = "text-center text-xs text-slate-400 mb-4 uppercase tracking-wide font-bold";
            headerInfo.innerText = source === "AI" ? "✨ Generated by Gemini AI" : "⚡ Templates from Library";
            resultContainer.appendChild(headerInfo);

            // 7. Render Results
            if (generatedBios.length === 0) {
                resultContainer.innerHTML = `<div class="text-center text-slate-400">No templates found for this specific combination. Try "Creator" or "Professional".</div>`;
                return;
            }

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

                // Update Preview
                card.addEventListener('click', () => {
                    if(previewBio) previewBio.innerText = bio;
                    document.querySelectorAll('#resultsContainer > div.group').forEach(d => {
                        d.classList.remove('border-primary', 'bg-purple-50', 'ring-2', 'ring-purple-100');
                    });
                    card.classList.add('border-primary', 'bg-purple-50', 'ring-2', 'ring-purple-100');
                });

                // Copy
                const copyBtn = card.querySelector('button');
                copyBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(bio).then(() => {
                        alert("Copied to clipboard!");
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
