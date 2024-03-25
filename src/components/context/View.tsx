import { createContext, useState } from "react";

interface ThemeContextType {
  view: string;
  toggleView: () => void;
}

// Creating a View Context
export const ViewContext = createContext<ThemeContextType>({ view: 'desktop', toggleView: () => {}});


// Creating a Provider for the Context
const ThemeProvider = ({ children }: any) => {
    // Perspective Toggle: 'mobile' <-> 'desktop' 
  const [view, setView] = useState<string>('desktop');

  const toggleView = () => {
    setView(prevView => (prevView === 'desktop' ? 'mobile' : 'desktop'));
  };

  return (
    <ViewContext.Provider value={{ view, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}

export default ThemeProvider
