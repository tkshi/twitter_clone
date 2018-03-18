import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import './App.css';
import {observable, computed, asStructure, toJS} from 'mobx';
import TweetList from './TweetList'

class App extends Component {
  render() {
    const {counter,allTweet,addTweet,changeInputText,view} = this.props.state;
    const {content_input} = view;
    console.log(toJS(allTweet))
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React + MobX</h2>
          <input onChange={(e)=>{changeInputText(e.target.value)}} value={content_input} />
          <button onClick={()=>addTweet()} >追加</button>
          <TweetList tweets={allTweet} />

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Counter:
          <span className={counter.isOdd ? 'Counter-odd' : 'Counter-even'}> {counter.count} </span>
        </p>
        <p>
          <button onClick={() => counter.increment()}> + </button>
          <button onClick={() => counter.decrement()}> - </button>
        </p>
        <DevTools />
      </div>
    );
  }
}

export default observer(App);
