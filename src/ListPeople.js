import React, {Component} from 'react'

class ListPeople extends Component {
  render(){
    console.log('Props', this.props)
    return (
        <ol>
          ListPeople.js: ListPeople class called<br/>
          {this.props.people.map((person)=>(
            <div key={person.id}>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{person.name}</h5>
                  <p className="card-text">{person.handle}</p>
                  <button
                    onClick={() => this.props.onDeletePerson(person)}
                    type="button" className="btn btn-dark">X</button>
                </div>
              </div>
              <br/>
            </div>
          ))}
        </ol>
    )
  }
}

export default ListPeople
