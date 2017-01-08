/**
 * Entry point
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

// Base stylesheet
import './styles/index.css'
import Home from './containers/Home';

const store = configureStore({});

ReactDOM.render(
    <Provider store = {store} key="provider">
        <Home />
    </Provider>, document.getElementById('root')
);
