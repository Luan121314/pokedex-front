import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Layout from '../../Layout';
import Pokemon from './Pokemon';
import './styles.css';

const Detail = () => {
    // const history = useHistory();

    return (
        <Layout>
            <div className="details-container">
                   <Pokemon/>
                <footer>
                    <Link to="/pokemons" >
                        <FaArrowLeft size={25} color="#000" />
                    </Link>
                </footer>
            </div>
        </Layout>
    )
}

export default Detail;