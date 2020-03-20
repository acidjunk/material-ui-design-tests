import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./components/Header";
import Metadata from "./pages/Metadata";
import NewProcess from "./pages/NewProcess";
import Processes from "./pages/Processes";
import Subscriptions from "./pages/Subscriptions";
import Tasks from "./pages/Tasks";

const styles = theme => ({
    appbar: {
        flexGrow: 1,
        backgroundColor: "#4db2cf",
        maxWidth: "1680px",
        margin: "auto"
    },
    base: {
        maxWidth: "1680px",
        margin: "auto"
    }
});

function App({ classes }) {
    // Todo: base name will be "/" when not deploed on GH-Pages
    return (
        <Router basename="/material-ui-design-tests">
            <AppBar position="static" className={classes.appbar}>
                <Header />
            </AppBar>
            <div className={classes.base}>
                <Switch>
                    <Route exact path="/" render={() => <Processes />} />
                    <Route exact path="/subscriptions" render={() => <Subscriptions />} />
                    <Route exact path="/metadata" render={() => <Metadata />} />
                    <Route exact path="/tasks" render={() => <Tasks />} />
                    <Route exact path="/new-process" render={() => <NewProcess />} />
                </Switch>
            </div>
        </Router>
    );
}

export default withStyles(styles)(App);
