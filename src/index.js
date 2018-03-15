import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';
import './index.css';

class RootStore {
  constructor() {
    this.counter = new Counter(this)
  }
}

ReactDOM.render(
  <App state={new RootStore()} />,
  document.getElementById('root')
);
