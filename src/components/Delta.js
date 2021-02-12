import React, {useEffect, useState} from 'react';
import AirlineSelector from "./AirlineSelector";
import api from "../api";

function Delta () {

    //MarketCap useStates
    const [dalMC,setDALMc] = useState('Loading...');
    //P/E useStates
    const [dalPE,setDALPE] = useState('Loading...');
    //Enterprise Value useStates
    const [dalEV,setDALEV] = useState('Loading...');
    // Price to Free Cash Flow useStates
    const [dalPFCF,setDALPFCF] = useState('Loading...');
    //Price to Sales useStates
    const [dalPTS,setDALPTS] = useState('Loading...');
    //Price to Book useStates
    const [dalPTB,setDALPTB] = useState('Loading...');
    //Dividend Yield useStates
    const [dalDY,setDALDY] = useState('Loading...');

    // Data Pulls
    useEffect(() => {
        const fetchData = async () => {
            //pull the data sets for each company
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';
            const DAL = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/DAL?limit=40&apikey=' + apiKey);

            //Pull the Airlines Market Cap and set it for return in the Fragment
            let dalMCr = DAL.data[0].marketCapTTM;
            let dalMC = (dalMCr / 1000000000).toFixed(2) + "B";
            setDALMc(dalMC);

            //Pull the Airlines P/E Ratio and set it for return in the Fragment
            let dalPE = DAL.data[0].peRatioTTM.toFixed(2);
            setDALPE(dalPE);

            //Pull the Airlines Enterprise Value and set it for return in the Fragment
            let dalEVr = DAL.data[0].enterpriseValueTTM;
            let dalEV = (dalEVr / 1000000000).toFixed(2) + "B";
            setDALEV(dalEV);

            //Pull the Airlines Price to Free Cash Flow and set it for return in the Fragment
            let dalPFCFr = DAL.data[0].pfcfRatioTTM;
            let dalPFCF = Math.trunc(dalPFCFr).toFixed(2);
            setDALPFCF(dalPFCF);

            //Pull the Airlines Price to Sales Ratio and set it for return in the Fragment
            let dalPTS = DAL.data[0].priceToSalesRatioTTM.toFixed(2);
            setDALPTS(dalPTS);

            //Pull the Airlines Price to Book Ratio and set it for return in the Fragment
            let dalPTB = DAL.data[0].ptbRatioTTM.toFixed(2);
            setDALPTB(dalPTB);

            //Pull the Airlines Dividend Yield and set it for return in the Fragment
            let dalDYr = DAL.data[0].dividendYieldTTM;
            let dalDY = (dalDYr * 100).toFixed(2) + "%";
            setDALDY(dalDY);

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
                                    <h1 className="mAirline">Delta Airlines</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="metric">
                                    <a href="https://www.investopedia.com/investing/market-capitalization-defined/" target="_blank" rel="noreferrer"><h6>Market Cap</h6></a>
                                    <p>{dalMC}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="metric">
                                    <a href="https://www.investopedia.com/terms/p/price-earningsratio.asp" target="_blank" rel="noreferrer"><h6>P/E Ratio</h6></a>
                                    <p>{dalPE}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="metric">
                                    <a href="https://www.investopedia.com/terms/e/enterprisevalue.asp" target="_blank" rel="noreferrer"><h6>Enterprise Value</h6></a>
                                    <p>{dalEV}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="metric">
                                    <a href="https://www.investopedia.com/terms/p/pricetofreecashflow.asp" target="_blank" rel="noreferrer"><h6>Price to Free Cash Flow</h6></a>
                                    <p>{dalPFCF}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="metric">
                                    <a href="https://www.investopedia.com/terms/p/price-to-salesratio.asp" target="_blank" rel="noreferrer"><h6>Price to Sales</h6></a>
                                    <p>{dalPTS}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="metric">
                                    <a href="https://www.investopedia.com/terms/p/price-to-bookratio.asp" target="_blank" rel="noreferrer"><h6>Price to Book</h6></a>
                                    <p>{dalPTB}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="metric">
                                    <a href="https://www.investopedia.com/terms/d/dividendyield.asp" target="_blank" rel="noreferrer"><h6>Dividend Yield</h6></a>
                                    <p>{dalDY}</p>
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

export default Delta;