import withStyles from "@material-ui/core/styles/withStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const styles = theme => ({
    indicator: {
        backgroundColor: "white"
    },
    tabRoot: {
        // flexGrow: 1,
        fontWeight: "bold",
        fontSize: "1.1em"
    }
});

function Header({ classes }) {
    const location = useLocation();
    console.log(location);
    const [value, setValue] = useState(location.pathname);
    const onChange = (e, value) => {
        setValue(value);
    };
    return (
        <Tabs value={value} classes={{ indicator: classes.indicator }} onChange={onChange}>
            <Tab className={classes.tabRoot} label="Processes" component={Link} to="/" value="/" />
            <Tab
                className={classes.tabRoot}
                label="Subscriptions"
                component={Link}
                to="/subscriptions"
                value="/subscriptions"
            />
            <Tab className={classes.tabRoot} label="Metadata" component={Link} to="/metadata" value="/metadata" />
            <Tab className={classes.tabRoot} label="Tasks" component={Link} to="/tasks" value="/tasks" />
            <Tab
                className={classes.tabRoot}
                label="+ Process"
                component={Link}
                to="/new-process"
                value="/new-process"
            />
        </Tabs>
    );
}
export default withStyles(styles)(Header);
