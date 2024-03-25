import { createContext, useState } from "react";

interface ThemeType {
  isDark: boolean;
  colors: {
    background: string;
  };
}

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

// Creating a Theme Context
export const ThemeContext = createContext<ThemeContextType>({
  theme: { isDark: false, colors: { background: "bg-red-200" } },
  toggleTheme: () => {},
});

// Creating a Provider for the Context
const ThemeProvider = ({ children }: any) => {
  const lightTheme: ThemeType = {
    isDark: false,
    colors: {
      background: "bg-red-200",
    },
  };

  const darkTheme: ThemeType = {
    isDark: true,
    colors: {
      background: "bg-green-200",
    },
  };

  // Theme Toggle: 'dark' <-> 'light'
  const [theme, setTheme] = useState<ThemeType>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.isDark ? lightTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
