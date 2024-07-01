//
//
//

// {
//     "id": "uma_094",
//     "name": "Karn Liberated",
//     "set": "Ultimate Masters",
//     "set_url": "https://www.cernyrytir.cz:443/images/kusovky/uma.gif",
//     "type": "Legendary Planeswalker — Karn",
//     "foil": true,
//     "rarity": "Mythic",
//     "quantity": "4",
//     "price": "399",
//     "condition": "nm",
//     "alternative": "",
//     "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/UMA/094.jpg"
// },

export interface CernyRytirPriceResponse {
    id: string;
    name: string;
    set: string;
    set_url: string;
    type: string;
    foil: boolean;
    rarity: string;
    quantity: string;
    price: string;
    condition: string;
    alternative: string;
    image_url: string;
    original_name: string;
}

export interface CernyRytirSetResponse {
    set: string;
    set_name: string;
}