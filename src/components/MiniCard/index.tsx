import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface CardPros {
    id: number,
    name: string,
    image: string,

}

const MiniCard: React.FC<CardPros> = ({ name, image, id }) => {


    return (
        <div className="card mini-card " >
            <div className="image">
                <Link to={`/pokemons/${id}`} >
                    <img src={image} alt="Imagem pokemon" />
                </Link>
            </div>
            <div className="properties">
                <div className="card-body">
                    <h5 className="card-title name">{name}</h5>
                    <p className="card-text">Numero: {id}</p>
                </div>
            </div>
        </div>
    )
}

export default MiniCard;