/* script.js – Gemini TEST MODE (UNSAFE FOR PRODUCTION) */

const API_KEY = "PASTE_YOUR_KEY_HERE"; // REMOVE BEFORE PUBLISHING

document.addEventListener("DOMContentLoaded", () => {

  const generateBtn = document.getElementById("generateBtn");
  const resultContainer = document.getElementById("resultsContainer");
  const descriptionInput = document.getElementById("description");
  const categorySelect = document.getElementById("category");
  const toneSelect = document.getElementById("tone");

  async function generateBios(description, category, tone) {

    const prompt = `
Write 3 Instagram bios.

Category: ${category}
Tone: ${tone}
Details: ${description}

Rules:
- Under 150 characters
- Use emojis
- Return ONLY bios separated by |||
`;

    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
      API_KEY;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 300
          }
        })
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error.message);
      }

      const data = await res.json();
      const text = data.candidates[0].content.parts[0].text;

      return text.split("|||").map(b => b.trim());

    } catch (err) {
      alert("Gemini Error: " + err.message);
      return [];
    }
  }

  generateBtn.addEventListener("click", async () => {

    const desc = descriptionInput.value.trim();
    if (!desc) {
      alert("Please enter description");
      return;
    }

    generateBtn.disabled = true;
    generateBtn.innerText = "Generating...";

    resultContainer.innerHTML = "";

    const bios = await generateBios(
      desc,
      categorySelect.value,
      toneSelect.value
    );

    generateBtn.disabled = false;
    generateBtn.innerText = "Generate Bio";

    if (!bios.length) {
      resultContainer.innerHTML = "<p>Failed to generate</p>";
      return;
    }

    bios.forEach(bio => {
      const div = document.createElement("div");
      div.className = "bio-card";
      div.innerText = bio;
      div.onclick = () => navigator.clipboard.writeText(bio);
      resultContainer.appendChild(div);
    });
  });
});
