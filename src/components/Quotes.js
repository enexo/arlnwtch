import React, {useEffect, useState} from 'react';
import api from '../api';

function Quotes() {

    // Stock price useStates
    const [americanPrice,setAmericanPrice] = useState('Loading...');
    const [alaskaPrice,setAlaskaPrice] = useState('Loading...');
    const [deltaPrice,setDeltaPrice] = useState('Loading...');
    const [bluePrice,setBluePrice] = useState('Loading...');
    const [swPrice,setSwPrice] = useState('Loading...');
    const [unitedPrice,setUnitedPrice] = useState('Loading...');

    // Stock change useStates
    const [americanChange,setAmericanChange] = useState('Loading...');
    const [alaskaChange,setAlaskaChange] = useState('Loading...');
    const [deltaChange,setDeltaChange] = useState('Loading...');
    const [blueChange,setBlueChange] = useState('Loading...');
    const [swChange,setSwChange] = useState('Loading...');
    const [unitedChange,setUnitedChange] = useState('Loading...');

    // Stock change percentage useStates
    const [americanChangePer,setAmericanChangePer] = useState('Loading...');
    const [alaskaChangePer,setAlaskaChangePer] = useState('Loading...');
    const [deltaChangePer,setDeltaChangePer] = useState('Loading...');
    const [blueChangePer,setBlueChangePer] = useState('Loading...');
    const [swChangePer,setSwChangePer] = useState('Loading...');
    const [unitedChangePer,setUnitedChangePer] = useState('Loading...');




    useEffect(() => {
        const fetchData = async () => {
            //pull the data set for Stock Quotes
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';

            const quotes = await api.get('https://financialmodelingprep.com/api/v3/quote/AAL,DAL,LUV,UAL,ALK,JBLU?apikey=' + apiKey);

            //Pull the American Airlines Price, Change, and Change Percentage.  Set all for return in the Fragment
            let americanPrice = quotes.data[0].price;
            americanPrice = americanPrice.toString();
            americanPrice = americanPrice.slice(0, (americanPrice.indexOf("."))+3);
            setAmericanPrice(americanPrice);
            let americanChange = quotes.data[0].change;
            americanChange = americanChange.toString();
            americanChange = americanChange.slice(1, (americanChange.indexOf("."))+3);
            setAmericanChange(americanChange);
            let americanChangePer = quotes.data[0].changesPercentage + "%";
            let aalFloat = parseFloat(quotes.data[0].changesPercentage);
            if (aalFloat <= 0) {
                document.getElementById("aalChangePer").style.color = 'red';
                document.getElementById("aalChange").style.color = 'red';
            }
            setAmericanChangePer(americanChangePer);

            //Pull the Alaska Airlines Price, Change, and Change Percentage.  Set all for return in the Fragment
            let alaskaPrice = quotes.data[1].price;
            alaskaPrice = alaskaPrice.toString();
            alaskaPrice = alaskaPrice.slice(0, (alaskaPrice.indexOf("."))+3);
            setAlaskaPrice(alaskaPrice);
            let alaskaChange = quotes.data[1].change;
            alaskaChange = alaskaChange.toString();
            alaskaChange = alaskaChange.slice(1, (alaskaChange.indexOf("."))+3);
            setAlaskaChange(alaskaChange);
            let alaskaChangePer = quotes.data[1].changesPercentage + "%";
            let alkFloat = parseFloat(quotes.data[1].changesPercentage);
            if (alkFloat <= 0) {
                document.getElementById("alkChangePer").style.color = 'red';
                document.getElementById("alkChange").style.color = 'red';
            }
            setAlaskaChangePer(alaskaChangePer);

            //Pull the Delta Airlines Price, Change, and Change Percentage.  Set all for return in the Fragment
            let deltaPrice = quotes.data[2].price;
            deltaPrice = deltaPrice.toString();
            deltaPrice = deltaPrice.slice(0, (deltaPrice.indexOf("."))+3);
            setDeltaPrice(deltaPrice);
            let deltaChange = quotes.data[2].change;
            deltaChange = deltaChange.toString();
            deltaChange = deltaChange.slice(1, (deltaChange.indexOf("."))+3);
            setDeltaChange(deltaChange);
            let deltaChangePer = quotes.data[2].changesPercentage + "%";
            let dalFloat = parseFloat(quotes.data[2].changesPercentage);
            if (dalFloat <= 0) {
                document.getElementById("dalChangePer").style.color = 'red';
                document.getElementById("dalChange").style.color = 'red';
            }
            setDeltaChangePer(deltaChangePer);

            //Pull the JetBlue Airlines Price, Change, and Change Percentage.  Set all for return in the Fragment
            let bluePrice = quotes.data[3].price;
            bluePrice = bluePrice.toString();
            bluePrice = bluePrice.slice(0, (bluePrice.indexOf("."))+3);
            setBluePrice(bluePrice);
            let blueChange = quotes.data[3].change;
            blueChange = blueChange.toString();
            blueChange = blueChange.slice(1, (blueChange.indexOf("."))+3);
            setBlueChange(blueChange);
            let blueChangePer = quotes.data[3].changesPercentage + "%";
            let blueFloat = parseFloat(quotes.data[3].changesPercentage);
            if (blueFloat <= 0) {
                document.getElementById("blueChangePer").style.color = 'red';
                document.getElementById("blueChange").style.color = 'red';
            }
            setBlueChangePer(blueChangePer);

            //Pull the Southwest Airlines Price, Change, and Change Percentage.  Set all for return in the Fragment
            let swPrice = quotes.data[4].price;
            swPrice = swPrice.toString();
            swPrice = swPrice.slice(0, (swPrice.indexOf("."))+3);
            setSwPrice(swPrice);
            let swChange = quotes.data[4].change;
            swChange = swChange.toString();
            swChange = swChange.slice(1, (swChange.indexOf("."))+3);
            setSwChange(swChange);
            let swChangePer = quotes.data[4].changesPercentage + "%";
            let swFloat = parseFloat(quotes.data[4].changesPercentage);
            if (swFloat <= 0) {
                document.getElementById("swChangePer").style.color = 'red';
                document.getElementById("swChange").style.color = 'red';
            }
            setSwChangePer(swChangePer);

            //Pull the United Airlines Price, Change, and Change Percentage.  Set all for return in the Fragment
            let unitedPrice = quotes.data[5].price;
            unitedPrice = unitedPrice.toString();
            unitedPrice = unitedPrice.slice(0, (unitedPrice.indexOf("."))+3);
            setUnitedPrice(unitedPrice);
            let unitedChange = quotes.data[5].change;
            unitedChange = unitedChange.toString();
            unitedChange = unitedChange.slice(1, (unitedChange.indexOf("."))+3);
            setUnitedChange(unitedChange);
            let unitedChangePer = quotes.data[5].changesPercentage + "%";
            let ualFloat = parseFloat(quotes.data[5].changesPercentage);
            if (ualFloat <= 0) {
                document.getElementById("ualChangePer").style.color = 'red';
                document.getElementById("ualChange").style.color = 'red';
            }
            setUnitedChangePer(unitedChangePer);

        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="container-fluid img-fluid quotesPic">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="newsHeadline text-center">Stock Quotes</div>
                                <div className="d-flex bd-highlight">
                                    <div className="p-2 flex-fill bd-highlight">
                                        <ul className="airline">
                                            <li>Alaska Airlines</li>
                                            <li>American Airlines</li>
                                            <li>Delta Airlines</li>
                                            <li>JetBlue Airlines</li>
                                            <li>Southwest Airlines</li>
                                            <li>United Airlines</li>
                                        </ul>
                                    </div>
                                    <div className="p-2 flex-fill bd-highlight">
                                        <ul className="airline">
                                            <li>{alaskaPrice}</li>
                                            <li>{americanPrice}</li>
                                            <li>{deltaPrice}</li>
                                            <li>{bluePrice}</li>
                                            <li>{swPrice}</li>
                                            <li>{unitedPrice}</li>
                                        </ul>
                                    </div>
                                    <div className="p-2 flex-fill bd-highlight">
                                        <ul className="airline">
                                            <li id="alkChange">{alaskaChange}</li>
                                            <li id="aalChange">{americanChange}</li>
                                            <li id="dalChange">{deltaChange}</li>
                                            <li id="blueChange">{blueChange}</li>
                                            <li id="swChange">{swChange}</li>
                                            <li id="ualChange">{unitedChange}</li>
                                        </ul>
                                    </div>
                                    <div className="p-2 flex-fill bd-highlight">
                                        <ul className="airline">
                                            <li id="alkChangePer">{alaskaChangePer}</li>
                                            <li id="aalChangePer">{americanChangePer}</li>
                                            <li id="dalChangePer">{deltaChangePer}</li>
                                            <li id="blueChangePer">{blueChangePer}</li>
                                            <li id="swChangePer">{swChangePer}</li>
                                            <li id="ualChangePer">{unitedChangePer}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Quotes;