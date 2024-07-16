import { createContext } from "preact";

import { useContext, useEffect, useState } from "preact/hooks";

const ThemeContext=createContext()

export const  useTheme=()=>{
    return useContext(ThemeContext)
}


export const ThemeProvider=({children})=>{
    const [isDarkmode,setIsDarkMode]=useState(false)
    const theme=isDarkmode ? "dark" :"light"

    const toggleTheme=()=>{
        setIsDarkMode((prevState)=>!prevState)
    }
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
        },[isDarkmode])

    return(

        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}