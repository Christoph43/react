import React, { Component } from "react";
import axios from "axios";
import * as S from "./styles.js";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

class App extends Component {
  //1º criando uma array vazia que vai receber as informações da API
  state = {
    info: []
  };

  componentDidMount() {
    this.PegarPersonagem();
  }

  PegarPersonagem = async () => {
    const resposta = await Api.get();

    console.log(resposta.data.results);

    const itens = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      info: itens
    });
  };

  render() {
    return (
      <S.Container>
        {this.state.info.map((item) => (
          <S.Box>
            <img src={item.image} alt="imagem do personagem" />
            <h2> {item.name} </h2>
          </S.Box>
        ))}
        ;
      </S.Container>
    );
  }
}

export default App;
