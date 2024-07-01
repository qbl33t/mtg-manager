import React from 'react';
import { useSelector } from 'react-redux';
import {
    tradeListSelector
} from '../features/trade-list/tradeListSlice'

interface TradeWidgetProps {
}

const TradeWidget: React.FC<TradeWidgetProps> = () => {

    const count = useSelector(tradeListSelector);

    return (
        <div className="">
            <div>
                <p>Total: {count.size}</p>
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