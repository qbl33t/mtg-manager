import React from 'react';
import { useSelector } from 'react-redux';
import {
    tradeListSelector
} from '../features/trade-list/tradeListSlice'
import { CardDetail } from '../types/CardDetail';

interface TradeWidgetProps {
}

const TradeWidget: React.FC<TradeWidgetProps> = () => {

    const tradeList = useSelector(tradeListSelector);

    let totalQuantity = 0;
    let totalPrice = 0;
    tradeList.forEach((quantity: number, cardTrade: CardDetail) => {
        totalQuantity += quantity;
        totalPrice = cardTrade.cr_detail.price * totalQuantity;
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
            <select>
                <option value="80%">80%</option>
                <option value="90%">90%</option>
                <option value="95%">95%</option>
            </select>
        </div>
    );
};

export default TradeWidget;