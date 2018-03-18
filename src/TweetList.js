import React, { Component } from 'react';
import { observer } from 'mobx-react'



class TweetList extends Component {
  render() {
    const {tweets} = this.props
    console.log('tweet list',tweets)
    return(
      <div>
        {
          tweets.map((tweet,i)=>{
            return <h1 style={{color:'black'}} key={i}>{tweet.content}</h1>
          })
        }
      </div>
    )
  }
}

export default observer(TweetList);
