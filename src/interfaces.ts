export interface PokemonSimpleProps {
    id: number,
    name: string,
    image: string
}
export interface PokemonDetailProps {
    id: number,
    ref:string,
    name: string,
    height: number,
    weight: number,
    image: string,
    isFavorite: boolean,
    base_experience: string,
    abilities: Array<string>
}

export interface paramsProps {
    id: string
}