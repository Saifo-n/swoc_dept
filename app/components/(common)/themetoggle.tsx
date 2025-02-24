"use client";

import { useTheme } from "@/app/context/themecontext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, handleThemeChange } = useTheme();

  return (
    <button
      onClick={handleThemeChange}
      className="p-2 rounded-full bg-black dark:bg-white text-white dark:text-black"
    >
      {theme === "dark" ? (
        <FaSun className="fill-current w-6 h-6 text-black" />
      ) : (
        <FaMoon className="fill-current w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
