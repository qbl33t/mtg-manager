import React from 'react';
import CardComponent from './CardComponent';
import { CardPrices } from '../types/CardPriceType';
import { Card } from '../types/CardType';


interface CardListProps {
  cards: Card[];
  crPrices: CardPrices[];
}

const CardListComponent: React.FC<CardListProps> = ({ cards, crPrices }) => {
  return (
    <div className="card-list">
        {cards.map((card) => (
            <CardComponent card={card}/>
        ))}
    </div>
  );
};

export default CardListComponent;