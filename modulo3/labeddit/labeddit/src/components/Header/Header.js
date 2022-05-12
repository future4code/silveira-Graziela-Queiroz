import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToobar } from './styled'
import Button from '@material-ui/core/Button'
import { goToFeed, goToLogin } from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const token = localStorage.getItem("token")
  const [ rightButtonText, setRightButtonText ] = useState(token ? 'Logout' : 'Login')
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token) {
      logout()
      setRightButtonText("Login")
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
    <AppBar position="static">
      <StyledToobar>
        <Button onClick={() => goToFeed(navigate)} color="inherit">labeddit</Button>
        <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
      </StyledToobar>
    </AppBar>
  )
}

export default Header