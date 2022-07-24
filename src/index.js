import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList'
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  <div>
    <CardList robots={robots} />
  </div>
  , document.getElementById('root')
);