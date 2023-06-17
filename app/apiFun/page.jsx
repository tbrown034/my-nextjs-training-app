"use client";
import { useState } from "react";
import Link from "next/link";

const themes = [
  "Default",
  "Red",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Underwater",
  "Forest",
  "Desert",
  "Sunset",
  "Party",
  "Space",
];
const colorThemes = ["Default", "Red", "Yellow", "Green", "Blue", "Purple"];

export default function apiFun() {
  const [theme, setTheme] = useState(themes[0]);
  const [colorThemeIndex, setColorThemeIndex] = useState(0);

  const getThemeClasses = (theme) => {
    switch (theme) {
      case "Default":
        return {
          bg: "bg-cyan-900",
          text: "text-cyan-200",
          btnBg: "bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500",
        };
      case "Red":
        return {
          bg: "bg-red-500",
          text: "text-red-100",
          btnBg: "bg-red-700 hover:bg-red-600 active:bg-red-800",
        };
      case "Yellow":
        return {
          bg: "bg-yellow-500",
          text: "text-yellow-900",
          btnBg: "bg-yellow-700 hover:bg-yellow-600 active:bg-yellow-800",
        };
      case "Green":
        return {
          bg: "bg-green-500",
          text: "text-green-100",
          btnBg: "bg-green-700 hover:bg-green-600 active:bg-green-800",
        };
      case "Blue":
        return {
          bg: "bg-blue-500",
          text: "text-blue-100",
          btnBg: "bg-blue-700 hover:bg-blue-600 active:bg-blue-800",
        };
      case "Purple":
        return {
          bg: "bg-purple-500",
          text: "text-purple-100",
          btnBg: "bg-purple-700 hover:bg-purple-600 active:bg-purple-800",
        };
      case "Underwater":
        return {
          bg: "bg-gradient-to-b from-blue-400 to-blue-900",
          text: "text-blue-100",
          btnBg: "bg-blue-600 hover:bg-blue-500 active:bg-blue-700",
        };
      case "Forest":
        return {
          bg: "bg-gradient-to-t from-green-800 via-green-600 to-green-400",
          text: "text-green-900",
          btnBg: "bg-green-700 hover:bg-green-600 active:bg-green-800",
        };
      case "Desert":
        return {
          bg: "bg-gradient-to-r from-yellow-400 to-red-500",
          text: "text-red-900",
          btnBg: "bg-red-700 hover:bg-red-600 active:bg-red-800",
        };
      case "Sunset":
        return {
          bg: "bg-gradient-to-b from-red-400 via-orange-500 to-purple-600",
          text: "text-purple-100",
          btnBg: "bg-purple-700 hover:bg-purple-600 active:bg-purple-800",
        };
      case "Party":
        return {
          bg: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
          text: "text-white",
          btnBg: "bg-purple-700 hover:bg-purple-600 active:bg-purple-800",
        };
      case "Space":
        return {
          bg: "bg-gradient-to-b from-black via-purple-800 to-indigo-600",
          text: "text-indigo-100",
          btnBg: "bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-800",
        };
      default:
        return {
          bg: "",
          text: "",
          btnBg: "",
        };
    }
  };

  const { bg, text, btnBg } = getThemeClasses(theme);

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen gap-8 px-4 mx-auto ${bg} ${text}`}
    >
      <div className="text-center">
        <h1 className="text-4xl"> ➡️ API Fun ⬅️</h1>
        <h2 className="text-lg">
          The fun spot to try out some API endpoints 🎯 in Next.js!
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {themes.map((item, index) => (
          <button
            className={`p-2 rounded-lg ${btnBg}`}
            key={index}
            onClick={() => setTheme(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2 text-center">
        <button className={`p-2 rounded-lg ${btnBg}`}>Say Hello</button>
        <button className={`p-2 rounded-lg ${btnBg}`}>Say Goodbye</button>
        <button className={`p-2 rounded-lg ${btnBg}`}>Reset</button>
      </div>

      <Link className={`p-2 rounded-lg ${btnBg}`} href="/">
        Back to Home
      </Link>
    </main>
  );
}
