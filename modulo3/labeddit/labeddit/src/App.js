import Router from "./routes/Router"
import Theme from './constants/Theme'
import { ThemeProvider } from "@material-ui/core/styles"
import React, { useState } from "react"
import Header from './components/header/Header'
import { useNavigate } from "react-router-dom"

const App = () => {
  // const token = localStorage.getItem("token")
  // const navigate = useNavigate()
  // const [ rightButtonText, setRightButtonText ] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        
      </Router>
    </ThemeProvider>
  )
}

export default App