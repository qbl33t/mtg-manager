import React, { useState } from 'react';
import CardSearch from './components/CardSearch';
import CardListComponent from './components/CardListComponent';
import './App.css';

interface Card {
  id: string;
  name: string;
  set_name: string;
  image_uris?: {
    small: string;
  };
}

interface CardPrice {
  name: string;
  price: number;
  available: number;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [prices, setPrices] = useState<CardPrice[]>([]);

  const handleSearchResults = (results: Card[]): void => {
    setCards(results);
  };

  const handleSearchPriceResults = (results: CardPrice[]): void => {
    setPrices(results);
  };

  return (
    <div className="App">
      <CardSearch onSearch={handleSearchResults} onSearchPrices={handleSearchPriceResults}/>
      <CardListComponent cards={cards} crPrices={prices}/>
    </div>
  );
};

export default App;