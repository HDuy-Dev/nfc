import React from "react";
import ReactDOM from "react-dom/client";
import "./_style.scss";
import App from "./App";
import PlaceList from "./components/placelist";
import KungFuList from "components/kungfulist";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/cacdiemsinhhoat" component={PlaceList} />
                <Route path="/cacdiemvothuat" component={KungFuList} />
            </Switch>
        </Router>
    </React.StrictMode>
);
