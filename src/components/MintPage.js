import React, {useState} from 'react';
import background1 from "../img/background1.png";
import { Image, Row, Col } from 'react-bootstrap';
import {mint} from "../mint/mint";

function GetPP() {
    const imageStyle = {border: "none", padding: "30px", marginBottom: "none"};
    const btnStyle = {border: "none", padding: "0", marginBottom: "30px"};
    const [data, setData] = useState({minted: false, transaction: ''})
    return (
    <div >

        <Row className="g-0"
             style={{backgroundImage: "url(" + background1 + ")", minHeight: "100vh", color: "rgb(239, 239, 239)"}}>
            <Col style={{marginTop: "100px", marginBotton: "0px"}} md={{span: 8, offset: 2}}>
                <Image src={"/img/gallery/TEST1.png"} style={imageStyle}></Image>

                 <p>Minting is unavailable until the launch. Check back soon for the date announcement.</p>
                {!data.minted ? <span><p>You must have a Metamask wallet connected to your browser to mint an NFT.
            </p><p>This can take around 2 minutes to process after you send payment.</p>
            <p>Heads up - this button actually works if you go through all the steps. You can try it out for almost free, but don't worry.
                Just like any Metamask transaction, no transaction will take place until you sign in and accept it.
            </p>
            <button className="mint-btn" style={btnStyle} onClick={() => setData(mint())}>Mint</button>
            </span> : <span><p>Token Minted Sucessfully to: {data.transaction.to}</p><p>Congratulations! You now own an NFT!</p>
            <p>Refresh the page to snag another you greedy Gus.</p></span>}
            </Col>
        </Row>
    </div>
        )
}

export default GetPP;