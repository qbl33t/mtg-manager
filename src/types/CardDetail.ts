import { CernyRytirPriceResponse } from "./CernyRytirResponse";

//
//
//
export interface CardDetail {
    name: string;
    set: string;
    set_url: string;
    type: string;
    foil: boolean;
    rarity: string;
    condition: string;
    alternative: string;
    image_url: string;
    cr_detail: {
        id: string;
        quantity: string;
        price: string;
        original_name: string;
    }
}

export function fromCernyRytirPriceResponse(crResponse: CernyRytirPriceResponse): CardDetail {
    return {
        name: crResponse.name,
        set: crResponse.set,
        set_url: crResponse.set_url,
        type: crResponse.type,
        foil: crResponse.foil,
        rarity: crResponse.rarity,
        condition: crResponse.condition,
        alternative: crResponse.alternative,
        image_url: crResponse.image_url,
        cr_detail: {
            id: crResponse.id,
            quantity: crResponse.quantity,
            price: crResponse.price,
            original_name: crResponse.original_name
        }
    };
}