import './App.css';
import PersonCard from './components/PersonCard';
import React from 'react';


function App() {

  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="Smith" lastName="John" age={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Black" />
      <PersonCard firstName="Smith" lastName="Maria" age={62} hairColor="Black" />
    </div>
  );
}

export default App;
