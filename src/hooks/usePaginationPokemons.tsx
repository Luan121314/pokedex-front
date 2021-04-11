import {useContext} from 'react';
import PaginationPokemonContext from '../Contexts/PaginationPokemons';

function usePaginationPokemons(){
    return useContext(PaginationPokemonContext);
}

export default usePaginationPokemons;