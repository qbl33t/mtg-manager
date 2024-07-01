import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CardListComponent from './components/CardListComponent';
import './App.css';
import { CardDetail } from './types/CardDetail';

const App: React.FC = () => {
  const [cards, setCards] = useState<CardDetail[] | undefined>([]);

  const handleSearchResults = (results: CardDetail[] | undefined): void => {
    setCards(results);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearchResults}/>
      <CardListComponent cards={cards}/>
    </div>
  );
};

export default App;