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
    },

    fill: {
      primary: string,
      secondary: string,
      tertiary: string,
      quaternary: string
      
      background: string,
      foreground: string,
    },
    gradient: {
      from: {
        primary: string,
        secondary: string,
        tertiary: string,
        quaternary: string
      },
      to: {
        primary: string,
        secondary: string,
        tertiary: string,
        quaternary: string
      },
      via: {
        primary: string,
        secondary: string,
        tertiary: string,
        quaternary: string
      }
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
      },

      fill: {
        background: "fill-white",
        foreground: "fill-black",

        primary: "fill-light_primary",
        secondary: "fill-light_secondary",
        tertiary: "fill-light_tertiary",
        quaternary: "fill-light_quaternary"
      },
      gradient: {
        from: {
          primary: "from-light_primary",
          secondary: "from-light_secondary",
          tertiary: "from-light_tertiary",
          quaternary: "from-light_quaternary"
        },
        to: {
          primary: "to-light_primary",
          secondary: "to-light_secondary",
          tertiary: "to-light_tertiary",
          quaternary: "to-light_quaternary"
        },
        via: {
          primary: "via-light_primary",
          secondary: "via-light_secondary",
          tertiary: "via-light_tertiary",
          quaternary: "via-light_quaternary"
        },
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
      },

      fill: {
        background: "fill-white",
        foreground: "fill-black",

        primary: "fill-light_primary",
        secondary: "fill-light_secondary",
        tertiary: "fill-light_tertiary",
        quaternary: "fill-light_quaternary"
      },
      gradient: {
        from: {
          primary: "from-light_primary",
          secondary: "from-light_secondary",
          tertiary: "from-light_tertiary",
          quaternary: "from-light_quaternary"
        },
        to: {
          primary: "to-light_primary",
          secondary: "to-light_secondary",
          tertiary: "to-light_tertiary",
          quaternary: "to-light_quaternary"
        },
        via: {
          primary: "via-light_primary",
          secondary: "via-light_secondary",
          tertiary: "via-light_tertiary",
          quaternary: "via-light_quaternary"
        },
      }
    }
  };

  const darkTheme: ThemeType = {
    ...lightTheme,
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
      },

      fill: {
        background: "fill-white",
        foreground: "fill-black",

        primary: "fill-dark_primary",
        secondary: "fill-dark_secondary",
        tertiary: "fill-dark_tertiary",
        quaternary: "fill-dark_quaternary"
      },
      gradient: {
        from: {
          primary: "from-dark_primary",
          secondary: "from-dark_secondary",
          tertiary: "from-dark_tertiary",
          quaternary: "from-dark_quaternary"
        },
        to: {
          primary: "to-dark_primary",
          secondary: "to-dark_secondary",
          tertiary: "to-dark_tertiary",
          quaternary: "to-dark_quaternary"
        },
        via: {
          primary: "via-dark_primary",
          secondary: "via-dark_secondary",
          tertiary: "via-dark_tertiary",
          quaternary: "via-dark_quaternary"
        },
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
