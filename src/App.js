
import './App.css';
import BusinessPage from './Components/LoanSection/BusinessPage';
import HomePage from './Components/LandingPage/HomePage';
import Navbar from './Components/NavSection/NavBar';
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
