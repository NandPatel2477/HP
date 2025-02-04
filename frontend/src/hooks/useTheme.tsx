// src/hooks/useTheme.tsx

"use client"; // Add this directive at the top

import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check localStorage or default to 'light' theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
