import React, {useEffect, useState} from "react";
import api from "../api";
import windowSeat from "../img/windowseat.png";
import secondArticlePic from "../img/airplane-1.jpg";
import thirdArticlePic from "../img/airplane-2.jpg";
import fourthArticlePic from "../img/airplane-3.jpg";

function News () {

    //First Article useStates
    const [firstTitle,setfirstTitle] = useState('Loading...');
    const [firstSource,setfirstSource] = useState('Loading...');
    const [firstText,setfirstText] = useState('Loading...');
    // eslint-disable-next-line
    const [firstURL,setfirstURL] = useState('Loading...');
    //Second Article useStates
    const [secondTitle,setsecondTitle] = useState('Loading...');
    const [secondSource,setsecondSource] = useState('Loading...');
    const [secondText,setsecondText] = useState('Loading...');
    // eslint-disable-next-line
    const [secondURL,setsecondURL] = useState('Loading...');
    //Third Article useStates
    const [thirdTitle,setthirdTitle] = useState('Loading...');
    const [thirdSource,setthirdSource] = useState('Loading...');
    const [thirdText,setthirdText] = useState('Loading...');
    // eslint-disable-next-line
    const [thirdURL,setthirdURL] = useState('Loading...');
    //Fourth Article useStates
    const [fourthTitle,setfourthTitle] = useState('Loading...');
    const [fourthSource,setfourthSource] = useState('Loading...');
    const [fourthText,setfourthText] = useState('Loading...');
    // eslint-disable-next-line
    const [fourthURL,setfourthURL] = useState('Loading...');

    // Data Pulls
    useEffect(() => {
        const fetchData = async () => {
            //pull the news stories
            const apiKey = 'd03d806587d24c92dfe0850c1b942656';

            const news = await api.get('https://financialmodelingprep.com/api/v3/stock_news?tickers=ALLl,UAL,DAL,LUV,ALK,JBLU&limit=50&apikey=' + apiKey);

            //News
            //Pull the First Post's Data
            let firstTitle = news.data[0].title;
            setfirstTitle(firstTitle);
            let firstSource = news.data[0].site;
            setfirstSource(firstSource);
            let firstText = news.data[0].text;
            setfirstText(firstText);
            let firstURL = news.data[0].url;
            setfirstURL(firstURL);
            //Pull the Second Post's Data
            let secondTitle = news.data[1].title;
            setsecondTitle(secondTitle);
            let secondSource = news.data[1].site;
            setsecondSource(secondSource);
            let secondText = news.data[1].text;
            setsecondText(secondText);
            let secondURL = news.data[1].url;
            setsecondURL(secondURL);
            //Pull the Third Post's Data
            let thirdTitle = news.data[2].title;
            setthirdTitle(thirdTitle);
            let thirdSource = news.data[2].site;
            setthirdSource(thirdSource);
            let thirdText = news.data[2].text;
            setthirdText(thirdText);
            let thirdURL = news.data[2].url;
            setthirdURL(thirdURL);
            //Pull the Fourth Post's Data
            let fourthTitle = news.data[3].title;
            setfourthTitle(fourthTitle);
            let fourthSource = news.data[3].site;
            setfourthSource(fourthSource);
            let fourthText = news.data[3].text;
            setfourthText(fourthText);
            let fourthURL = news.data[3].url;
            setfourthURL(fourthURL);

        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="container-sm">
                    <div className="text-center"><h1 id="newsHeadline">Airline News Now</h1></div>
                        <div className="row my-5">
                            <div className="col align-self-center">
                                <article className="">
                                    <span className="articleTitle"><a href={firstURL}>{firstTitle}</a></span>
                                    <p>
                                        <a href={firstURL}>
                                            <span className=" lead">"{firstText}"</span>
                                        </a>
                                    </p>
                                    <a href={firstURL}>
                                        <button>{firstSource} Article</button>
                                    </a>
                                </article>
                            </div>
                            <div className="col d-none d-lg-block">
                                <img src={windowSeat} alt="window" className="img-fluid newsPicture"/>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col d-none d-lg-block">
                                <img src={secondArticlePic} alt="window" className="img-fluid newsPicture"/>
                            </div>
                            <div className="col align-self-center">
                                <article className="">
                                    <span className="articleTitle"><a href={secondURL}>{secondTitle}</a></span>
                                    <p>
                                        <a href={secondURL}>
                                            <span className=" lead">"{secondText}"</span>
                                        </a>
                                    </p>
                                    <a href={secondURL}>
                                        <button>{secondSource} Article</button>
                                    </a>
                                </article>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col align-self-center">
                                <article className="">
                                    <span className="articleTitle"><a href={thirdURL}>{thirdTitle}</a></span>
                                    <p>
                                        <a href={thirdURL}>
                                            <span className=" lead">"{thirdText}"</span>
                                        </a>
                                    </p>
                                    <a href={thirdURL}>
                                        <button>{thirdSource} Article</button>
                                    </a>
                                </article>
                            </div>
                            <div className="col d-none d-lg-block">
                                <img src={thirdArticlePic} alt="window" className="img-fluid newsPicture"/>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col d-none d-lg-block">
                                <img src={fourthArticlePic} alt="window" className="img-fluid newsPicture"/>
                            </div>
                            <div className="col align-self-center">
                                <article className="">
                                    <span className="articleTitle"><a href={fourthURL}>{fourthTitle}</a></span>
                                    <p>
                                        <a href={fourthURL}>
                                            <span className=" lead">"{fourthText}"</span>
                                        </a>
                                    </p>
                                    <a href={fourthURL}>
                                        <button>{fourthSource} Article</button>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default News;