import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 focus:outline-none ${theme === "dark"
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-gray-200 text-blue-600 hover:bg-gray-300"
                }`}
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
    );
};

export default ThemeToggle;
