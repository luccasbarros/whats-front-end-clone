import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import BalaoMensagem from './assets/BalaoMensagem'

//
import SendIcon from './assets/img/send-icon.svg'
import logotipo from './assets/img/whatslab.png'


const ContainerGeral = styled.div`
display: flex;
justify-content: center;
`

const ContainerWhats = styled.div`
background-color: #E5DDD6;
height: 100vh;
width: 50vw;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: flex-end;
`

const ContainerInput = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1em;
`

const InputStyle = styled.input`
height: 2.8em;
margin-left: 1em;
padding-left: 1em;
border: none;
font-size: 0.9em;
border-radius: 5px;

width: ${props => {
  if (props.input === "usuario") {
    return "20%"
  } else if (props.input === "mensagem") {
    return "50%"
  }
}};
`


const SendButton = styled.img `
  height: 1.5em;
  margin-left: 1em;
`
const Footer = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
`

const WhatsLabLogo = styled.img`
  height: 2em;
  margin-right: 0.5em;
`

const Credits = styled.p `
  color: #748389;
  font-size: 0.8em;
  margin-top: 1.2em;
`


class App extends React.Component {

state = {
  mensagem: [],
  valorInputNome: "",
  valorInputConteudo: ""
}


onChangeUsuario = (event) => {
this.setState({
  valorInputNome: event.target.value
})


} 

onChangeMensagem = (event) => {
  this.setState({
    valorInputConteudo: event.target.value
  })

}

apertouEnter = (event) =>{
  if(event.key === "Enter") {
    this.mandarMensagem()
  } else {
  }
}

mandarMensagem = () => {

  if (this.state.valorInputNome !== "" && this.state.valorInputConteudo !== "") {

    const novaMensagem = {
      nome: this.state.valorInputNome,
      conteudo: this.state.valorInputConteudo
    }


    const novoArrayMsg = [...this.state.mensagem, novaMensagem]

    this.setState({
      mensagem: novoArrayMsg,
      valorInputNome: "",
      valorInputConteudo: ""
    })
  } else {
    alert("Escreva um nome de usuário e uma mensagem!")
  }

}

// deletarMensagem = (mensagemDeletada) => {
//   const novoArrayMensagemDel = this.state.mensagem.filter((mensagem) => {
//     if(mensagem.conteudo === mensagemDeletada) {
//       return false
//     } else {
//       return true
//     }
//   })

//   this.setState({mensagem: novoArrayMensagemDel})
// }





  render() {

  const listaMensagem = this.state.mensagem.map((msg) => {

    return (
      
      <BalaoMensagem 
      nome={msg.nome}
      conteudo={msg.conteudo}> 
      </BalaoMensagem>
    )
  })

 


  return (
    <ContainerGeral>
      <ContainerWhats>
        {listaMensagem}
        <ContainerInput>
        <InputStyle 
        input={"usuario"}
        value={this.state.valorInputNome}
        onChange={this.onChangeUsuario}
        placeholder="Usuário"/>
        <InputStyle 
        input={"mensagem"}
        value={this.state.valorInputConteudo}
        onChange={this.onChangeMensagem}
        onKeyDown={this.apertouEnter}
        placeholder="Mensagem"
        />
        <SendButton src={SendIcon} onClick={this.mandarMensagem}/>
        </ContainerInput>
        <Footer>
      <WhatsLabLogo src={logotipo}/> <Credits>by Luccas de Barros & Lucas Duarte </Credits>
      </Footer>
      </ContainerWhats>
    </ContainerGeral>
  );
  }
}

export default App;
