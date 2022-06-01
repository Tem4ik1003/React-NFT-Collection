import React, {useState} from 'react';
import {mint} from "./mint/mint";

const ButtonMint = () => {
    const [data, setData] = useState({minted: false, transaction: ''})
    return <button onClick={() => setData(mint())}>Mint</button>
};

export default ButtonMint;