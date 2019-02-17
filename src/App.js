import React, { Component } from 'react';
import ListPeople from './ListPeople';
import * as PeopleAPI from './utils/PeopleAPI'

class App extends Component {
  state = {
    people: []
  }

  componentDidMount(){
    PeopleAPI.getAll()
      .then((people) => {
        this.setState(() => ({
          people
        }))
      })
  }

  removePerson = (person) =>{
    this.setState((currentState)=>({
      people:currentState.people.filter((p)=>{
        return p.id !== person.id
      })
    }))

    PeopleAPI.remove(person)
  }

  render() {
    console.log('App.js called, state = ',this.state)
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
