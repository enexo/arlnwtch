import React, {useEffect, useState} from 'react';
import AirlineSelector from "./AirlineSelector";
import api from "../api";

function United () {

    //MarketCap useStates
    const [ualMC,setUALMc] = useState('Loading...');
    //P/E useStates
    const [ualPE,setUALPE] = useState('Loading...');
    //Enterprise Value useStates
    const [ualEV,setUALEV] = useState('Loading...');
    // Price to Free Cash Flow useStates
    const [ualPFCF,setUALPFCF] = useState('Loading...');
    //Price to Sales useStates
    const [ualPTS,setUALPTS] = useState('Loading...');
    //Price to Book useStates
    const [ualPTB,setUALPTB] = useState('Loading...');

    // Data Pulls
    useEffect(() => {
        const fetchData = async () => {
            //pull the data sets for each company
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';
            const UAL = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/UAL?limit=40&apikey=' + apiKey);

            //Pull the Airlines Market Cap and set it for return in the Fragment
            let ualMCr = UAL.data[0].marketCapTTM;
            let ualMC = (ualMCr / 1000000000).toFixed(2) + "B";
            setUALMc(ualMC);

            //Pull the Airlines P/E Ratio and set it for return in the Fragment
            let ualPE = UAL.data[0].peRatioTTM.toFixed(2);
            setUALPE(ualPE);

            //Pull the Airlines Enterprise Value and set it for return in the Fragment
            let ualEVr = UAL.data[0].enterpriseValueTTM;
            let ualEV = (ualEVr / 1000000000).toFixed(2) + "B";
            setUALEV(ualEV);

            //Pull the Airlines Price to Free Cash Flow and set it for return in the Fragment
            let ualPFCFr = UAL.data[0].pfcfRatioTTM;
            let ualPFCF = Math.trunc(ualPFCFr).toFixed(2);
            setUALPFCF(ualPFCF);

            //Pull the Airlines Price to Sales Ratio and set it for return in the Fragment
            let ualPTS = UAL.data[0].priceToSalesRatioTTM.toFixed(2);
            setUALPTS(ualPTS);

            //Pull the Airlines Price to Book Ratio and set it for return in the Fragment
            let ualPTB = UAL.data[0].ptbRatioTTM.toFixed(2);
            setUALPTB(ualPTB);

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
                                        <h1 className="mAirline">United Airlines</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/investing/market-capitalization-defined/" target="_blank" rel="noreferrer"><h6>Market Cap</h6></a>
                                        <p>{ualMC}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-earningsratio.asp" target="_blank" rel="noreferrer"><h6>P/E Ratio</h6></a>
                                        <p>{ualPE}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/e/enterprisevalue.asp" target="_blank" rel="noreferrer"><h6>Enterprise Value</h6></a>
                                        <p>{ualEV}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/pricetofreecashflow.asp" target="_blank" rel="noreferrer"><h6>Price to Free Cash Flow</h6></a>
                                        <p>{ualPFCF}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-salesratio.asp" target="_blank" rel="noreferrer"><h6>Price to Sales</h6></a>
                                        <p>{ualPTS}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="metric">
                                        <a href="https://www.investopedia.com/terms/p/price-to-bookratio.asp" target="_blank" rel="noreferrer"><h6>Price to Book</h6></a>
                                        <p>{ualPTB}</p>
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

export default United;