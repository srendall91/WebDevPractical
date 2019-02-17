import React, { Component } from 'react';
import ListPeople from './ListPeople';
import * as PeopleAPI from './utils/PeopleAPI'
import CreatePerson from './CreatePerson'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    people: [],
    screen: 'list'
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

  createPerson = (person) => {
    PeopleAPI.create(person)
    .then((person)=> {
      this.setState((currentState) => ({
        people: currentState.people.concat([person])
      }))
    })
  }

  render() {
    console.log('App.js called, state = ',this.state)
    return (
      <div className="container">
        App.js: App class called
        <Route exact path='/' render={()=>(
          <ListPeople
            people={this.state.people}
            onDeletePerson={this.removePerson}
         />
       )} />
         <Route path='/create' render={({history})=>(
           <CreatePerson
            onCreatePerson={(person) =>{
              this.createPerson(person)
              history.push('/')
            }}
          />
         )}/>
      </div>
    );
  }
}

export default App;
