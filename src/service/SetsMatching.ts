import axios from "axios";
import { SetScryfallResponse } from "../types/ScryfallResponse";
import * as CernyRytirService from "./CernyRytirService";
import * as ScryfallService from "./ScryfallService";
import { CernyRytirSetResponse } from "../types/CernyRytirResponse";

const matchSets = async (): Promise<any[] | undefined> => {


    // get sets of the card and try to match it
    // "set_id": "cd05036f-2698-43e6-a48e-5c8d82f0a551",
    // "set": "cmm",
    // "set_name": "Commander Masters",
    // "set_type": "masters",

    const scryfallSetResponse: SetScryfallResponse[] | undefined = await ScryfallService.handleSearchSets();
    // const cernyRytirSetReponse: CernyRytirSetResponse[] | undefined = await CernyRytirService.handleSearchSets();

    // if (!scryfallSetResponse || !cernyRytirSetReponse) {
    //     console.log(`No data from Scryfall or CernyRytir API!`);
    //     return undefined;
    // }

    const matchedSets: { [id: string]: { code: string, name: string, set_type: string }} = {};

    const scryfallSetTokens: { [id: string]: { tokens: string[]} } = {};
    const crSetToScryfall: { [name: string]: { scryfall_id: string | undefined } } = {};

    // code
    // id
    // name
    // set_type
    // // scryfallSetResponse.forEach((scryfallSet) => { 
    // //     console.log("Scryfall: ", scryfallSet);

    //     // matchedSets[scryfallSet.id] = {
    //     //     code: scryfallSet.code,
    //     //     name: scryfallSet.name,
    //     //     set_type: scryfallSet.set_type
    //     // };
    // });

    // cernyRytirSetReponse.forEach((cernyRytirSet) => {
    //     console.log("CernyRytir: ", cernyRytirSet);
    //     crSetToScryfall[cernyRytirSet.set] = {
    //         scryfall_id: undefined
    //     }
    // });

    // 


    return ['a', 'b'];
};

export default matchSets;