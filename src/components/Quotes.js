import React, {useEffect, useState} from 'react';
import api from '../api';

//import pictures
import aaLogo from '../img/aa.png';
import alkLogo from '../img/alkLogo.png';
import deltaLogo from '../img/deltaLogo.png';
import jbluLogo from '../img/jbluLogo.png';
import swLogo from '../img/swLogo.png';
import ualLogo from '../img/ualLogo.png';

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
            setAmericanPrice(americanPrice);
            let americanChange = quotes.data[0].change;
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
            setAlaskaPrice(alaskaPrice);
            let alaskaChange = quotes.data[1].change;
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
            setDeltaPrice(deltaPrice);
            let deltaChange = quotes.data[2].change;
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
            setBluePrice(bluePrice);
            let blueChange = quotes.data[3].change;
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
            setSwPrice(swPrice);
            let swChange = quotes.data[4].change;
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
            setUnitedPrice(unitedPrice);
            let unitedChange = quotes.data[5].change;
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
                            <div className="sectionTitle">Airline Industry Stock Quotes</div>
                            <div>
                                {/*Display Alaska Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <div className="row">
                                                            <span className="price">{alaskaPrice}</span>
                                                        </div>
                                                        <div className="row">
                                                            <span id="alkChange">{alaskaChange}</span>
                                                            <span id="alkChangePer">{alaskaChangePer}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={alkLogo} alt="logo" className="smaller img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Display American Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <div className="row">
                                                            <span className="price">{americanPrice}</span>
                                                        </div>
                                                        <div className="row">
                                                            <span id="aalChange">{americanChange}</span>
                                                            <span id="aalChangePer">{americanChangePer}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={aaLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Display Delta Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <div className="row">
                                                            <span className="price">{deltaPrice}</span>
                                                        </div>
                                                        <div className="row">
                                                            <span id="dalChange">{deltaChange}</span>
                                                            <span id="dalChangePer">{deltaChangePer}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={deltaLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Display JetBlue Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <div className="row">
                                                            <span className="price">{bluePrice}</span>
                                                        </div>
                                                        <div className="row">
                                                            <span id="blueChange">{blueChange}</span>
                                                            <span id="blueChangePer">{blueChangePer}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={jbluLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Display Southwest Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <div className="row">
                                                            <span className="price">{swPrice}</span>
                                                        </div>
                                                        <div className="row">
                                                            <span id="swChange">{swChange}</span>
                                                            <span id="swChangePer">{swChangePer}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={swLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Display United Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <div className="row">
                                                            <span className="price">{unitedPrice}</span>
                                                        </div>
                                                        <div className="row">
                                                            <span id="ualChange">{unitedChange}</span>
                                                            <span id="ualChangePer">{unitedChangePer}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={ualLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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