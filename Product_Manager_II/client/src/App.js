
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Create from "./components/Create"
import Main from "./components/Main"
import OneProduct from './components/OneProduct';

function App() {
  return (
    <div className="App">

      <Routes>
        {/* DASHBOARD */}
        <Route path='/' element={<Main />} />
         {/* ONE PRODUCT */}
         <Route path='/products/:id' element={<OneProduct />} />
        {/* CREATE  */}
        <Route path='/products/create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;