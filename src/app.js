import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { MainComponent } from './Component';
import { SecondComponent } from './SecondComponent';
import { Navigation } from './Navigation';
import { SecondAnything } from './SecondAnything';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Navigation}>
            <IndexRoute component={MainComponent} /> 
            <Route path="second" component={SecondComponent}> 
                <Route path=":anything" component={SecondAnything} /> 
            </Route>
        </Route>
    </Router>),
    document.getElementById('container'));


// IndexRoute = default route