import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div id="navBar" className="deactivated">
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo nav-home">Andrew Mendez</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><a className="nav-about">About</a></li>
                    <li><a className="nav-portfolio">Portfolio</a></li>
                    <li><a className="nav-contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li><a className="nav-about">About</a></li>
            <li><a className="nav-portfolio">Portfolio</a></li>
            <li><a className="nav-contact">Contact</a></li>
        </ul>
    </div>
);

export default Navbar