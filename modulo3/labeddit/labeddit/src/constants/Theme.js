import { createTheme } from '@material-ui/core/styles'
import {primaryColor,neutralColor}from "./colors"

const Theme = createTheme({
  palete: {
    primary: {
       main:primaryColor,
       contrastText: "white"
    },
    text:{
      primary:neutralColor 
    }
  }
})
export default Theme