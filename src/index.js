import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';
import './index.css';
import {Tweets} from './store'
import {observable, computed, asStructure, toJs} from 'mobx';
import { extendObservable } from 'mobx';

class ViewStore {
  constructor() {
    extendObservable(this, {
      content_input:''
    });
  }
}

class RootStore {
  constructor(root) {
    this.counter = new Counter(root)
    this.tweets = new Tweets(root)
    this.view = new ViewStore(root)
    this.addTweet = this.addTweet.bind(this)
    this.changeInputText = this.changeInputText.bind(this)
  }
  get allTweet(){
    return this.tweets.all
  }
  addTweet(){
    this.tweets.all.push({
      id:2,
      content:this.view.content_input
    })
    this.view.content_input = '';
  }
  changeInputText(text){
    this.view.content_input = text;
    console.log(this.view.content_input)
  }

}

ReactDOM.render(
  <App state={new RootStore()} />,
  document.getElementById('root')
);
