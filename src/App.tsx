import React, { useState } from 'react';
import CardSearch from './components/CardSearch';
import CardList from './components/CardList';
import './App.css';

interface Card {
  id: string;
  name: string;
  set_name: string;
  image_uris?: {
    small: string;
  };
}

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const handleSearchResults = (results: Card[]): void => {
    setCards(results);
  };

  return (
    <div className="App">
      <CardSearch onSearch={handleSearchResults} />
      <CardList cards={cards} />
    </div>
  );
};

export default App;