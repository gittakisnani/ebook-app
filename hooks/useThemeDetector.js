import React, { useState, useEffect} from "react";
//typeof window !== 'undefined' ? getCurrentTheme() : true)
//window?.matchMedia("(prefers-color-scheme: dark)").matches
const useThemeDetector = (theme) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);  
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return [isDarkTheme, setIsDarkTheme];
}

export default useThemeDetector;