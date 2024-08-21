import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      let allPokemon = response.data.results.map(pokemon => pokemon.name);
      setPokemonList(allPokemon);
    } catch (error) {
      console.error("There was an error fetching the Pokémon data!", error);
    }
  };

  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;