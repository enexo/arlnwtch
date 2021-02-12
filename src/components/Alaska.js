import React, {useEffect, useState} from 'react';
import AirlineSelector from "./AirlineSelector";
import api from "../api";

function Alaska () {

    //MarketCap useStates
    const [alkMC,setALKMc] = useState('Loading...');
    //P/E useStates
    const [alkPE,setALKPE] = useState('Loading...');
    //Enterprise Value useStates
    const [alkEV,setALKEV] = useState('Loading...');
    // Price to Free Cash Flow useStates
    const [alkPFCF,setALKPFCF] = useState('Loading...');
    //Price to Sales useStates
    const [alkPTS,setALKPTS] = useState('Loading...');
    //Price to Book useStates
    const [alkPTB,setALKPTB] = useState('Loading...');
    //Dividend Yield useStates
    const [alkDY,setALKDY] = useState('Loading...');

    // Data Pulls
    useEffect(() => {
        const fetchData = async () => {
            //pull the data sets for each company
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';
            const ALK = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/ALK?limit=40&apikey=' + apiKey);

            //Pull the Airlines Market Cap and set it for return in the Fragment
            let alkMCr = ALK.data[0].marketCapTTM;
            let alkMC = (alkMCr / 1000000000).toFixed(2) + "B";
            setALKMc(alkMC);

            //Pull the Airlines P/E Ratio and set it for return in the Fragment
            let alkPE = ALK.data[0].peRatioTTM.toFixed(2);
            setALKPE(alkPE);

            //Pull the Airlines Enterprise Value and set it for return in the Fragment
            let alkEVr = ALK.data[0].enterpriseValueTTM;
            let alkEV = (alkEVr / 1000000000).toFixed(2) + "B";
            setALKEV(alkEV);

            //Pull the Airlines Price to Free Cash Flow and set it for return in the Fragment
            let alkPFCFr = ALK.data[0].pfcfRatioTTM;
            let alkPFCF = Math.trunc(alkPFCFr).toFixed(2);
            setALKPFCF(alkPFCF);

            //Pull the Airlines Price to Sales Ratio and set it for return in the Fragment
            let alkPTS = ALK.data[0].priceToSalesRatioTTM.toFixed(2);
            setALKPTS(alkPTS);

            //Pull the Airlines Price to Book Ratio and set it for return in the Fragment
            let alkPTB = ALK.data[0].ptbRatioTTM.toFixed(2);
            setALKPTB(alkPTB);

            //Pull the Airlines Dividend Yield and set it for return in the Fragment
            let alkDYr = ALK.data[0].dividendYieldTTM;
            let alkDY = (alkDYr * 100).toFixed(2) + "%";
            setALKDY(alkDY);

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
                                        <h1 className="mAirline">Alaska Airlines</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/investing/market-capitalization-defined/" target="_blank" rel="noreferrer"><h6>Market Cap</h6></a>
                                        <p>{alkMC}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-earningsratio.asp" target="_blank" rel="noreferrer"><h6>P/E Ratio</h6></a>
                                        <p>{alkPE}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/e/enterprisevalue.asp" target="_blank" rel="noreferrer"><h6>Enterprise Value</h6></a>
                                        <p>{alkEV}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/pricetofreecashflow.asp" target="_blank" rel="noreferrer"><h6>Price to Free Cash Flow</h6></a>
                                        <p>{alkPFCF}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-salesratio.asp" target="_blank" rel="noreferrer"><h6>Price to Sales</h6></a>
                                        <p>{alkPTS}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-bookratio.asp" target="_blank" rel="noreferrer"><h6>Price to Book</h6></a>
                                        <p>{alkPTB}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/d/dividendyield.asp" target="_blank" rel="noreferrer"><h6>Dividend Yield</h6></a>
                                        <p>{alkDY}</p>
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

export default Alaska;