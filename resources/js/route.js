import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Auth from './components/Auth'
import NotFound from "./components/NotFound";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Auth}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

