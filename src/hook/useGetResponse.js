import { GoogleGenerativeAI } from "@google/generative-ai";

// Securely load the Gemini key from the environment
const genAI = new GoogleGenerativeAI("AIzaSyCVItCgBsEj6jWlOP20LMWbb0WBXt4i6ms");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const getGeminiResponse = async (prompt) => {
  const userName = "Student"; 
  const x = `
You are Edu College Bot, a friendly guide to help students find the best colleges.
User name: ${userName}
Query: ${prompt}

Respond in an informative yet friendly tone.
`;
  console.log("Gemini Key from env:", process.env.GEMINI_KEY);
  const result = await model.generateContent(x);
  return result.response.text();
};
