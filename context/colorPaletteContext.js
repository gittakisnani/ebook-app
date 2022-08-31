import { createContext, useState, useContext } from "react";

const ColorPaletteContext = createContext({});

export const ColorPaletteProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('#3b3bff');
    return (
        <ColorPaletteContext.Provider value={{currentColor, setCurrentColor}}>
            {children}
        </ColorPaletteContext.Provider>
    )
}

export const useColorContext = () => useContext(ColorPaletteContext);
export default ColorPaletteContext