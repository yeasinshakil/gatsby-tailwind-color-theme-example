import React, { createContext, useContext, useState } from "react"

const initialValue = { theme: "theme-light" }

export const ThemeContext = createContext(initialValue)

const ThemeProvider = ({ children })=> {
  const [theme, setTheme] = useState("theme-light")

  function toggleTheme() {
    console.log("TOGGLE!!")
    setTheme(theme === "theme-light" ? "theme-dark" : "theme-light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme= ()=> {
  return useContext(ThemeContext)
}

export default ThemeProvider;