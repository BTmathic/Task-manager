import React from 'react';
import ReactDOM from 'react-dom';
import TaskManager from './components/TaskManager';
import 'normalize.css/normalize.css'; // reset all browser conventions
import './styles/styles.scss';

ReactDOM.render(<TaskManager />, document.getElementById('app'));