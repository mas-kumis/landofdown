import { useState, createContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

const Headers = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

const ThemeContextSection = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Headers />
    </ThemeContext.Provider>
  );
};

export default ThemeContextSection;
