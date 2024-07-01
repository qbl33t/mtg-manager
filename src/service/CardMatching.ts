import { CardScryfallResponse } from "../types/ScryfallResponse";

const matchCards = (cardImages: CardScryfallResponse | undefined, cardPrices: object | undefined) => {

    if (!cardImages) {
        console.log(`No data from Scryfall API!`);
    }

    if (!cardPrices) {
        console.log(`No data from CernyRytir website!`);
    }

    // get sets of the card and try to match it
    // "set_id": "cd05036f-2698-43e6-a48e-5c8d82f0a551",
    // "set": "cmm",
    // "set_name": "Commander Masters",
    // "set_type": "masters",

    // console.log(`Scryfall: \n ${JSON.stringify(cardImages, undefined, 4)}`);
    // console.log(`\n\nCernyRytir: \n ${JSON.stringify(cardPrices, undefined, 4)}`);
};

export default matchCards;