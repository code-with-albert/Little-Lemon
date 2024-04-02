import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Reservation from './pages/Reservation'
import "@fontsource/markazi-text";
import "@fontsource/khula";
import "@fontsource/karla";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="Reservation" element={ <Reservation/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
