import {GoogleGenerativeAI} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCVItCgBsEj6jWlOP20LMWbb0WBXt4i6ms");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const getGeminiResponse = async (prompt) => {
  const result = await model.generateContent(prompt);
  return result.response.text();
};