import React, { createContext, useState } from 'react';

interface PaginationPokemonData {
    pageCount: number
    setPageCount: (numberPages: number) => void
    pageCurrent: number
    setPageCurrent: (numberPages: number) => void
}

const PaginationPokemonContext = createContext({} as PaginationPokemonData)

export const PaginationPokemonProvider: React.FC = ({ children }) => {
    const [pageCount, setPageCount] = useState(0)
    const [pageCurrent, setPageCurrent] = useState(0)
  
    return (
        <PaginationPokemonContext.Provider value={{
            pageCount,
            setPageCount,
            pageCurrent,
            setPageCurrent
        }} >
            {children}
        </PaginationPokemonContext.Provider>
    )
}

export default PaginationPokemonContext