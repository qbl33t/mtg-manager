import React, { useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';

interface CardSearchProps {
    onSearch: (results: any[]) => void;
    onSearchPrices: (results: any[]) => void;
}

const CardSearch: React.FC<CardSearchProps> = ({ onSearch, onSearchPrices }) => {
    const [cardName, setCardName] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setCardName(event.target.value);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            handleSearchImages(event);
            handleSearchPrices();
        }
    };

    const handleSearchPrices = async (): Promise<void> => {
        try {
            const response = await axios.post(
                `https://crprice.qbl33t.workers.dev/`,
                { cardName: cardName },
                { headers: { 'Content-Type': 'application/json' }} 
            );
            onSearchPrices(response.data);
        } catch (error) {
            console.error("Error fetching data from CernyRytir API:", error);
        }
    }

    const handleSearchImages = async (event: MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
        try {
            const response = await axios.get(`https://api.scryfall.com/cards/search?q=${cardName}`);
            onSearch(response.data.data);
        } catch (error) {
            console.error("Error fetching data from Scryfall API:", error);
        }
    };

    return (
        <header style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button>Home</button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Enter card name"
                    value={cardName}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSearchImages}>Search</button>
            </div>
            <select>
                <option value="80%">80%</option>
                <option value="90%">90%</option>
                <option value="95%">95%</option>
            </select>
        </header>
    );
};

export default CardSearch;