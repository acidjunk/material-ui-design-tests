import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Metadata from "./pages/Metadata";
import NewProcess from "./pages/NewProcess";
import Processes from "./pages/Processes";
import Subscriptions from "./pages/Subscriptions";
import Tasks from "./pages/Tasks";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#4db2cf"
    }
});

function App({ classes }) {
    const [value, setValue] = useState(0);

    const onChange = (e, value) => {
        setValue(value);
    };

    return (
        <Router>
            <AppBar position="static" className={classes.root}>
                <Tabs value={value} onChange={onChange}>
                    <Tab label="Processes" component={Link} to="/" />
                    <Tab label="Subscriptions" component={Link} to="/subscriptions" />
                    <Tab label="Metadata" component={Link} to="/metadata" />
                    <Tab label="Tasks" component={Link} to="/tasks" />
                    <Tab label="+ Process" component={Link} to="/new-process" />
                </Tabs>
            </AppBar>
            <Switch>
                <Route exact path="/" render={() => <Processes />} />
                <Route exact path="/subscriptions" render={() => <Subscriptions />} />
                <Route exact path="/metadata" render={() => <Metadata />} />
                <Route exact path="/tasks" render={() => <Tasks />} />
                <Route exact path="/new-process" render={() => <NewProcess />} />
            </Switch>
        </Router>
    );
}

export default withStyles(styles)(App);
