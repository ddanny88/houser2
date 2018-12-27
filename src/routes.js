import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import WizardOne from './components/Wizard/WizardOne';
import WizardTwo from './components/Wizard/WizardTwo';
import WizardThree from './components/Wizard/WizardThree';


export default (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/wizard/step1" component={WizardOne} />
            <Route path="/wizard/step2" component={WizardTwo} />
            <Route path="/wizard/step3" component={WizardThree} />
        </Switch>
    </HashRouter>
)