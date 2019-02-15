import React, { Component } from 'react';

class PeopleList extends React.Component {
  render(){
    const people= this.props.people

    return <ol>
    {people.map((person) =>
      <li key ={person.name}>{person.name}</li>
    )}
    </ol>
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <PeopleList people={[
          {name: 'Russell'},
          {name: 'Malcolm',},
          {name: 'Magnus',}]}
        />
        <PeopleList people={[
          {name: 'Gill '},
          {name: 'Sarah',},
          {name: 'Grace',}]}
        />
        <PeopleList people={[
          {name: 'Jenny'},
          {name: 'Helen',}]}
        />
      </div>
    );
  }
}

export default App;
