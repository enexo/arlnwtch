import React, {} from "react";
import heroPic from "../img/goingUP.png";
import quotes from "../img/quotes.jpeg";
import metrics from "../img/metrics.jpeg";

function Home () {

    return (
        <div>
            <div className="container-sm">
                <section id="hero">
                <div className="row">
                    <div className="col">
                        <h1>Now Boarding the Airline Industry</h1>
                        <p className="subHeader">News, Stock Quotes and More from the largest airlines in the United States.</p>
                        <button className="heroBtn"><a href="/news">Latest News</a></button>
                    </div>
                    <div className="col d-none d-lg-block">
                        <img src={heroPic} alt="airplane" className="img-fluid"/>
                    </div>
                </div>
                </section>
                <section id="application">
                    <div className="row my-5">
                        <div className="col d-none d-lg-block">
                            <h3>Powering smarter decisions</h3>
                            <img src={quotes} alt="quotes" className="img-fluid"/>
                        </div>
                        <div className="col align-self-center">
                            <h2>Get Live Quotes on the Six Largest Airlines</h2>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col d-none d-lg-block">
                            <img src={metrics} alt="metrics" className="img-fluid"/>
                        </div>
                        <div className="col align-self-center">
                            <h2>Get Company Performance Metrics</h2>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Home;