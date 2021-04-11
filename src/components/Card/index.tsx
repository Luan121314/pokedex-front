import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface CardPros {
    id: number,
    name: string,
    image: string,

}

const Card: React.FC<CardPros> = ({  name, image, id }) => {

    return (
        <div className="card-personalized card m-2">

            <div className="card-header">
                <h5 className="card-title name">{name}</h5>
            </div>

            <Link to={`/pokemons/${id}`} >
                <img src={image} className="card-img-top" alt="Imagem" />
            </Link>

            <div className="card-body">
                <p className="card-text">Nº{id}</p>
            </div>
        </div>
    )
}

export default Card;