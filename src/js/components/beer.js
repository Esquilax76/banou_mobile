import React from "react";

import "../../css/beers.scss";

export class Beer extends React.Component {
    render() {
        return (
            <section className={this.props.index % 2 == 1 ? "beersContainer" : "beersContainer beersContainerAlt"}>
                <div className="beerTitle">{this.props.data.name}</div>
                <img src={this.props.data.bottle} className="beerImage"/>
                <div className="beerDescription">
                    <div className="beerDescriptionText">{this.props.data.description_long}</div>
                    <div className="beerInfoContainer">
                        <div className="beerInfo">IBU<br/>{this.props.data.ibu}</div>
                        <div className="beerInfo">ALC<br/>{this.props.data.alcool}</div>
                        <div className="beerInfo">EBC<br/>{this.props.data.ebc}</div>
                    </div>
                </div>
            </section>
        );
    }
}
