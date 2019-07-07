import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const renderRoot = document.getElementById('root');
ReactDOM.render(<App />, renderRoot);
