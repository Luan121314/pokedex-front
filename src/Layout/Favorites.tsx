import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import MiniCard from '../components/MiniCard';
import { PokemonSimpleProps } from '../interfaces';
import api from '../services/api';

const Favorites = () => {
    const [pokemons, setPokemons] = useState<PokemonSimpleProps[]>();
    function handleLoadFavoritesPokemons() {
        api.get<PokemonSimpleProps[]>("pokemons/u/favorites").then(response => {
            setPokemons(response.data)
        })
    }

    useEffect(handleLoadFavoritesPokemons, [])

    if (!pokemons) {
        return <Loading text="Carregando favoritos" />
    }

    return (
        <>
            {
                pokemons.map(pokemon => (
                    <MiniCard
                        key={pokemon.id}
                        id={pokemon.id}
                        image={pokemon.image}
                        name={pokemon.name}
                    />
                ))
            }
        </>
    )
}

export default Favorites