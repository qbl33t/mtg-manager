import React from 'react';

interface Card {
  id: string;
  name: string;
  set_name: string;
  image_uris?: {
    small: string;
  };
}

interface CardListProps {
  cards: Card[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card-item">
          {card.image_uris?.small ? (
            <img src={card.image_uris.small} alt={card.name} />
          ) : (
            <div>No Image</div>
          )}
          <h3>{card.name}</h3>
          <p>{card.set_name}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;