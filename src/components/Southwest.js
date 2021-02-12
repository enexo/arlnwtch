import React, {useEffect, useState} from 'react';
import AirlineSelector from "./AirlineSelector";
import api from "../api";

function Southwest () {

    //MarketCap useStates
    const [swMC,setSWMc] = useState('Loading...');
    //P/E useStates
    const [swPE,setSWPE] = useState('Loading...');
    //Enterprise Value useStates
    const [swEV,setSWEV] = useState('Loading...');
    // Price to Free Cash Flow useStates
    const [swPFCF,setSWPFCF] = useState('Loading...');
    //Price to Sales useStates
    const [swPTS,setSWPTS] = useState('Loading...');
    //Price to Book useStates
    const [swPTB,setSWPTB] = useState('Loading...');
    //Dividend Yield useStates
    const [swDY,setSWDY] = useState('Loading...');

    // Data Pulls
    useEffect(() => {
        const fetchData = async () => {
            //pull the data sets for each company
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';
            const LUV = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/LUV?limit=40&apikey=' + apiKey);

            //Pull the Airlines Market Cap and set it for return in the Fragment
            let swMCr = LUV.data[0].marketCapTTM;
            let swMC = (swMCr / 1000000000).toFixed(2) + "B";
            setSWMc(swMC);

            //Pull the Airlines P/E Ratio and set it for return in the Fragment
            let swPE = LUV.data[0].peRatioTTM.toFixed(2);
            setSWPE(swPE);

            //Pull the Airlines Enterprise Value and set it for return in the Fragment
            let swEVr = LUV.data[0].enterpriseValueTTM;
            let swEV = (swEVr / 1000000000).toFixed(2) + "B";
            setSWEV(swEV);

            //Pull the Airlines Price to Free Cash Flow and set it for return in the Fragment
            let swPFCFr = LUV.data[0].pfcfRatioTTM;
            let swPFCF = Math.trunc(swPFCFr).toFixed(2);
            setSWPFCF(swPFCF);

            //Pull the Airlines Price to Sales Ratio and set it for return in the Fragment
            let swPTS = LUV.data[0].priceToSalesRatioTTM.toFixed(2);
            setSWPTS(swPTS);

            //Pull the Airlines Price to Book Ratio and set it for return in the Fragment
            let swPTB = LUV.data[0].ptbRatioTTM.toFixed(2);
            setSWPTB(swPTB);

            //Pull the Airlines Dividend Yield and set it for return in the Fragment
            let swDYr = LUV.data[0].dividendYieldTTM;
            let swDY = (swDYr * 100).toFixed(2) + "%";
            setSWDY(swDY);

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
                                        <h1 className="mAirline">Southwest Airlines</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/investing/market-capitalization-defined/" target="_blank" rel="noreferrer"><h6>Market Cap</h6></a>
                                        <p>{swMC}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-earningsratio.asp" target="_blank" rel="noreferrer"><h6>P/E Ratio</h6></a>
                                        <p>{swPE}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/e/enterprisevalue.asp" target="_blank" rel="noreferrer"><h6>Enterprise Value</h6></a>
                                        <p>{swEV}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/pricetofreecashflow.asp" target="_blank" rel="noreferrer"><h6>Price to Free Cash Flow</h6></a>
                                        <p>{swPFCF}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-salesratio.asp" target="_blank" rel="noreferrer"><h6>Price to Sales</h6></a>
                                        <p>{swPTS}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-bookratio.asp" target="_blank" rel="noreferrer"><h6>Price to Book</h6></a>
                                        <p>{swPTB}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/d/dividendyield.asp" target="_blank" rel="noreferrer"><h6>Dividend Yield</h6></a>
                                        <p>{swDY}</p>
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

export default Southwest;