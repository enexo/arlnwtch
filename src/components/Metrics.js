import React, {useEffect, useState} from "react";
import api from "../api";

function Metrics () {

    //MarketCap useStates
    const [aalMC,setAALMc] = useState('Loading...');
    const [ualMC,setUALMc] = useState('Loading...');
    const [dalMC,setDALMc] = useState('Loading...');
    const [swalMC,setSWALMc] = useState('Loading...');
    const [alkMC,setALKMc] = useState('Loading...');
    const [jbluMC,setJBLUMc] = useState('Loading...');
    //P/E useStates
    const [aalPE,setAALPE] = useState('Loading...');
    const [ualPE,setUALPE] = useState('Loading...');
    const [dalPE,setDALPE] = useState('Loading...');
    const [swalPE,setSWALPE] = useState('Loading...');
    const [alkPE,setALKPE] = useState('Loading...');
    const [jbluPE,setJBLUPE] = useState('Loading...');
    //Enterprise Value useStates
    const [aalEV,setAALEV] = useState('Loading...');
    const [ualEV,setUALEV] = useState('Loading...');
    const [dalEV,setDALEV] = useState('Loading...');
    const [swalEV,setSWALEV] = useState('Loading...');
    const [alkEV,setALKEV] = useState('Loading...');
    const [jbluEV,setJBLUEV] = useState('Loading...');
    // Price to Free Cash Flow useStates
    const [aalPFCF,setAALPFCF] = useState('Loading...');
    const [ualPFCF,setUALPFCF] = useState('Loading...');
    const [dalPFCF,setDALPFCF] = useState('Loading...');
    const [swalPFCF,setSWALPFCF] = useState('Loading...');
    const [alkPFCF,setALKPFCF] = useState('Loading...');
    const [jbluPFCF,setJBLUPFCF] = useState('Loading...');
    //Price to Sales useStates
    const [aalPTS,setAALPTS] = useState('Loading...');
    const [ualPTS,setUALPTS] = useState('Loading...');
    const [dalPTS,setDALPTS] = useState('Loading...');
    const [swalPTS,setSWALPTS] = useState('Loading...');
    const [alkPTS,setALKPTS] = useState('Loading...');
    const [jbluPTS,setJBLUPTS] = useState('Loading...');
    //Price to Book useStates
    const [aalPTB,setAALPTB] = useState('Loading...');
    const [ualPTB,setUALPTB] = useState('Loading...');
    const [dalPTB,setDALPTB] = useState('Loading...');
    const [swalPTB,setSWALPTB] = useState('Loading...');
    const [alkPTB,setALKPTB] = useState('Loading...');
    const [jbluPTB,setJBLUPTB] = useState('Loading...');
    //Dividend Yield useStates
    const [aalDY,setAALDY] = useState('Loading...');
    const [dalDY,setDALDY] = useState('Loading...');
    const [swalDY,setSWALDY] = useState('Loading...');
    const [alkDY,setALKDY] = useState('Loading...');
    
    // Data Pulls
    useEffect(() => {
        const fetchData = async () => {
            //pull the data sets for each company
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';

            const AAL = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/AAL?limit=40&apikey=' + apiKey);
            const UAL = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/UAL?limit=40&apikey=' + apiKey);
            const DAL = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/DAL?limit=40&apikey=' + apiKey);
            const LUV = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/LUV?limit=40&apikey=' + apiKey);
            const ALK = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/ALK?limit=40&apikey=' + apiKey);
            const JBLU = await api.get('https://financialmodelingprep.com/api/v3/key-metrics-ttm/JBLU?limit=40&apikey=' + apiKey);

            // Market Caps
            //Pull the American Airlines Market Cap and set it for return in the Fragment
            let aalMCr = AAL.data[0].marketCapTTM;
            let aalMC = (aalMCr / 1000000000).toFixed(2) + "B";
            setAALMc(aalMC);
            //Pull the United Airlines Market Cap and set it for return in the Fragment
            let ualMCr = UAL.data[0].marketCapTTM;
            let ualMC = (ualMCr / 1000000000).toFixed(2) + "B";
            setUALMc(ualMC);
            //Pull the Delta Airlines Market Cap and set it for return in the Fragment
            let dalMCr = DAL.data[0].marketCapTTM;
            let dalMC = (dalMCr / 1000000000).toFixed(2) + "B";
            setDALMc(dalMC);
            //Pull the Southwest Airlines Market Cap and set it for return in the Fragment
            let swalMCr = LUV.data[0].marketCapTTM;
            let swalMC = (swalMCr / 1000000000).toFixed(2) + "B";
            setSWALMc(swalMC);
            //Pull the Alaska Airlines Market Cap and set it for return in the Fragment
            let alkMCr = ALK.data[0].marketCapTTM;
            let alkMC = (alkMCr / 1000000000).toFixed(2) + "B";
            setALKMc(alkMC);
            //Pull the JetBlue Airlines Market Cap and set it for return in the Fragment
            let jbluMCr = JBLU.data[0].marketCapTTM;
            let jbluMC = (jbluMCr / 1000000000).toFixed(2) + "B";
            setJBLUMc(jbluMC);

            // P/E Ratios
            //Pull the American Airlines P/E Ratio and set it for return in the Fragment
            let aalPE = AAL.data[0].peRatioTTM.toFixed(2);
            setAALPE(aalPE);
            //Pull the United Airlines P/E Ratio and set it for return in the Fragment
            let ualPE = UAL.data[0].peRatioTTM.toFixed(2);
            setUALPE(ualPE);
            //Pull the Delta Airlines P/E Ratio and set it for return in the Fragment
            let dalPE = DAL.data[0].peRatioTTM.toFixed(2);
            setDALPE(dalPE);
            //Pull the Southwest Airlines P/E Ratio and set it for return in the Fragment
            let swalPE = LUV.data[0].peRatioTTM.toFixed(2);
            setSWALPE(swalPE);
            //Pull the Alaska Airlines P/E Ratio and set it for return in the Fragment
            let alkPE = ALK.data[0].peRatioTTM.toFixed(2);
            setALKPE(alkPE);
            //Pull the JetBlue Airlines P/E Ratio and set it for return in the Fragment
            let jbluPE = JBLU.data[0].peRatioTTM.toFixed(2);
            setJBLUPE(jbluPE);

            // Enterprise Value
            //Pull the American Airlines Enterprise Value and set it for return in the Fragment
            let aalEVr = AAL.data[0].enterpriseValueTTM;
            let aalEV = (aalEVr / 1000000000).toFixed(2) + "B";
            setAALEV(aalEV);
            //Pull the United Airlines Enterprise Value and set it for return in the Fragment
            let ualEVr = UAL.data[0].enterpriseValueTTM;
            let ualEV = (ualEVr / 1000000000).toFixed(2) + "B";
            setUALEV(ualEV);
            //Pull the Delta Airlines Enterprise Value and set it for return in the Fragment
            let dalEVr = DAL.data[0].enterpriseValueTTM;
            let dalEV = (dalEVr / 1000000000).toFixed(2) + "B";
            setDALEV(dalEV);
            //Pull the Southwest Airlines Enterprise Value and set it for return in the Fragment
            let swalEVr = LUV.data[0].enterpriseValueTTM;
            let swalEV = (swalEVr / 1000000000).toFixed(2) + "B";
            setSWALEV(swalEV);
            //Pull the Alaska Airlines Enterprise Value and set it for return in the Fragment
            let alkEVr = ALK.data[0].enterpriseValueTTM;
            let alkEV = (alkEVr / 1000000000).toFixed(2) + "B";
            setALKEV(alkEV);
            //Pull the JetBlue Airlines Enterprise Value and set it for return in the Fragment
            let jbluEVr = JBLU.data[0].enterpriseValueTTM;
            let jbluEV = (jbluEVr / 1000000000).toFixed(2) + "B";
            setJBLUEV(jbluEV);

            // Price to Free Cash Flow
            //Pull the American Airlines Price to Free Cash Flow and set it for return in the Fragment
            let aalPFCFr = AAL.data[0].pfcfRatioTTM;
            let aalPFCF = Math.trunc(aalPFCFr).toFixed(2);
            setAALPFCF(aalPFCF);
            //Pull the United Airlines Price to Free Cash Flow and set it for return in the Fragment
            let ualPFCFr = UAL.data[0].pfcfRatioTTM;
            let ualPFCF = Math.trunc(ualPFCFr).toFixed(2);
            setUALPFCF(ualPFCF);
            //Pull the Delta Airlines Price to Free Cash Flow and set it for return in the Fragment
            let dalPFCFr = DAL.data[0].pfcfRatioTTM;
            let dalPFCF = Math.trunc(dalPFCFr).toFixed(2);
            setDALPFCF(dalPFCF);
            //Pull the Southwest Airlines Price to Free Cash Flow and set it for return in the Fragment
            let swalPFCFr = LUV.data[0].pfcfRatioTTM;
            let swalPFCF = Math.trunc(swalPFCFr).toFixed(2);
            setSWALPFCF(swalPFCF);
            //Pull the Alaska Airlines Price to Free Cash Flow and set it for return in the Fragment
            let alkPFCFr = ALK.data[0].pfcfRatioTTM;
            let alkPFCF = Math.trunc(alkPFCFr).toFixed(2);
            setALKPFCF(alkPFCF);
            //Pull the JetBlue Airlines Price to Free Cash Flow and set it for return in the Fragment
            let jbluPFCFr = JBLU.data[0].pfcfRatioTTM;
            let jbluPFCF = Math.trunc(jbluPFCFr).toFixed(2);
            setJBLUPFCF(jbluPFCF);

            // Price to Sales Ratios
            //Pull the American Airlines Price to Sales Ratio and set it for return in the Fragment
            let aalPTS = AAL.data[0].priceToSalesRatioTTM.toFixed(2);
            setAALPTS(aalPTS);
            //Pull the United Airlines Price to Sales Ratio and set it for return in the Fragment
            let ualPTS = UAL.data[0].priceToSalesRatioTTM.toFixed(2);
            setUALPTS(ualPTS);
            //Pull the Delta Airlines Price to Sales Ratio and set it for return in the Fragment
            let dalPTS = DAL.data[0].priceToSalesRatioTTM.toFixed(2);
            setDALPTS(dalPTS);
            //Pull the Southwest Airlines Price to Sales Ratio and set it for return in the Fragment
            let swalPTS = LUV.data[0].priceToSalesRatioTTM.toFixed(2);
            setSWALPTS(swalPTS);
            //Pull the Alaska Airlines Price to Sales Ratio and set it for return in the Fragment
            let alkPTS = ALK.data[0].priceToSalesRatioTTM.toFixed(2);
            setALKPTS(alkPTS);
            //Pull the JetBlue Airlines Price to Sales Ratio and set it for return in the Fragment
            let jbluPTS = JBLU.data[0].priceToSalesRatioTTM.toFixed(2);
            setJBLUPTS(jbluPTS);

            // Price to Book Ratios
            //Pull the American Airlines Price to Book Ratio and set it for return in the Fragment
            let aalPTB = AAL.data[0].ptbRatioTTM.toFixed(2);
            setAALPTB(aalPTB);
            //Pull the United Airlines Price to Book Ratio and set it for return in the Fragment
            let ualPTB = UAL.data[0].ptbRatioTTM.toFixed(2);
            setUALPTB(ualPTB);
            //Pull the Delta Airlines Price to Book Ratio and set it for return in the Fragment
            let dalPTB = DAL.data[0].ptbRatioTTM.toFixed(2);
            setDALPTB(dalPTB);
            //Pull the Southwest Airlines Price to Book Ratio and set it for return in the Fragment
            let swalPTB = LUV.data[0].ptbRatioTTM.toFixed(2);
            setSWALPTB(swalPTB);
            //Pull the Alaska Airlines Price to Book Ratio and set it for return in the Fragment
            let alkPTB = ALK.data[0].ptbRatioTTM.toFixed(2);
            setALKPTB(alkPTB);
            //Pull the JetBlue Airlines Price to Book Ratio and set it for return in the Fragment
            let jbluPTB = JBLU.data[0].ptbRatioTTM.toFixed(2);
            setJBLUPTB(jbluPTB);

            // Dividend Yield
            //Pull the American Airlines Dividend Yield and set it for return in the Fragment
            let aalDYr = AAL.data[0].dividendYieldTTM;
            let aalDY = (aalDYr * 100).toFixed(2) + "%";
            setAALDY(aalDY);
            //Pull the United Airlines Dividend Yield and set it for return in the Fragment
            //Pull the Delta Airlines Dividend Yield and set it for return in the Fragment
            let dalDYr = DAL.data[0].dividendYieldTTM;
            let dalDY = (dalDYr * 100).toFixed(2) + "%";
            setDALDY(dalDY);
            //Pull the Southwest Airlines Dividend Yield and set it for return in the Fragment
            let swalDYr = LUV.data[0].dividendYieldTTM;
            let swalDY = (swalDYr * 100).toFixed(2) + "%";
            setSWALDY(swalDY);
            //Pull the Alaska Airlines Dividend Yield and set it for return in the Fragment
            let alkDYr = ALK.data[0].dividendYieldTTM;
            let alkDY = (alkDYr * 100).toFixed(2) + "%";
            setALKDY(alkDY);

        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="sectionTitle">Airline Metrics</div>
                            <div className="sectionSubtitle">(Trailing Twelve Months)</div>
                            <div className="">
                                {/*New Table*/}
                                <table className="metrics2">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>Market Cap</th>
                                        <th>P/E Ratio</th>
                                        <th>Enterprise Value</th>
                                        <th>Price to Free Cash Flow</th>
                                        <th>Price to Sales Ratio</th>
                                        <th>Price to Book Ratio</th>
                                        <th>Dividend Yield %</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Alaska Airlines</td>
                                            <td>{alkMC}</td>
                                            <td>{alkPE}</td>
                                            <td>{alkEV}</td>
                                            <td>{alkPFCF}</td>
                                            <td>{alkPTS}</td>
                                            <td>{alkPTB}</td>
                                            <td>{alkDY}</td>
                                        </tr>
                                        <tr>
                                            <td>American Airlines</td>
                                            <td>{aalMC}</td>
                                            <td>{aalPE}</td>
                                            <td>{aalEV}</td>
                                            <td>{aalPFCF}</td>
                                            <td>{aalPTS}</td>
                                            <td>{aalPTB}</td>
                                            <td>{aalDY}</td>
                                        </tr>
                                        <tr>
                                            <td>Delta Airlines</td>
                                            <td>{dalMC}</td>
                                            <td>{dalPE}</td>
                                            <td>{dalEV}</td>
                                            <td>{dalPFCF}</td>
                                            <td>{dalPTS}</td>
                                            <td>{dalPTB}</td>
                                            <td>{dalDY}</td>
                                        </tr>
                                        <tr>
                                            <td>JetBlue Airlines</td>
                                            <td>{jbluMC}</td>
                                            <td>{jbluPE}</td>
                                            <td>{jbluEV}</td>
                                            <td>{jbluPFCF}</td>
                                            <td>{jbluPTS}</td>
                                            <td>{jbluPTB}</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <td>Southwest Airlines</td>
                                            <td>{swalMC}</td>
                                            <td>{swalPE}</td>
                                            <td>{swalEV}</td>
                                            <td>{swalPFCF}</td>
                                            <td>{swalPTS}</td>
                                            <td>{swalPTB}</td>
                                            <td>{swalDY}</td>
                                        </tr>
                                        <tr>
                                            <td>United Airlines</td>
                                            <td>{ualMC}</td>
                                            <td>{ualPE}</td>
                                            <td>{ualEV}</td>
                                            <td>{ualPFCF}</td>
                                            <td>{ualPTS}</td>
                                            <td>{ualPTB}</td>
                                            <td>None</td>
                                        </tr>
                                    </tbody>
                                </table>







                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Metrics;
