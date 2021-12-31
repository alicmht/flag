import './App.css';
import React from 'react';
import { BrowserRouter , Routes,  Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Notfount from './pages/Notfount';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={Home} />
        <Route path="/a-propos"  element={About} />
        <Route  path="*" element={Notfount} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
