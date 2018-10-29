import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    let colors = {
      fire: 'rgb(221,62,70)',
      water: 'rgb(107, 107, 214)',
      flying: 'rgb(144,180,180)',
      normal: 'rgb(135,98,39)',
      bug: 'green',
      grass: 'green',
      dragon: 'red',
      steel: 'gray',
      fairy: 'pink',
      electric: 'yellow',
      psychic: 'purple',
      ground: 'brown',
      poison: 'darkgray',
      ghost: 'lightpurple',
      rock: 'gray',
      dark: 'darkpurple',
      ice: 'blue',
      fighting: 'darkorange'
    };
    return (
      <div
        className="Pokecard"
        style={{ backgroundColor: colors[this.props.type] }}
      >
        <h2>{this.props.name}</h2>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            this.props.id
          }.png`}
          alt="pokemon card"
          className="Pokecard-img"
        />
        <h3>Type: {this.props.type}</h3>
      </div>
    );
  }
}

export default Pokecard;
