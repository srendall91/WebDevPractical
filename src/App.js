import React, { Component } from 'react';
import ListPeople from './ListPeople';

const people = [
    {
      id: 'russell',
      name: 'Russell Hunter',
      handle: '@russell_hunter',
    },
    {
      id:'derek',
      name:'Derek Summers',
      handle: '@derek_summers'
    },
    {
      id:'gill',
      name:'Gillian Douglas',
      handle: '@gill_douglas'
    },
    {
      id:'stuart',
      name:'Stuart Rendall',
      handle: '@stuart_rendall'
    }
]

class App extends Component {
  render() {
    return (
      <div className="container">
        App.js: App class called
        <ListPeople people={people} />
      </div>
    );
  }
}

export default App;
