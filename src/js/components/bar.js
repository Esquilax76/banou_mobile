import React from "react";

import "../../css/bar.scss";
import data from "../data/data.js";

export class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: data.barNews,
            current: data.barNews[0],
            index: 0,
            changeOk: true
        };

        this.changeNews = this.changeNews.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.changeNews, 9000);
    }

    changeNews() {
        if (this.state.changeOk) {
            let index = this.state.index;
            let max = this.state.news.length;
            if (index === max - 1) {
                this.setState({ index: 0, current: data.barNews[0] });
            } else {
                this.setState({ index: this.state.index + 1, current: data.barNews[this.state.index + 1] });
            }
        }
    }

    handleChange(index) {
        this.setState({ index: index, current: data.barNews[index], changeOk: false });
    }

    render() {
        return (
            <div className="barContainer">
                <div className="pageTitle barTitle">LE BREW PUB</div>
                <div className="barInfoContainer">
                    Venez découvrir notre Brew Pub , un lieu chaleureux et convivial, où vous pourrrez déguster les bières La BANOU, tout en faisant une partie de fléchettes ou de tarot !
                </div>
                <div className="barImageContainer" onClick={() => { this.changeNews(); }}>
                    <div className="barImage" style={{ backgroundImage: "url(" + this.state.current.image + ")" }}/>
                    <div className="barNews">
                        <div className="barNewsTitle">{this.state.current.title}</div>
                        <div className="barNewsDesc">{this.state.current.desc}</div>
                    </div>
                </div>
                <div className="barNewsNav">
                    {this.state.news.map(function (item, index) {
                        return (
                            <div
                                key={index}
                                className={"barNewsButton " + (this.state.index === index ? "activeNav" : "nonActiveNav")}
                                onClick={() => this.handleChange(index)}
                            />
                        );
                    }.bind(this))}
                </div>
            </div>
        );
    }
}
