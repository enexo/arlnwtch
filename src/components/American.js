import React, {useEffect, useState} from 'react';
import AirlineSelector from "./AirlineSelector";
import api from "../api";

function American () {

    //MarketCap useStates
    const [aalMC,setAALMc] = useState('Loading...');
    //P/E useStates
    const [aalPE,setAALPE] = useState('Loading...');
    //Enterprise Value useStates
    const [aalEV,setAALEV] = useState('Loading...');
    // Price to Free Cash Flow useStates
    const [aalPFCF,setAALPFCF] = useState('Loading...');
    //Price to Sales useStates
    const [aalPTS,setAALPTS] = useState('Loading...');
    //Price to Book useStates
    const [aalPTB,setAALPTB] = useState('Loading...');


    // Data Pulls
    useEffect(() => {
        const fetchData = async () => {
            //pull the data sets for each company
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';
            const AAL = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/AAL?limit=40&apikey=' + apiKey);

            //Pull the Airlines Market Cap and set it for return in the Fragment
            let aalMCr = AAL.data[0].marketCapTTM;
            let aalMC = (aalMCr / 1000000000).toFixed(2) + "B";
            setAALMc(aalMC);

            //Pull the Airlines P/E Ratio and set it for return in the Fragment
            let aalPE = AAL.data[0].peRatioTTM.toFixed(2);
            setAALPE(aalPE);

            //Pull the Airlines Enterprise Value and set it for return in the Fragment
            let aalEVr = AAL.data[0].enterpriseValueTTM;
            let aalEV = (aalEVr / 1000000000).toFixed(2) + "B";
            setAALEV(aalEV);

            //Pull the Airlines Price to Free Cash Flow and set it for return in the Fragment
            let aalPFCFr = AAL.data[0].pfcfRatioTTM;
            let aalPFCF = Math.trunc(aalPFCFr).toFixed(2);
            setAALPFCF(aalPFCF);

            //Pull the Airlines Price to Sales Ratio and set it for return in the Fragment
            let aalPTS = AAL.data[0].priceToSalesRatioTTM.toFixed(2);
            setAALPTS(aalPTS);

            //Pull the Airlines Price to Book Ratio and set it for return in the Fragment
            let aalPTB = AAL.data[0].ptbRatioTTM.toFixed(2);
            setAALPTB(aalPTB);

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
                                        <h1 className="mAirline">American Airlines</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/investing/market-capitalization-defined/" target="_blank" rel="noreferrer"><h6>Market Cap</h6></a>
                                        <p>{aalMC}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-earningsratio.asp" target="_blank" rel="noreferrer"><h6>P/E Ratio</h6></a>
                                        <p>{aalPE}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/e/enterprisevalue.asp" target="_blank" rel="noreferrer"><h6>Enterprise Value</h6></a>
                                        <p>{aalEV}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/pricetofreecashflow.asp" target="_blank" rel="noreferrer"><h6>Price to Free Cash Flow</h6></a>
                                        <p>{aalPFCF}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-salesratio.asp" target="_blank" rel="noreferrer"><h6>Price to Sales</h6></a>
                                        <p>{aalPTS}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-bookratio.asp" target="_blank" rel="noreferrer"><h6>Price to Book</h6></a>
                                        <p>{aalPTB}</p>
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

export default American;