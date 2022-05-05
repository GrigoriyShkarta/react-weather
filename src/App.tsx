import React from 'react';

import {Route, Switch} from "react-router-dom";

import Home from "./pages/Home/components/Home";
import MonthStatics from "./pages/MonthStatics/components/MonthStatics";
import Header from "./shared/Header/Header";

function App() {
return (
    <div className="container">
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/month-statistics" exact component={MonthStatics}/>
        </Switch>
    </div>
);
}

export default App;
