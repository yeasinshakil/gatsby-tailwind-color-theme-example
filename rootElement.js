import React from "react"
import ThemeProvider from "./src/utils/themeContext"

const RootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

export default RootElement;
