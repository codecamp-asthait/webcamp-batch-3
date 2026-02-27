import { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext(null);

export function themeReducer(state, action) {
	switch (action.type) {
		case "TOGGLE_THEME":
			return state === "light" ? "dark" : "light";
		case "SET_THEME":
			return action.theme;
		default:
			throw new Error("Unknown theme action type");
	}
}



// export function useTheme() {
// 	const context = useContext(ThemeContext);

// 	if (!context) {
// 		throw new Error("useTheme must be used inside ThemeProvider");
// 	}

// 	return context;
// }