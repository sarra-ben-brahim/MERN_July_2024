
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Create from "./components/Create"

function App() {
  return (
    <div className="App">

      <Routes>
        {/* CREATE  */}
        <Route path='/products/create' element={<Create />} />

      </Routes>
    </div>
  );
}

export default App;