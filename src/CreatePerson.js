import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class CreatePerson extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true})

    if (this.props.onCreatePerson){
      this.props.onCreatePerson(values)
    }
  }
  render(){
    return(
      <div>
        <p>Create Person Page</p>
        <Link className='btn btn-dark' to='/'>Close</Link>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label for="name">Name</label>
            <input type='text' className="form-control" name="name" id='name' placeholder='Name' />
          </div>
          <div className="form-group">
            <label for='handle'>Handle</label>
            <input type='text' className="form-control" name="handle" id='handle' placeholder='Handle' />
          </div>
            <button className="btn btn-primary">Add Contact</button>
        </form>
      </div>
    )
  }
}

export default CreatePerson
