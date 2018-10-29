import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
// import axios from 'axios';

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <img
          src="https://camo.githubusercontent.com/1a4b11888ddf9f2b7a9353d6b69503e634e8704c/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
          alt="Pokedex logo"
          className="Pokedex-logo"
        />
        <div className="Pokedex-pokecards">
          {this.props.pokemons.map(pokemon => {
            return (
              <Pokecard
                name={pokemon.name}
                id={pokemon.id}
                type={pokemon.type}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
