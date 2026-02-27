import { useReducer , useContext } from "react";

import { ThemeContext , themeReducer } from "./themeContext";

export default function ThemeProvider({ children }) {
	const [theme, themeDispatch] = useReducer(themeReducer, "light");

	return (
		<ThemeContext.Provider value={{ theme, themeDispatch }}>
			{children}
		</ThemeContext.Provider>
	);
}