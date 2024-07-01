import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import * as CernyRytirService from '../service/CernyRytirService';
import TradeWidget from './TradeWidgetComponent';
import { CardDetail, fromCernyRytirPriceResponse } from '../types/CardDetail';

//
// First - I dont like the fact Header contains some searching stuff => create services for that
// Second - changing from CustomServiceResponse to CardDetail is fine but what isn't => dealing with it here
//

interface CardSearchProps {
    onSearch: (results: CardDetail[] | undefined) => void;
}

const Header: React.FC<CardSearchProps> = ({ onSearch }) => {

    const [cardName, setCardName] = useState<string>('');

    // handling text input
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        // setCardName(event.target.value);
        // TODO: for debug only counterspell is fetched
        setCardName(event.target.value);
    };
    // handling Enter key
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            handleCardSearch(event);
        }
    };

    // handling card image & price fetch
    const handleCardSearch = async (event: MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
        // currently just fetching from CernyRytir
        const results = await CernyRytirService.handleSearchPrice(cardName);

        onSearch(results?.map( card => {
            return fromCernyRytirPriceResponse(card);
        }))
    }

    return (
<header style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    Home
    </button>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
            type="text"
            placeholder="Enter card name"
            value={cardName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
        />
        <button 
            onClick={handleCardSearch} 
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Search
        </button>
        <TradeWidget />
    </div>
</header>
    );
};

export default Header;