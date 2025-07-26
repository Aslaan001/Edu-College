import { GoogleGenerativeAI } from "@google/generative-ai";

// Securely load the Gemini key from the environment
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const getGeminiResponse = async (prompt) => {
  console.log("Gemini Key from env:", process.env.GEMINI_KEY);
  const result = await model.generateContent(prompt);
  return result.response.text();
};
