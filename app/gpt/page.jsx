// app/gpt/page.jsx

"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiResponse, setAIResponse] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Add this line

    try {
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        console.error(
          `Server responded with ${response.status}: ${response.statusText}`
        );
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAIResponse(data.response);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setQuestion("");
    setIsSubmitted(false);
    setAIResponse("");
    setIsLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 mx-auto bg-cyan-900 text-cyan-200">
      <div className="flex flex-col gap-2 text-center">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <textarea
            className="p-2 text-black rounded-lg"
            value={question}
            onChange={handleChange}
            placeholder="Ask Question Here"
          ></textarea>
          <button
            className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500"
            type="submit"
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? "Loading..." : "Ask AI"}
          </button>
        </form>
        <Link
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500"
          href="/"
        >
          Back to home
        </Link>
      </div>
      {isSubmitted && (
        <div className="flex flex-col gap-2 text-center">
          <p>AI Response: {aiResponse}</p>
          <button
            className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500"
            onClick={handleReset}
          >
            Ask Another Question
          </button>
        </div>
      )}
    </main>
  );
}
