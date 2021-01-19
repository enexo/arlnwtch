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
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light cheeriness">
                    <a className="navbar-brand" href="/">Airline Watch</a>

                    <ul className="navbar-nav mr-auto">

                        <NavItem path="/" name="Home" />
                        <NavItem path="/quotes" name="Quotes" />
                        <NavItem path="/metrics" name="Metrics" />
                        <NavItem path="/about" name="About" />
                    </ul>

                </nav>
            </div>
        )
    }
}

export default Navigation;