import React from "react";

import { Beers } from "./beers.js";
import { Bar } from "./bar.js";
import { Info } from "./info.js";
import { Story } from "./story.js";
import { Beer } from "./beer.js";

import data from "../data/data.js";

import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

export class Fullpage extends React.Component {
    render() {
        const fullpageOptions = {
            callbacks: ["onLeave"],
            anchors: ["bieres", "bar", "histoire", "contact"],
            normalScrollElements: ".findLeftColumn",
            navigation: false,
            loopHorizontal: false,
        };
        return (
            <ReactFullpage {...fullpageOptions} licenseKey="OPEN-SOURCE-GPLV3-LICENSE" render={({ state, fullpageApi }) => {
                return (
                    <div>
                        <div className="section">
                            <div className="slide" >
                                <Beers fullpageApi={fullpageApi}/>
                            </div>
                            {data.beers.map(function (item, index) {
                                return (
                                    <div className="slide" key={index}>
                                        <Beer data={item} index={index}/>
                                    </div>
                                );
                            }.bind(this))}
                        </div>
                        <div className="section">
                            <Bar/>
                        </div>
                        <div className="section">
                            <Story/>
                        </div>
                        <div className="section">
                            <Info/>
                        </div>
                    </div>
                );
            }}
            />
        );
    }
}

// class Menu extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             height: "0",
//             opacity: 0
//         };

//         this.moveTo = this.moveTo.bind(this);
//         this.showMenu = this.showMenu.bind(this);
//     }

//     moveTo(number) {
//         this.props.fullpageApi.moveTo(number);
//         this.setState({ height: "0" });
//     }

//     showMenu() {
//         console.log("test")
//         this.setState({ height: "50px", opacity: 1 });
//     }

//     render() {
//         return [
//             <header className="header" key="header">
//                 <div className="headerTitle" onClick={() => { this.showMenu(); }}>LA BANOU</div>
//             </header>,
//             <div className="menu" style={{ height: this.state.height, opacity: this.state.opacity }} key="menu">
//                 <div className="menuItem" onClick={() => { this.moveTo(1); }}>Nos bières</div>
//                 <div className="menuItem" onClick={() => { this.moveTo(2); }}>Notre bar</div>
//                 <div className="menuItem" onClick={() => { this.moveTo(3); }}>Notre histoire</div>
//                 <div className="menuItem" onClick={() => { this.moveTo(4); }}>Nous trouver</div>
//             </div>
//         ];
//     }
// }

