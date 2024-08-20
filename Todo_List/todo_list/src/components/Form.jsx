import React, {useState} from 'react'

const Form = (props) => {
    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState(false);

    const createTask = (e) => {
        e.preventDefault();
        const newTask = {task};
        props.AddTaskToTheObject(newTask);
        setTask("");
        setCompleted(false);
      }

  return (
    <fieldset>
        <legend>Form</legend>
        <form onSubmit={createTask}>
            <div>
                Task : 
                <input type="text" onChange={(e) => {setTask(e.target.value)}} />
            </div>
            <button>Add</button>

        </form>

    </fieldset>
  )
}

export default Form