import React, {useEffect, useState} from 'react';
import AirlineSelector from "./AirlineSelector";
import api from "../api";

function JetBlue () {

    //MarketCap useStates
    const [blueMC,setBlueMc] = useState('Loading...');
    //P/E useStates
    const [bluePE,setBluePE] = useState('Loading...');
    //Enterprise Value useStates
    const [blueEV,setBlueEV] = useState('Loading...');
    // Price to Free Cash Flow useStates
    const [bluePFCF,setBluePFCF] = useState('Loading...');
    //Price to Sales useStates
    const [bluePTS,setBluePTS] = useState('Loading...');
    //Price to Book useStates
    const [bluePTB,setBluePTB] = useState('Loading...');

    // Data Pulls
    useEffect(() => {
        const fetchData = async () => {
            //pull the data sets for each company
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';
            const JBLU = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/JBLU?limit=40&apikey=' + apiKey);

            //Pull the Airlines Market Cap and set it for return in the Fragment
            let blueMCr = JBLU.data[0].marketCapTTM;
            let blueMC = (blueMCr / 1000000000).toFixed(2) + "B";
            setBlueMc(blueMC);

            //Pull the Airlines P/E Ratio and set it for return in the Fragment
            let bluePE = JBLU.data[0].peRatioTTM.toFixed(2);
            setBluePE(bluePE);

            //Pull the Airlines Enterprise Value and set it for return in the Fragment
            let blueEVr = JBLU.data[0].enterpriseValueTTM;
            let blueEV = (blueEVr / 1000000000).toFixed(2) + "B";
            setBlueEV(blueEV);

            //Pull the Airlines Price to Free Cash Flow and set it for return in the Fragment
            let bluePFCFr = JBLU.data[0].pfcfRatioTTM;
            let bluePFCF = Math.trunc(bluePFCFr).toFixed(2);
            setBluePFCF(bluePFCF);

            //Pull the Airlines Price to Sales Ratio and set it for return in the Fragment
            let bluePTS = JBLU.data[0].priceToSalesRatioTTM.toFixed(2);
            setBluePTS(bluePTS);

            //Pull the Airlines Price to Book Ratio and set it for return in the Fragment
            let bluePTB = JBLU.data[0].ptbRatioTTM.toFixed(2);
            setBluePTB(bluePTB);

        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <AirlineSelector/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row ">
                                <div className="">
                                    <div className="">
                                        <h1 className="mAirline">JetBlue Airlines</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/investing/market-capitalization-defined/" target="_blank" rel="noreferrer"><h6>Market Cap</h6></a>
                                        <p>{blueMC}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-earningsratio.asp" target="_blank" rel="noreferrer"><h6>P/E Ratio</h6></a>
                                        <p>{bluePE}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/e/enterprisevalue.asp" target="_blank" rel="noreferrer"><h6>Enterprise Value</h6></a>
                                        <p>{blueEV}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/pricetofreecashflow.asp" target="_blank" rel="noreferrer"><h6>Price to Free Cash Flow</h6></a>
                                        <p>{bluePFCF}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-salesratio.asp" target="_blank" rel="noreferrer"><h6>Price to Sales</h6></a>
                                        <p>{bluePTS}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-bookratio.asp" target="_blank" rel="noreferrer"><h6>Price to Book</h6></a>
                                        <p>{bluePTB}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/d/dividendyield.asp" target="_blank" rel="noreferrer"><h6>Dividend Yield</h6></a>
                                        <p>None</p>
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

export default JetBlue;