import React from "react";
import styled from "styled-components";

const MensagemContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const MensagemHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

class Mensagem extends React.Component {

    render() {


    return <MensagemContainer>
        <MensagemHeader>
            <p>{this.props.nome}&nbsp;</p> 
            <p>{this.props.mensagem} </p>
        </MensagemHeader>
    </MensagemContainer>

    }
}

export default Mensagem