import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt, faComment } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram } from "@fortawesome/fontawesome-free-brands";

import "../../css/info.scss";
import data from "../data/data.js";

export class Info extends React.Component {
    render() {
        return (
            <div className="infoContainer">
                <div className="pageTitle infoTitle">INFOS PRATIQUES</div>
                <div className="infoOpeningContainer">
                    <FontAwesomeIcon icon={faClock} className="infoIcon"/>
                    <div className="infoSubtitle">Horaires d'ouverture :</div>
                    <div>
                        {data.info.opening_bar.map(
                            (item) => {
                                return (<div key={item} style={{ textAlign: "center" }}>{item}</div>);
                            }
                        )}
                    </div>
                    {/*
                    <div className="infoSubtitle" style={{ marginTop: "20px" }}>Horaires d'ouverture de la microbrasserie</div>
                    <div>
                        {data.info.opening_brewery.map(
                            (item) => {
                                return (<div key={item} style={{ textAlign: "center" }}>{item}</div>);
                            }
                        )}
                    </div>
                    */}
                </div>
                <div className="separator"/>
                <div className="infoAddressContainer">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="infoIcon"/>
                    <div style={{ textAlign: "center" }}>{data.info.address}</div>
                </div>
                <div className="separator"/>
                <div className="infoContactContainer">
                    <FontAwesomeIcon icon={faComment} className="infoIcon"/>
                    <div>06.58.26.98.58</div>
                    <div style={{ marginTop: "10px" }}>contact@labanou.com</div>
                    <div style={{ marginTop: "10px", fontSize: "1.5em" }}>
                        <a href="https://www.facebook.com/bierelabanou" target="blank">
                            <FontAwesomeIcon icon={faFacebookSquare} style={{ marginRight: "20px" }}/>
                        </a>
                        <a href="https://www.instagram.com/biere_la_banou/?hl=fr" target="blank">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
