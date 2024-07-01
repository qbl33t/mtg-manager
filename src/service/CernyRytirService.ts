import axios from 'axios';
import { CernyRytirPriceResponse, CernyRytirSetResponse } from '../types/CernyRytirResponse';

// Yes, I know I should create some generic service for fetching card images
// but for sake of the PoC I leave it as it is.

export const handleSearchPrice = async (cardName: string): Promise<CernyRytirPriceResponse[] | undefined> => {
    try {
        // const response = await axios.post('https://cr-scrapper.qbl33t.workers.dev/', {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ cardName: cardName })
        // });

        // if (response.status !== 200) {
        //     throw new Error(`Error! status: ${response.status}`);
        // }

        // return await response.data.json();
        // console.log("CR Response Data with Fetch:", data);
        return fakeCRData;
    } catch (error) {
        console.error("Error fetching data from CernyRytir API with Fetch:", error);
        return fakeCRData;
    }
};

// export const handleSearchSets = async (): Promise<CernyRytirSetResponse[] | undefined> => {
//     try {
//         return fakeCRSetData;
//     } catch (error) {
//         console.error("Error fetching data from CernyRytir API with Fetch:", error);
//         return fakeCRSetData;
//     }
// }

const fakeCRData: CernyRytirPriceResponse[] = 
[
    {
        "id": "lcc_163",
        "original_name": "Cavern of Souls (#4 - 410C, Neon Ink) - foil",
        "name": "Cavern of Souls (#4 - 410C, Neon Ink)",
        "set": "Lost Caverns of Ixalan E.",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/lci.gif",
        "type": "Land",
        "foil": true,
        "rarity": "Mythic",
        "quantity": 1,
        "price": 2999,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/LCC/163.jpg"
    },
    {
        "id": "avr_226",
        "original_name": "Cavern of Souls - foil / lightly played",
        "name": "Cavern of Souls",
        "set": "Avacyn Restored",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/avr.gif",
        "type": "Land",
        "foil": true,
        "rarity": "Rare",
        "quantity": 2,
        "price": 2049,
        "condition": "lp",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/AVR/226.jpg"
    },
    {
        "id": "ubt_04",
        "original_name": "Cavern of Souls - foil",
        "name": "Cavern of Souls",
        "set": "Ultimate Box Toppers",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/uma.gif",
        "type": "Land",
        "foil": true,
        "rarity": "Mythic",
        "quantity": 2,
        "price": 1999,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/UBT/04.jpg"
    },
    {
        "id": "lcc_162",
        "original_name": "Cavern of Souls (#3 - 410B, Neon Ink) - foil",
        "name": "Cavern of Souls (#3 - 410B, Neon Ink)",
        "set": "Lost Caverns of Ixalan E.",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/lci.gif",
        "type": "Land",
        "foil": true,
        "rarity": "Mythic",
        "quantity": 3,
        "price": 1999,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/LCC/162.jpg"
    },
    {
        "id": "znx_28",
        "original_name": "Cavern of Souls - foil",
        "name": "Cavern of Souls",
        "set": "ZNR Expeditions",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/zrx.gif",
        "type": "Land",
        "foil": true,
        "rarity": "Mythic",
        "quantity": 1,
        "price": 1849,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/ZNX/28.jpg"
    },
    {
        "id": "2xx_228",
        "original_name": "Cavern of Souls (etched) - foil",
        "name": "Cavern of Souls (etched)",
        "set": "Double Masters 2022 Ext.",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/2x2.gif",
        "type": "Land",
        "foil": true,
        "rarity": "Mythic",
        "quantity": 4,
        "price": 1599,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/2XX/228.jpg"
    },
    {
        "id": "ltc_362",
        "original_name": "Cavern of Souls (borderless)",
        "name": "Cavern of Souls",
        "set": "Commander LTR Extras",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/ltc.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Mythic",
        "quantity": 0,
        "price": 1299,
        "condition": "nm",
        "alternative": "bordeless",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/LTC/362.jpg"
    },
    {
        "id": "ltc_362",
        "original_name": "Cavern of Souls (borderless) - foil / japanese",
        "name": "Cavern of Souls   / japanese",
        "set": "Commander LTR Extras",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/ltc.gif",
        "type": "Land",
        "foil": true,
        "rarity": "Mythic",
        "quantity": 1,
        "price": 1299,
        "condition": "nm",
        "alternative": "bordeless",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/LTC/362.jpg"
    },
    {
        "id": "avr_226",
        "original_name": "Cavern of Souls",
        "name": "Cavern of Souls",
        "set": "Avacyn Restored",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/avr.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Rare",
        "quantity": 0,
        "price": 1149,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/AVR/226.jpg"
    },
    {
        "id": "uma_082",
        "original_name": "Cavern of Souls - foil",
        "name": "Cavern of Souls",
        "set": "Ultimate Masters",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/uma.gif",
        "type": "Land",
        "foil": true,
        "rarity": "Mythic",
        "quantity": 1,
        "price": 1149,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/UMA/082.jpg"
    },
    {
        "id": "znx_28",
        "original_name": "Cavern of Souls",
        "name": "Cavern of Souls",
        "set": "ZNR Expeditions",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/zrx.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Mythic",
        "quantity": 0,
        "price": 1149,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/ZNX/28.jpg"
    },
    {
        "id": "2xx_070",
        "original_name": "Cavern of Souls (borderless)",
        "name": "Cavern of Souls",
        "set": "Double Masters 2022 Ext.",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/2x2.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Mythic",
        "quantity": 0,
        "price": 1149,
        "condition": "nm",
        "alternative": "bordeless",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/2XX/070.jpg"
    },
    {
        "id": "mm3_076",
        "original_name": "Cavern of Souls",
        "name": "Cavern of Souls",
        "set": "Modern Masters 2017",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/mm3.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Mythic",
        "quantity": 0,
        "price": 999,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/MM3/076.jpg"
    },
    {
        "id": "uma_082",
        "original_name": "Cavern of Souls",
        "name": "Cavern of Souls",
        "set": "Ultimate Masters",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/uma.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Mythic",
        "quantity": 1,
        "price": 999,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/UMA/082.jpg"
    },
    {
        "id": "mb2_006",
        "original_name": "Cavern of Souls",
        "name": "Cavern of Souls",
        "set": "Mystery Booster",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/prm.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Rare",
        "quantity": 0,
        "price": 999,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/MB2/006.jpg"
    },
    {
        "id": "2x2_299",
        "original_name": "Cavern of Souls",
        "name": "Cavern of Souls",
        "set": "Double Masters 2022",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/2x2.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Mythic",
        "quantity": 0,
        "price": 999,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/2X2/299.jpg"
    },
    {
        "id": "lci_060",
        "original_name": "Cavern of Souls",
        "name": "Cavern of Souls",
        "set": "Lost Caverns of Ixalan",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/lci.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Mythic",
        "quantity": 0,
        "price": 999,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/LCI/060.jpg"
    },
    {
        "id": "lcc_160",
        "original_name": "Cavern of Souls (#1 - 345, borderless)",
        "name": "Cavern of Souls (#1 - 345, borderless)",
        "set": "Lost Caverns of Ixalan E.",
        "set_url": "https://www.cernyrytir.cz:443/images/kusovky/lci.gif",
        "type": "Land",
        "foil": false,
        "rarity": "Mythic",
        "quantity": 0,
        "price": 899,
        "condition": "nm",
        "alternative": "",
        "image_url": "https://www.cernyrytir.cz:443/images/kusovkymagic/LCC/160.jpg"
    }
]