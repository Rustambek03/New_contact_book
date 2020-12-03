import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import ContactDetails from './components/ContactDetails/ContactDetails';
import EditContact from './components/EditContact/EditContact';
import Home from './components/Home/Home';
import { history } from './Helpers/history';


const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/editContact" component={EditContact} />
                <Route exact path="/contactDetails" component={ContactDetails} />
            </Switch>
        </Router>
    )
}

export default Routes;