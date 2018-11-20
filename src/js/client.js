import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";

import Layout from "./components/layout.js";

import "../css/common.scss";

require("../img/favicon.png");

const app = document.getElementById("app");
ReactDOM.render(
    <Layout/>,
    app
);
