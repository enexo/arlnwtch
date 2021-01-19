import React, {useEffect, useState} from 'react';
import api from '../api';

//import pictures
import aaLogo from '../img/aa.png';
import alkLogo from '../img/alkLogo.png';
import deltaLogo from '../img/deltaLogo.png';
import jbluLogo from '../img/jbluLogo.png';
import swLogo from '../img/swLogo.png';
import ualLogo from '../img/ualLogo.png';
import sp500Logo from '../img/sp500Logo.png';
import djiLogo from '../img/djiLogo.png';
import crudeLogo from '../img/crudeLogo.png';

function Quotes() {

    // Stock price useStates
    const [americanArray,setAmericanArray] = useState('Loading...');
    const [alaskaArray,setAlaskaArray] = useState('Loading...');
    const [deltaArray,setDeltaArray] = useState('Loading...');
    const [blueArray,setBlueArray] = useState('Loading...');
    const [swArray,setSwArray] = useState('Loading...');
    const [unitedArray,setUnitedArray] = useState('Loading...');
    const [sp500Array,setSp500Array] = useState('Loading...');
    const [djiArray,setDjiArray] = useState('Loading...');
    const [oilArray,setOilArray] = useState('Loading...');

    // Stock price ticker useStates
    const [upTickAAL,setTickAAL] = useState('Loading...');
    const [upTickALK,setTickALK] = useState('Loading...');
    const [upTickDAL,setTickDAL] = useState('Loading...');
    const [upTickJBLU,setTickJBLU] = useState('Loading...');
    const [upTickLUV,setTickLUV] = useState('Loading...');
    const [upTickUAL,setTickUAL] = useState('Loading...');
    const [upTickSp500,setTickSp500] = useState('Loading...');
    const [upTickDji,setTickDji] = useState('Loading...');
    const [upTickOil,setTickOil] = useState('Loading...');


    useEffect(() => {
        const fetchData = async () => {
            //pull the data set for Stock Quotes
            const quotes = await api.get('https://financialmodelingprep.com/api/v3/quote/AAL,DAL,LUV,UAL,ALK,JBLU?apikey=d03d806587d24c92dfe0850c1b942656');
            const funds = await api.get('https://financialmodelingprep.com/api/v3/quotes/index?apikey=d03d806587d24c92dfe0850c1b942656');
            const commodity = await api.get('https://financialmodelingprep.com/api/v3/quote/CLUSD?apikey=d03d806587d24c92dfe0850c1b942656');

            //Ticker Change vars
            const upTick = "++";
            const downTick = "-";

            //Pull the American Airlines Price and set it for return in the Fragment
            let americanArray = quotes.data[0].price;
            setAmericanArray(americanArray);

            //Pull the American Airlines Change and set it for return in the Fragment
            let americanArrayTick = quotes.data[0].change;
            if (americanArrayTick < 0) {
                setTickAAL(downTick);
            } else {
                setTickAAL(upTick);
            }

            //Pull the Alaska Airlines Price and set it for return in the Fragment
            let alaskaArray = quotes.data[1].price;
            setAlaskaArray(alaskaArray);

            //Pull the Alaska Airlines Change and set it for return in the Fragment
            let alaskaArrayTick = quotes.data[1].change;
            if (alaskaArrayTick < 0) {
                setTickALK(downTick);
            } else {
                setTickALK(upTick);
            }

            //Pull the Delta Airlines Price and set it for return in the Fragment
            let deltaArray = quotes.data[2].price;
            setDeltaArray(deltaArray);

            //Pull the Delta Airlines Change and set it for return in the Fragment
            let deltaArrayTick = quotes.data[2].change;
            if (deltaArrayTick < 0) {
                setTickDAL(downTick);
            } else {
                setTickDAL(upTick);
            }

            //Pull the JetBlue Airlines Price and set it for return in the Fragment
            let blueArray = quotes.data[3].price;
            setBlueArray(blueArray);

            //Pull the JetBlue Airlines Change and set it for return in the Fragment
            let blueArrayTick = quotes.data[3].change;
            if (blueArrayTick < 0) {
                setTickJBLU(downTick);
            } else {
                setTickJBLU(upTick);
            }

            //Pull the Southwest Airlines Price and set it for return in the Fragment
            let swArray = quotes.data[4].price;
            setSwArray(swArray);

            //Pull the Southwest Airlines Change and set it for return in the Fragment
            let swArrayTick = quotes.data[4].change;
            if (swArrayTick < 0) {
                setTickLUV(downTick);
            } else {
                setTickLUV(upTick);
            }

            //Pull the United Airlines Price and set it for return in the Fragment
            let unitedArray = quotes.data[5].price;
            setUnitedArray(unitedArray);

            //Pull the United Airlines Change and set it for return in the Fragment
            let unitedArrayTick = quotes.data[5].change;
            if (unitedArrayTick < 0) {
                setTickUAL(downTick);
            } else {
                setTickUAL(upTick);
            }

            //Pull the SP500 Price from const funds
            let sp500Array = funds.data[6].price;
            setSp500Array(sp500Array);

            //Pull the SP500 Change and set it for return in the Fragment
            let sp500ArrayTick = funds.data[6].change;
            if (sp500ArrayTick < 0) {
                setTickSp500(downTick);
            } else {
                setTickSp500(upTick);
            }

            //Pull the DJI Price from const funds
            let djiArray = funds.data[8].price;
            setDjiArray(djiArray);

            //Pull the DJI Change and set it for return in the Fragment
            let djiArrayTick = funds.data[8].change;
            if (djiArrayTick < 0) {
                setTickDji(downTick);
            } else {
                setTickDji(upTick);
            }

            //Pull the Crude Oil Price from const funds
            let oilArray = commodity.data[0].price;
            setOilArray(oilArray);

            //Pull the Crude Oil Change and set it for return in the Fragment
            let oilArrayTick = commodity.data[0].change;
            if (oilArrayTick < 0) {
                setTickOil(downTick);
            } else {
                setTickOil(upTick);
            }

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
                                {/*Display American and Alaska Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <span className="price">{americanArray}</span>
                                                        <span className="change">{upTickAAL}</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={aaLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <span className="price">{alaskaArray}</span>
                                                        <span className="change">{upTickALK}</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={alkLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Display Delta and JetBlue Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <span className="price">{deltaArray}</span>
                                                        <span className="change">{upTickDAL}</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={deltaLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <span className="price">{blueArray}</span>
                                                        <span className="change">{upTickJBLU}</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={jbluLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Display Southwest and United Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <span className="price">{swArray}</span>
                                                        <span className="change">{upTickLUV}</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={swLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <span className="price">{unitedArray}</span>
                                                        <span className="change">{upTickUAL}</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={ualLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Display SP500 and DJI Quotes*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <span className="price">{sp500Array}</span>
                                                        <span className="change">{upTickSp500}</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={sp500Logo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <span className="price">{djiArray}</span>
                                                        <span className="change">{upTickDji}</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={djiLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Display Crude Oil Quote*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="newsBorder">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="quote">
                                                        <span className="price">{oilArray}</span>
                                                        <span className="change">{upTickOil}</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <img src={crudeLogo} alt="logo" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col"></div>
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