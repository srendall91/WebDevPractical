import React, {Component} from 'react'

class ListPeople extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  clearFilter = () =>{
    this.updateQuery('')
  }

  render(){
    const { query } = this.state
    const { people, onDeletePerson } = this.props
    const showingPeople = query === ''
      ? people
      : people.filter((p) =>(
        p.name.toLowerCase().includes(query.toLowerCase())
      ))

    return (
      <div>
        <div>
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <input className ="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Serach"
                value= {this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
              <button className="btn btn-outline-success my-2 my-sm-0"
                type="submit">Search</button>
            </form>
          </nav>
        </div>

        {showingPeople.length !== people.length &&(
          <div className="text-center">
            <span>Now Showing {showingPeople.length} of {people.length}</span>
            <button onClick={this.clearFilter}>Show all</button>
          </div>
        )}

        <ol>
          ListPeople.js: ListPeople class called<br/>
          {showingPeople.map((person)=>(
            <div key={person.id}>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{person.name}</h5>
                  <p className="card-text">{person.handle}</p>
                  <button
                    onClick={() => onDeletePerson(person)}
                    type="button" className="btn btn-dark">X</button>
                </div>
              </div>
              <br/>
            </div>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListPeople
