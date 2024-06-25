import React from 'react';
import { Card } from '../types/CardType';

interface CardComponentProps {
    card: Card;
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
    return (
        <div key={card.id} className="card-item">
            {card.image_uris?.small ? (
                <img src={card.image_uris.small} alt={card.name} />
            ) : (
                <div>No Image</div>
            )}
            <h3>{card.name}</h3>
            <p>{card.set_name}</p>
            <p>{card.price}</p>
        </div>
    );
};

export default CardComponent;