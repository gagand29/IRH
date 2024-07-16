// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Feedback from './pages/Feedback';
import Recipes from './pages/Recipes';
import NorthIndianRecipes from './pages/NorthIndianRecipes';
import SouthIndianRecipes from './pages/SouthIndianRecipes';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/recipes/north-indian" element={<NorthIndianRecipes />} />
            <Route path="/recipes/south-indian" element={<SouthIndianRecipes />} />
            <Route path="/recipes/:category/*" element={<Recipes />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
