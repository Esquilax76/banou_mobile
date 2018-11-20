import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';

import { Fullpage } from "./fullpage.js";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "0",
            opacity: "0",
            toggle: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        if (this.state.toggle) {
            this.setState({ height: "0", toggle: false, opacity: "0" });
        } else {
            this.setState({ height: "100px", toggle: true });
            setTimeout(() => { this.setState({ opacity: "1" }); }, 400);
        }
    }

    render() {
        return [
            <header className="header" onClick={() => { this.toggleMenu(); }} key="header">
                <div className="headerTitle">LA BANOU</div>
                <div id="nav-icon" className={this.state.toggle ? "open" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>,
            <div className="disable" key="disable" style={{ display: this.state.toggle ? "block" : "none" }} onClick={ () => { this.toggleMenu(); }}/>,
            <div className="menu" key="menu" style={{ height: this.state.height, padding: this.state.toggle ? "20px" : "0 20px 0 20px" }}>
                <a href="#bieres" className="menuItem" style={{ opacity: this.state.opacity }} onClick={ () => { this.toggleMenu(); }}>Nos bières</a>
                <a href="#bar" className="menuItem" style={{ opacity: this.state.opacity }} onClick={ () => { this.toggleMenu(); }}>Le Brew Pub</a>
                <a href="#histoire" className="menuItem" style={{ opacity: this.state.opacity }} onClick={ () => { this.toggleMenu(); }}>Notre histoire</a>
                <a href="#contact" className="menuItem" style={{ opacity: this.state.opacity }} onClick={ () => { this.toggleMenu(); }}>Contact</a>
            </div>
        ];
    }
}

class Layout extends React.Component {
    render() {
        return (
            <main>
                <Header/>
                <Fullpage/>
            </main>
        );
    }
}

export default Layout;
