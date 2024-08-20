import React from 'react'

const Tasks = (props) => {
  return (
    <fieldset>
        <legend>Tasks</legend>
        {
            props.task.map((task,i) => {
                return <div key={i}>
                            {task.task}
                            <input type="checkbox"/>
                       </div>
            })
        }
    </fieldset>
  )
}

export default Tasks