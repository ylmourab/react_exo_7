import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Article from './compnents/Article';

export class App extends Component {
  state = {
    nom :"abricot",
    prix :"25"

}
  render() {
    return (
      <div>
        <Article nom="chemise" prix ="29"></Article>
        <Article nom="pantalon" prix ="35"></Article>
        <Article nom ={this.state.nom} prix={this.state.prix}></Article>
      </div>
    )
  }
}

export default App
