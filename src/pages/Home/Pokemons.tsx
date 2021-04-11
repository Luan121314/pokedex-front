import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import usePaginationPokemons from '../../hooks/usePaginationPokemons';
import { PokemonSimpleProps } from '../../interfaces';
import api from '../../services/api';

const Pokemons = () => {
    const [pokemons, setPokemons] = useState<PokemonSimpleProps[]>()
    const totalItems = 1117;
    const limit = 20
    const {pageCurrent, setPageCount} = usePaginationPokemons()
    setPageCount(totalItems / limit)

    function handleLoadPokemons(page = 0) {
        setPokemons(undefined)
        const limit = 20
        const offset = page * limit
        api.get<PokemonSimpleProps[]>(`pokemons?offset=${offset}&limit=${limit}`).then(response => {
            setPokemons(response.data)
        })
    }

    useEffect(()=>{
        handleLoadPokemons(pageCurrent)
    }, [pageCurrent])

    if (!pokemons) {
        return <Loading text="Carregando Pokemon's" />
    }

    return (
        <>
            <div className="card-groups">
                {pokemons.map(pokemon => (
                    <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                    />
                ))}

            </div>
            
        </>
    )
}

export default Pokemons;