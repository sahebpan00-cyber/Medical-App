const express = require("express");
const Groq = require("groq-sdk");

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post("/", async (req, res) => {

  try {

    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({
        reply: "Please provide symptoms."
      });
    }

    console.log("USER MESSAGE:", userMessage);

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are a medical assistant.

The patient will describe symptoms.

Respond ONLY in this format:

Possible Causes:
• cause
• cause

Advice:
• advice
• advice

See a Doctor If:
• condition
• condition

Rules:
- Do NOT add a title.
- Do NOT repeat the symptom name.
- Do NOT add explanations outside these sections.
- Keep each bullet point short and clear.
`
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      temperature: 0.4,
      max_tokens: 700
    });

    const reply =
      completion?.choices?.[0]?.message?.content ||
      "Unable to generate response.";

    res.json({ reply });

  } catch (error) {

    console.error("AI ERROR:", error);

    res.status(500).json({
      reply: "AI service temporarily unavailable."
    });

  }

});

module.exports = router;