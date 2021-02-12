import React from 'react';

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    return (
        <li className={liClassName}>
            <a href={props.path} className={aClassName}>
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>
    );
};



class Navigation extends React.Component {
    render() {
        return (
            <div className="container-fluid backgroundContainer">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="/"><span id="navFirst">Airline</span><span id="navSecond">Stocks</span></a>
                        <ul className="navbar-nav mr-auto">
                            <NavItem path="/" name="Home" />
                            <NavItem path="/news" name="News" />
                            <NavItem path="/quotes" name="Quotes" />
                            <NavItem path="/metrics" name="Metrics" />
                            <NavItem path="/about" name="About" />
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navigation;