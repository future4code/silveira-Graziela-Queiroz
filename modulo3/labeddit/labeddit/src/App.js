
import Router from "./routes/Router"
import theme from './contants/theme'
import { ThemeProvider } from "material-ui/core/styles"

const App = () => {
  return (
    <ThemeProvider theme={theme}> 
    <Router/>
    </ThemeProvider>
  )
}

export default App