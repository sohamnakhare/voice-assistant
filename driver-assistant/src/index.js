import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initData from './initData.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

initData();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
