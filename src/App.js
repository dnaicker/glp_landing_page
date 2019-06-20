import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroContent from './components/IntroContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroContent />      
      <Footer />
    </div>
  );
}

export default App;