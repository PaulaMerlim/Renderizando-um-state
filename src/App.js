// Crie uma class component

// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)

//**Bônus
// Adicione uma imagem da sua fruta favorita via import

import React from "react";
import Fruta from "./Img/banana.png";

export default class App extends React.Component {
  state = {
    nome: "Paula",
    idade: 45,
    comida: " Bolo de Batata",
    musicas: ["N", "Tocando em frente", "Dona"],
    img: Fruta
  };
  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade} anos </h2>
        <h3> Meu prato favorito é {this.state.comida} </h3>
        <nav>
          <ul>
            <li>{this.state.musicas[0]}</li>
            <li>{this.state.musicas[1]}</li>
            <li>{this.state.musicas[2]}</li>
          </ul>
        </nav>
        <img alt="banana" src={this.state.img} />
      </div>
    );
  }
}
