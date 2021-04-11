import React from 'react';
import Pagination from '../../components/Pagination';
import usePaginationPokemons from '../../hooks/usePaginationPokemons';
import Layout from '../../Layout';
import Pokemons from './Pokemons';
import './styles.css';

const Home = () => {
    const { pageCount, setPageCurrent } = usePaginationPokemons()
    return (
        <Layout>
            <div className="home-container">
                <Pokemons />
            </div>
            <nav className="mt-2" >
                <Pagination pageCount={pageCount} pageOnclick={setPageCurrent} />
            </nav>
        </Layout>
    )
}

export default Home;