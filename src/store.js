import { extendObservable, computed } from 'mobx';

const seedData = {
  id:1,
  content:'Hello Takashi!!'
}

class Tweets {
  constructor() {
    extendObservable(this, {
      all: []
    })
    this.all.push(seedData)
  }
}

export {
  Tweets
} ;
