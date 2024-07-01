import React from 'react';
import CardComponent from './CardComponent';
import { CardDetail } from '../types/CardDetail';

interface CardListProps {
  cards: CardDetail[] | undefined;
}

const CardListComponent: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="card-list">
      {cards ? (
        cards.map((card) => (
            <CardComponent card={card}/>
        ))
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default CardListComponent;