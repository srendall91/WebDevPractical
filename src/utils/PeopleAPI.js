const api = process.env.REACT_APP_PEOPLE_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () =>
  fetch(`${api}/people`, {headers})
    .then(res => res.json())
    .then(data => data.people)

export const remove = (person) =>
  fetch(`${api}/people/${person.id}`, {method: 'DELETE', headers})
  .then(res => res.json())
  .then(data => data.person)

export const create = (body) =>
  fetch(`${api}/people`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.strinify(body)
  }).then(res => res.json())
