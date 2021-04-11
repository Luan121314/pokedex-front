import React from 'react';
import './App.css';
import { PaginationPokemonProvider } from './Contexts/PaginationPokemons';
import Routes from './Routes';

function App() {
  return (
    <PaginationPokemonProvider>
      <Routes />
    </PaginationPokemonProvider>
  );
}

export default App;
