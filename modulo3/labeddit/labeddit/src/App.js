import Router from "./routes/Router"
import Theme from './constantes/Theme'
import { ThemeProvider } from "@material-ui/core/styles"

const App = () => {
  return (
    <ThemeProvider theme={Theme}> 
    <Router/>
    </ThemeProvider>
  )
}

export default App