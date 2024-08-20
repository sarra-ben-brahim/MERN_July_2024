import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState([
    { task : "",
      completed : false
    }
  ]); 

  const AddTaskToTheObject = (newTask) => {
    setTask([...task, newTask]);
  }
  return (
    <div className="App">
      <Form AddTaskToTheObject = {AddTaskToTheObject} />
      <Tasks task = {task} />
    </div>
  );
}

export default App;
