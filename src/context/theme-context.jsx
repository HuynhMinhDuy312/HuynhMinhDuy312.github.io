import { createContext, useContext, useEffect, useReducer } from "react";
import themeReducer from "./themeReducer";

const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem("themeSettings")) || {
    primary: "color-1",
    background: "bg-1",
};

export const ThemeProvider = ({ children }) => {
    const [themeState, dispatch] = useReducer(themeReducer, initialThemeState);

    const handleTheme = (buttonClassName) => {
        dispatch({ type: buttonClassName });
    };

    useEffect(() => {
        localStorage.setItem("themeSettings", JSON.stringify(themeState));
    }, [themeState.primary, themeState.background, themeState]);

    return (
        <ThemeContext.Provider value={{ themeState, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
