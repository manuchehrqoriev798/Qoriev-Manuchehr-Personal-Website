import { useTheme } from "../../contexts/themeContextObject";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle ${styles.themeToggle}`}
      onClick={toggleTheme}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <i
        className="bx bxs-sun"
        aria-hidden
        style={{ opacity: isDarkMode ? 0 : 1 }}
      />
      <i
        className="bx bx-moon"
        aria-hidden
        style={{ opacity: isDarkMode ? 1 : 0 }}
      />
    </button>
  );
}
