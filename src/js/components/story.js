import React from "react";

import "../../css/story.scss";
import data from "../data/data.js";

export class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = { story: data.story };
    }

    render() {
        return (
            <div className="storyContainer">
                <div className="pageTitle storyTitle">NOTRE HISTOIRE</div>
                <div className="storyItems">
                    {this.state.story.map(function (item, index) {
                        if (index % 2 == 0) {
                            return (
                                <div className="storyItem" key={item.title}>
                                    <div className="storyImage" style={{ backgroundImage: "url(" + item.picture + ")" }}/>
                                    <div className="storyDescription">{item.description}</div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="storyItem" key={item.title}>
                                    <div className="storyDescriptionAlt">{item.description}</div>
                                    <div className="storyImageAlt" style={{ backgroundImage: "url(" + item.picture + ")" }}/>
                                </div>
                            );
                        }
                    }.bind(this))}
                </div>
            </div>
        );
    }
}
