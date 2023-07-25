import React from "react"
import Layout from "../components/layout"
import { useTheme } from "../utils/themeContext"

 const Index = ()=> {
  const { toggleTheme } = useTheme()
  return (
    <Layout>
      <div className="absolute w-screen h-screen bg-background p-12 flex flex-col align-center">
        <h1 className="text-center text-heading text-4xl font-bold">
          Gatsby + Tailwind Theme
        </h1>
        
        <p className="text-center mt-8 text-xl text-body">
          Developed by{" "}
          <a
            className="text-primary hover:text-primary-hover"
            href="https://github.com/yeasinshakil"
            target="_blank"
          >
           Yeasin Shakil
          </a>
        </p>
        <div className="text-center">
          <button
            className="m-8 p-4 border rounded-lg bg-primary hover:bg-primary-hover text-white transition duration-200"
            onClick={toggleTheme}
          >
            Toggle theme
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Index;