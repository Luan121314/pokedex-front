import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';
import { paramsProps, PokemonDetailProps } from '../../interfaces';
import api from '../../services/api';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState<PokemonDetailProps>();
    const { id } = useParams() as paramsProps

    function handleLoadPokemons() {
        api.get<PokemonDetailProps>(`pokemons/${id}`).then(response => {
            setPokemon(response.data)
        })
    }

    useEffect(handleLoadPokemons, [id])

    function handlePokemonFavorite() {
        if (!pokemon) return;

        if (pokemon.isFavorite) {
            api.delete(`pokemons/${pokemon.ref}`).then(response => {
                handleLoadPokemons()
            })
        } else {
            const data = { idPokemon: pokemon.id }
            api.post<PokemonDetailProps>("pokemons", data).then(response => {
                setPokemon(response.data)
            })
        }
    }

    if (!pokemon) {
        return <Loading text="Carregando pokemons" />
    }

    return (
        <article className="pokemon-container" >
            <div className="box-image">
                <figure>
                    <img src={pokemon.image} alt="imagem do pokemon" />
                </figure>
                <h3 className="name" >{pokemon.name}</h3>
            </div>
            <aside>
                <header>
                    <h3>Propriedades</h3>
                    <button type="button" className="btn" onClick={handlePokemonFavorite} >
                        <FaHeart className="icon-favorite"
                            size={25}
                            style={{
                                borderColor: "#000",
                                borderWidth: 2,
                                filter: "drop-shadow(1px 1px 1px #000)",
                                color: pokemon.isFavorite ? "#f00" : "#fff"
                            }}
                        />
                    </button>
                </header>
                <div className="content">
                    <div className="name"  ><strong>Nome:</strong > {pokemon.name}</div>
                    <div><strong>Numero:</strong> {pokemon.id}</div>
                    <div><strong>Altura:</strong> {(pokemon.height / 10).toFixed(2)} metro(s)</div>
                    <div><strong>Experiêcia:</strong> {pokemon.base_experience}</div>
                    <div><strong>Peso:</strong> {pokemon.weight / 10} kg</div>
                    <div><strong>Habilidades</strong></div>
                    <ul>
                        {pokemon.abilities.map(ability => (
                            <li key={ability} >{ability}</li>
                        ))}
                    </ul>
                </div>
            </aside>
        </article>
    )
}

export default Pokemon;