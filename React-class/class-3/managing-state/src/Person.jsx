import React from 'react'

export default function Person({ person, setKey }) {
  return (
    <div>
      <p>{person.name}</p>
      <button onClick={() => setKey(person.id)}>Set Key to {person.id}</button>
    </div>
  )
}
