import { createContext } from "react";


export const AlertData = createContext({
    show: false,
    msg: "",
    status: 'info'
});

export const UiThemeContext = createContext({});

export function UiThemeProvider({children, uiStyleData}) {
    return (
        <UiThemeContext.Provider value={uiStyleData}>
            { children }
        </UiThemeContext.Provider>
    )
}