import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
