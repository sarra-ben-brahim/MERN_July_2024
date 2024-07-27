import React from 'react'

const PersonCard = (props) => {
  return (
    <div>
        <h4> {props.lastName}, {props.firstName} </h4>
        <p>Age: {props.age} </p>
        <p>Hair Color: {props.hairColor} </p>
    </div>
  )
}

export default PersonCard