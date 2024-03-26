import { createContext, useState } from "react";

interface ThemeType {
  isDark: boolean;
  colors: {

    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    }
    
    
    text: {
      foreground: string;
      background: string;
    }
  };
}

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

// Creating a Theme Context
export const ThemeContext = createContext<ThemeContextType>({
  theme: { 
    isDark: false, 
    colors: { 
      background: {
        primary: "bg-light_primary",
        secondary: "bg-light_secondary",
        tertiary: "bg-light_tertiary",
        quaternary: "bg-light_quaternary"
      },
      
      text: {
        foreground: "text-white",
        background: "text-black"
      }
    }
  },
  toggleTheme: () => {},
});

// Creating a Provider for the Context
const ThemeProvider = ({ children }: any) => {
  const lightTheme: ThemeType = {
    isDark: false,
    colors: { 
      background: {
        primary: "bg-light_primary",
        secondary: "bg-light_secondary",
        tertiary: "bg-light_tertiary",
        quaternary: "bg-light_quaternary"
      },
      
      text: {
        foreground: "text-white",
        background: "text-black"
      }
    }
  };

  const darkTheme: ThemeType = {
    isDark: true,
    colors: { 
      background: {
        primary: "bg-dark_primary",
        secondary: "bg-dark_secondary",
        tertiary: "bg-dark_tertiary",
        quaternary: "bg-dark_quaternary"
      },
      
      text: {
        foreground: "text-black",
        background: "text-white"
      }
    }
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
