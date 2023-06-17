"use client";
import { useState } from "react";
import Link from "next/link";

// Define your themes
const themes = {
  default: {
    background: "bg-cyan-900",
    text: "text-cyan-200",
    button: "bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500",
  },
  red: {
    background: "bg-red-500",
    text: "text-white",
    button: "bg-red-700 hover:bg-red-600 active:bg-red-500",
  },
  green: {
    background: "bg-green-500",
    text: "text-white",
    button: "bg-green-700 hover:bg-green-600 active:bg-green-500",
  },
  blue: {
    background: "bg-blue-500",
    text: "text-white",
    button: "bg-blue-700 hover:bg-blue-600 active:bg-blue-500",
  },
  purple: {
    background: "bg-purple-500",
    text: "text-white",
    button: "bg-purple-700 hover:bg-purple-600 active:bg-purple-500",
  },
  underwater: {
    background: "bg-gradient-to-r from-blue-400 to-green-400",
    text: "text-white",
    button: "bg-blue-700 hover:bg-blue-600 active:bg-blue-500",
  },
  forest: {
    background: "bg-gradient-to-r from-green-400 via-yellow-300 to-brown-400",
    text: "text-white",
    button: "bg-green-700 hover:bg-green-600 active:bg-green-500",
  },
  desert: {
    background: "bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500",
    text: "text-black",
    button: "bg-yellow-700 hover:bg-yellow-600 active:bg-yellow-500",
  },
  sunset: {
    background: "bg-gradient-to-r from-pink-500 via-red-500 to-purple-500",
    text: "text-white",
    button: "bg-pink-700 hover:bg-pink-600 active:bg-pink-500",
  },
  party: {
    background: "bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400",
    text: "text-white",
    button: "bg-pink-700 hover:bg-pink-600 active:bg-pink-500",
  },
  space: {
    background: "bg-gradient-to-r from-black via-purple-700 to-blue-700",
    text: "text-white",
    button: "bg-purple-700 hover:bg-purple-600 active:bg-purple-500",
  },
};

export default function apiFun() {
  const [theme, setTheme] = useState(themes.default);

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen gap-8 px-4 mx-auto ${theme.background} ${theme.text}`}
    >
      <div className="text-center">
        <h1 className="text-4xl">Fun with Themes! 🎉</h1>
        <h2 className="text-lg">Choose a color theme or a fun theme!</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {Object.keys(themes).map((key) => (
          <button
            key={key}
            className={`p-2 rounded-lg ${themes[key].button}`}
            onClick={() => setTheme(themes[key])}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <Link className={`p-2 rounded-lg ${theme.button}`} href="/">
        Back to Home
      </Link>
    </main>
  );
}
