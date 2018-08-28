import React from 'react';
import { render } from 'react-dom';
import './stylesheets/master.css';
import { Projects } from './Projects';
import { CodingTrian } from './CodingTrian';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Router, Route, hashHistory } from 'react-router';
import {Whoops404} from './Whoops404'


window.React = React;

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/list-project" component={App}>
            <Route path=":filter" component={App}/>
        </Route>
        <Route path="/add-project" component={App}/>
        <Route path="/git-repo" component={App}/>
        <Route path="*" component={Whoops404}/>
    </Router>,
    document.getElementById('projects')
);

// render(
//     <CodingTrian />,
//     document.getElementById('CodingTrian')
// );
registerServiceWorker();
