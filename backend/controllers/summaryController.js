import Summary from "../models/Summary.js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateSummary = async (req, res) => {
  try {
    const { transcript, prompt } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant that summarizes meeting transcripts." },
        { role: "user", content: `${prompt}\n\nTranscript:\n${transcript}` },
      ],
    });

    const summary = completion.choices[0].message.content;

    const newSummary = await Summary.create({ transcript, prompt, summary });
    res.json(newSummary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
