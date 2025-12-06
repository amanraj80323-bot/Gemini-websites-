import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFitnessTip = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Give me a short, punchy, high-energy fitness tip about "${topic}" in the style of a tough but motivating personal trainer named Amann from Delhi. Keep it under 50 words. Use emojis.`,
      config: {
        temperature: 0.8,
      }
    });

    return response.text || "Keep pushing! Consistency is key.";
  } catch (error) {
    console.error("Error fetching tip:", error);
    return "Network error. Just remember: No pain, no gain!";
  }
};