import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request) {
  try {
    const { question } = await request.json();
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: question },
      ],
    });

    if (response.data.choices && response.data.choices.length > 0) {
      return NextResponse.json({
        response: response.data.choices[0].message.content,
      });
    } else {
      console.error("OpenAI response:", response);
      throw new Error("No choices in response from OpenAI");
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error(
      "An error occurred while getting the AI response"
    );
  }
}
