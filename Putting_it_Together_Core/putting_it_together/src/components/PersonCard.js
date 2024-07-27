import React, { useState }  from 'react';


const PersonCard = (props) => {
    
    const [state, setState] = useState({
        clickCount: props.age
      });
    
      const handleClick = () => {
        setState({
          clickCount: state.clickCount + 1
        });
      }
    return (
        <div>
            <h4> {props.lastName}, {props.firstName} </h4>
            <p>Age: {state.clickCount} </p>
            <p>Hair Color: {props.hairColor} </p>
            <button onClick={handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>

    )

}

export default PersonCard