import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    tradeListSelector
} from '../features/trade-list/tradeListSlice'
import { CardDetail } from '../types/CardDetail';

interface TradeWidgetProps {
}

const TradeWidget: React.FC<TradeWidgetProps> = () => {

    const [discount, setDiscount] = useState<string>("1");

    const tradeList = useSelector(tradeListSelector);

    // TODO: got this is weird -> option value as "string"
    const handleDiscount = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setDiscount(event.target.value);
    }

    let totalQuantity = 0;
    let totalPrice = 0;
    tradeList.forEach((quantity: number, cardTrade: CardDetail) => {
        totalQuantity += quantity;
        totalPrice = Math.ceil((cardTrade.cr_detail.price * totalQuantity) * Number(discount));
    });
    // forEach((trade) => {
    //     totalQuantity += trade.quantity;
    //     totalPrice += trade.cr_detail.price * trade.quantity;
    // });

    return (
        <div className="">
            <div>
                <p>Total: {totalQuantity}</p>
                <p>Price: {totalPrice}</p>
            </div>
            <select value={discount} onChange={handleDiscount}>
                <option value="0.8">80%</option>
                <option value="0.9">90%</option>
                <option value="0.95">95%</option>
                <option value="1">100%</option>
            </select>
        </div>
    );
};

export default TradeWidget;