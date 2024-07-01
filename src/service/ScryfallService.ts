import axios from 'axios';

import { CardScryfallResponse, SetScryfallResponse } from '../types/ScryfallResponse';

// Yes, I know I should create some generic service for fetching card images
// but for sake of the PoC I leave it as it is.

export const handleSearchImages = async (cardName: string): Promise<CardScryfallResponse | undefined> => {
    try {
        const response = await axios.get(`https://api.scryfall.com/cards/search?q=${cardName}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching CARD DATA from Scryfall API:", error);
        return undefined;
    }
};

export const handleSearchSets = async (): Promise<SetScryfallResponse[] | undefined> => {
    try {
        const response = await axios.get(`https://api.scryfall.com/sets`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching SETS from Scryfall API:", error);
        return undefined;
    }
}