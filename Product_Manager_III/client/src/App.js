
import './App.css';
import { Routes, Route } from "react-router-dom"
import Create from "./components/Create"
import Main from "./components/Main"
import OneProduct from './components/OneProduct';
import Update from './components/Update';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <Link to="/products/create">ADD Product ➕</Link>

      <Routes>
        {/* DASHBOARD */}
        <Route path='/' element={<Main />} />
         {/* ONE PRODUCT */}
         <Route path='/products/:id' element={<OneProduct />} />
        {/* CREATE  */}
        <Route path='/products/create' element={<Create />} />
        {/* UPDATE */}
        <Route path='/products/:id/update' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;