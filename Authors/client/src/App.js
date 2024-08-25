
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './components/Main'
import Create from './components/Create'
import Update from './components/Update'

function App() {
  return (
    <div className="App">
      <h1>Favourite Authors</h1>
      <Routes>
        {/* REDIRECT */}
        <Route path='/' element={<Navigate replace to='/authors' Main/>} />
        {/* DASHBOARD */}
        <Route path='/authors' element={<Main />} />
        {/* CREATE  */}
        <Route path='/authors/new' element={<Create />} />
        {/* UPDATE */}
        <Route path='/authors/:id/edit' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;