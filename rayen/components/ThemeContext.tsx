import { useState, createContext, useContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProps = {
  children: React.ReactNode;
};
const ThemeContextSection = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Headers = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, setTheme } = context;
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Theme Context Example</h1>
      <p className="text-gray-600">
        This is an example of using context to manage theme.
      </p>
      <button
        onClick={handleClick}
        className={`mt-4 p-2 rounded ${
          theme === "light"
            ? "bg-blue-500 text-white"
            : "bg-gray-800 text-white"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

ThemeContextSection.Headers = Headers;
export default ThemeContextSection;
