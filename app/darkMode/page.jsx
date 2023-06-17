"use client";
import { useState } from "react";
import Link from "next/link";

const themes = ["default", "red", "blue", "green", "purple"];

export default function apiFun() {
  const [theme, setTheme] = useState(themes[0]);

  const nextTheme = () => {
    const currentThemeIndex = themes.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[nextThemeIndex]);
  };

  const getThemeClasses = (theme) => {
    switch (theme) {
      case "default":
        return {
          bg: "bg-cyan-900",
          text: "text-cyan-200",
          btnBg: "bg-cyan-700",
          hover: "hover:bg-cyan-600",
          active: "active:bg-cyan-500",
        };
      case "red":
        return {
          bg: "bg-red-900",
          text: "text-red-200",
          btnBg: "bg-red-700",
          hover: "hover:bg-red-600",
          active: "active:bg-red-500",
        };
      case "blue":
        return {
          bg: "bg-blue-900",
          text: "text-blue-200",
          btnBg: "bg-blue-700",
          hover: "hover:bg-blue-600",
          active: "active:bg-blue-500",
        };
      case "green":
        return {
          bg: "bg-green-900",
          text: "text-green-200",
          btnBg: "bg-green-700",
          hover: "hover:bg-green-600",
          active: "active:bg-green-500",
        };
      case "purple":
        return {
          bg: "bg-purple-900",
          text: "text-purple-200",
          btnBg: "bg-purple-700",
          hover: "hover:bg-purple-600",
          active: "active:bg-purple-500",
        };
      default:
        return {
          bg: "",
          text: "",
          btnBg: "",
          hover: "",
          active: "",
        };
    }
  };

  const themeClasses = getThemeClasses(theme);

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen gap-8 px-4 mx-auto ${themeClasses.bg} ${themeClasses.text}`}
    >
      <div className="text-center">
        <h1 className="text-4xl"> Theme Fun 🌈</h1>
        <h2 className="text-lg">The fun spot to try out different themes!</h2>
      </div>
      <button
        onClick={nextTheme}
        className={`p-2 rounded-lg ${themeClasses.btnBg} ${themeClasses.text} ${themeClasses.hover} ${themeClasses.active} mt-8`}
      >
        Next Theme
      </button>
      <Link
        className={`p-2 rounded-lg ${themeClasses.btnBg} ${themeClasses.text} ${themeClasses.hover} ${themeClasses.active}`}
        href="/"
      >
        Back to Home
      </Link>
    </main>
  );
}
