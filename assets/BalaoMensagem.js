import React from 'react'
import styled from 'styled-components'
import AppJs from './../App'


const ContainerBalao = styled.div`

    border-radius: 4px;
    margin-bottom: 1em;
    margin-left: ${props => {
        if (props.tipo === "eu") {
            return "13em"
        } else if (props.tipo === "outro") {
            return "1.3em"
        }
    }};
    margin-right: ${props => {
        if (props.tipo === "eu") {
            return "1.3em"
        } else if (props.tipo === "outro") {
            return "13em"
        }
    }

    };
    padding-left: 1em;
    background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8"
        } else if (props.tipo === "outro") {
            return "#ffffff"
        }
}};
`
    

class BalaoMensagem extends React.Component {

    // deletarMensagem = (mensagemDeletada) => {
    //     const novoArrayMensagemDel = this.props.mensagem.filter((mensagem) => {
    //       if(mensagem.conteudo === mensagemDeletada) {
    //         return false
    //       } else {
    //         return true
    //       }
    //     })
      
    //     this.setState({mensagem: novoArrayMensagemDel})
    //   }
      

    render() {
        if (this.props.nome === "eu" || this.props.nome === "Eu" || this.props.nome === "EU") {
            return (
                <ContainerBalao tipo={"eu"}>
                    <p>{this.props.conteudo}</p>
                </ContainerBalao>
            )
        } else {
            return (
                <ContainerBalao tipo={"outro"}>
                    <p><strong>{this.props.nome}</strong></p>
                    <p>{this.props.conteudo}</p>
                </ContainerBalao>
            )
        }
    }
}

export default BalaoMensagem
