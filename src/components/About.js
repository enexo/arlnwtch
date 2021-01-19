import React from 'react';

console.log("Hi Programmers! My Name is Nathan Orlowski and this is my ReactJS passion project.  If you are interested " +
    "in seeing my CV, please go to NathanOrlowski.com");


function About() {
    return (
        <div>
            <div className="container homePic img-fluid">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="sectionTitle">About This Project</div>
                        <div className="newsBorder">
                            <div className="about">This project is a coding exercise in ReactJS and Javascript JSON API. This should not be used for investment purposes at all.  This site
                                is maintained by <a href="http://nathanorlowski.com">Nathan Orlowski</a>.
                                He is deeply grateful for the <a href="https://financialmodelingprep.com/developer/docs/">Data provided by Financial Modeling Prep</a>.</div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}
export default About;


