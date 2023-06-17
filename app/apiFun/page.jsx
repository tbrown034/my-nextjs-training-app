"use client";
import { useState } from "react";
import Link from "next/link";

export default function apiFun() {
  const [testMessage, setTextMessage] = useState(null);

  // fetches a string so response.json
  const handleClickHello = async () => {
    const response = await fetch("/api/hello");
    const data = await response.text();
    setTextMessage(data);
  };

  // fetches a string so response.text
  const handleClickGoodbye = async () => {
    const response = await fetch("/api/goodbye");
    const data = await response.json();
    setTextMessage(data);
  };
  // reset
  const handleReset = () => {
    setTextMessage("");
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 mx-auto bg-cyan-900 text-cyan-200">
      <div className="text-center">
        <h1 className="text-4xl"> ➡️ API Fun ⬅️</h1>
        <h2 text-lg>
          The fun spot to try out some API endpoints 🎯 in Next.js!
        </h2>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <button
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500"
          onClick={handleClickHello}
        >
          Say Hello
        </button>
        <button
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 "
          onClick={handleClickGoodbye}
        >
          Say Goodbye
        </button>
        <button
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 "
          onClick={handleReset}
        >
          reset
        </button>
        {testMessage && <p>{testMessage}</p>}
      </div>
      <Link
        className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 "
        href="/"
      >
        Back to Home
      </Link>
    </main>
  );
}
