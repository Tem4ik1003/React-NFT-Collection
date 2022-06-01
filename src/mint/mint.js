
import {mintToken} from "./Web3Client";

export const mint = () => {
    let minted = false;
    let transaction = {};

    mintToken().then(tx => {
        transaction = tx;
        minted = true;
    }).catch(err => {
        console.log(err)
    })
    return {minted, transaction}

}

