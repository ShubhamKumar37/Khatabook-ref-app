
import './App.css';
import BusinessPage from './Components/BusinessPage';
import HomePage from './Components/HomePage';
import Navbar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <div className="overflow-hidden">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/loan-page' element={<BusinessPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
