import React from "react";

import "../../css/beers.scss";

export class Beers extends React.Component {
    componentDidMount() {
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 0);
    }

    render() {
        return (
            <section className="beersContainer">
                <img src={require("../../img/home/logo.png")} style={{ height: "20%", marginBottom: "20px", marginTop: "30px" }}/>
                <div className="beersTitle">LA BANOU</div>
                <div className="beersButton" onClick={() => { this.props.fullpageApi.moveSlideRight(); }}>Découvrez nos bières artisanales<div className="buttonRotate"/></div>
                <img src={require("../../img/home/bottles.png")} style={{ height: "40%", position: "absolute", bottom: "30px" }}/>
            </section>
        );
    }
}
