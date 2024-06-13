import React, { useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';

interface CardSearchProps {
  onSearch: (results: any[]) => void;
}

const CardSearch: React.FC<CardSearchProps> = ({ onSearch }) => {
  const [cardName, setCardName] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCardName(event.target.value);
  };

  const handleSearch = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
    try {
      const response = await axios.get(`https://api.scryfall.com/cards/search?q=${cardName}`);
      onSearch(response.data.data);
    } catch (error) {
      console.error("Error fetching data from Scryfall API:", error);
    }
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Enter card name"
        value={cardName}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </header>
  );
};

export default CardSearch;