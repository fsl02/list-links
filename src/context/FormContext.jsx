import { createContext } from "react";


export const AlertData = createContext({
    show: false,
    msg: "",
    status: 'info'
})