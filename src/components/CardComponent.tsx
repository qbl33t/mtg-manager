import React, {useState} from 'react';
import { CernyRytirPriceResponse } from '../types/CernyRytirResponse';
import { WantListType } from '../types/WantListType';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  remove
} from '../features/trade-list/tradeListSlice';
import { CardDetail } from '../types/CardDetail';

interface CardComponentProps {
    card: CardDetail;
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {

    // redux state
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState<number>(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);
    
    const handleAddToTradingList = () => {
        // Implement the logic for adding to the trading list
        console.log(`Added ${quantity} ${card.name} - ${card.cr_detail.id} to the trading list.`);

        dispatch(add(card));

        // onAdd({quantity, card});
    };

    return (
        <div className="flex flex-col md:flex-row w-full bg-white shadow-md rounded-lg p-4 mb-4">
            {/* Left column: Image */}
            <div className="w-full md:w-1/4 flex justify-center items-center mb-4 md:mb-0">
                <img src={card.image_url} alt={card.name} className="w-full md:w-32 h-auto rounded-lg" />
            </div>
            {/* Middle column: Card details */}
            <div className="w-full md:w-2/4 flex flex-col justify-between px-4">
                <div className="mb-2">
                    <h2 className="font-bold text-lg">{card.name}</h2>
                    <p className="text-gray-600">Mana Value: N/A</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={card.set_url} alt={card.set} className="w-6 h-6 mr-2" />
                        <p className="text-gray-600">{card.set}</p>
                    </div>
                    <p className="text-gray-600">{card.rarity}</p>
                </div>
            </div>
            {/* Right column: Trading actions */}
            <div className="w-full md:w-1/4 flex flex-col justify-center items-center">
                <p className="text-gray-600">CR price: {card.cr_detail.price}</p>
                <p className="text-gray-600">CR quantity: {card.cr_detail.quantity}</p>
                <label className="mb-2">Want</label>
                <div className="flex items-center mb-2">
                    <button 
                        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-l"
                        onClick={handleDecrease}>-</button>
                    <span className="bg-white text-gray-700 py-2 px-4 border border-gray-300">{quantity}</span>
                    <button 
                        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-r"
                        onClick={handleIncrease}>+</button>
                </div>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleAddToTradingList}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default CardComponent;