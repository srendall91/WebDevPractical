import React, { Component } from 'react';
import ListPeople from './ListPeople';

class App extends Component {
  state = {
    people: [
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
  }

  removePerson = (person) =>{
    this.setState((currentState)=>({
      people:currentState.people.filter((p)=>{
        return p.id !== person.id
      })
    }))
  }

  render() {
    return (
      <div className="container">
        App.js: App class called
        <ListPeople
          people={this.state.people}
          onDeletePerson={this.removePerson}
         />
      </div>
    );
  }
}

export default App;
