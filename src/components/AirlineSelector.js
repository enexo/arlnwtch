import React, {Fragment, useEffect, useState} from 'react';
import '../App.css';
import api from "../api";
import Bull from "../img/bull.jpg";

function AirlineSelector () {

    // Stock price useStates
    const [americanPrice,setAmericanPrice] = useState('Loading...');
    const [alaskaPrice,setAlaskaPrice] = useState('Loading...');
    const [deltaPrice,setDeltaPrice] = useState('Loading...');
    const [bluePrice,setBluePrice] = useState('Loading...');
    const [swPrice,setSwPrice] = useState('Loading...');
    const [unitedPrice,setUnitedPrice] = useState('Loading...');

    useEffect(() => {
        const fetchData = async () => {
            //pull the data set for Stock Quotes
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';

            const quotes = await api.get('https://financialmodelingprep.com/api/v3/quote/AAL,DAL,LUV,UAL,ALK,JBLU?apikey=' + apiKey);

            let americanPrice = quotes.data[0].price;
            americanPrice = americanPrice.toString();
            americanPrice = americanPrice.slice(0, (americanPrice.indexOf("."))+3);
            setAmericanPrice(americanPrice);

            let alaskaPrice = quotes.data[1].price;
            alaskaPrice = alaskaPrice.toString();
            alaskaPrice = alaskaPrice.slice(0, (alaskaPrice.indexOf("."))+3);
            setAlaskaPrice(alaskaPrice);

            let deltaPrice = quotes.data[2].price;
            deltaPrice = deltaPrice.toString();
            deltaPrice = deltaPrice.slice(0, (deltaPrice.indexOf("."))+3);
            setDeltaPrice(deltaPrice);

            let bluePrice = quotes.data[3].price;
            bluePrice = bluePrice.toString();
            bluePrice = bluePrice.slice(0, (bluePrice.indexOf("."))+3);
            setBluePrice(bluePrice);

            let swPrice = quotes.data[1].price;
            swPrice = swPrice.toString();
            swPrice = swPrice.slice(0, (swPrice.indexOf("."))+3);
            setSwPrice(swPrice);

            let unitedPrice = quotes.data[1].price;
            unitedPrice = unitedPrice.toString();
            unitedPrice = unitedPrice.slice(0, (unitedPrice.indexOf("."))+3);
            setUnitedPrice(unitedPrice);
            
        };
        fetchData();
    }, []);


    return (
        <Fragment>

            <div className="row">
                <div className="col">
                    <h4>Trailing 12 Month Metrics.</h4>

                    <div className="row">
                        <div className="col asSection">
                            <a href="/alaska">
                                <div className="row asAirline">
                                    <span className="mSymbol">ALK </span>
                                    <span className="mName">Alaska Airlines</span>
                                    <span className="mPrice">{alaskaPrice}</span>
                                </div>
                            </a>
                            <a href="/american">
                                <div className="row asAirline">
                                    <span className="mSymbol">AAL </span>
                                    <span className="mName">American Airlines</span>
                                    <span className="mPrice">{americanPrice}</span>
                                </div>
                            </a>
                            <a href="/delta">
                                <div className="row asAirline">
                                    <span className="mSymbol">DAL </span>
                                    <span className="mName">Delta Airlines</span>
                                    <span className="mPrice">{deltaPrice}</span>
                                </div>
                            </a>
                        </div>
                    </div>
            <div className="row">
                <div className="col asSection">
                    <a href="/jetblue">
                        <div className="row asAirline">
                            <span className="mSymbol">JBLU </span>
                            <span className="mName">JetBlue Airlines</span>
                            <span className="mPrice">{bluePrice}</span>
                        </div>
                    </a>
                    <a href="/southwest">
                        <div className="row asAirline">
                            <span className="mSymbol">LUV </span>
                            <span className="mName">Southwest Airlines</span>
                            <span className="mPrice">{swPrice}</span>
                        </div>
                    </a>
                    <a href="/united">
                        <div className="row asAirline">
                            <span className="mSymbol">UAL </span>
                            <span className="mName">United Airlines</span>
                            <span className="mPrice">{unitedPrice}</span>
                        </div>
                    </a>
                </div>
            </div>
                </div>
                    <div className="col d-none d-lg-block">
                        <img src={Bull} alt="bull" className="img-fluid bull"/>
                    </div>
            </div>
        </Fragment>
    )





}
export default AirlineSelector;