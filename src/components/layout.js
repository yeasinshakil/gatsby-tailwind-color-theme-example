import React from "react"
import { useTheme } from "../utils/themeContext"
 const Layout = ({ children })=> {
  const { theme } = useTheme()
  return (
    <div className={`content-transition duration-200 ${theme}`}>{children}</div>
  )
}
export default Layout;
