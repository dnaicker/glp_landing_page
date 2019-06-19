import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />

      <div class="row">
        <div class="col-xs-8"> 
          <div class="colx-xs-8">
          </div>
          <div class="colx-xs-4">
          </div>
        </div>
        <div class="col-xs-4"> 
          <form>            
            <div class="form-group">
              <input placeholder="email" class="form-control" />
            </div>
            <div class="form-group">
              <input placeholder="password" class="form-control" />
            </div>
            <div class="form-group">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
     
    </div>
  );
}

export default App;