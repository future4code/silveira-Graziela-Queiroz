import React from 'react'
import Button from '@material-ui/core/Button'

function Botao(props) {
  return (
    <Button
      variant="contained"
      color={props.cor}
      fullWidth
      margin="normal"
      type= {props.tipo}
      onClick={() => props.funcao(props.parametro)}>
      {props.nome}
    </Button>
  )
}

export default Botao