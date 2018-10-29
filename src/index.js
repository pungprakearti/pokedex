import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

async function fillPokemon(num = 5) {
  let pokemons = [];
  for (let i = 0; i < num; i++) {
    pokemons.push(await randomPokemon());
  }
  return pokemons;
}

async function randomPokemon() {
  let id = Math.floor(Math.random() * 802);
  let res = await axios({
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
    method: 'get'
  });
  console.log(res);
  return {
    id,
    name: res.data.forms[0].name,
    type: res.data.types[0].type.name
  };
}

//fill
async function runPokemon() {
  let pokemons = await fillPokemon();
  console.log(pokemons);
  ReactDOM.render(<App pokemons={pokemons} />, document.getElementById('root'));
}

runPokemon();

//get to pokedex

//run this bad boy

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
