import React from 'react';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardd from './components/Cardd';

import './App.css';

function App() {
  return (
    <div className="App">
     <Navbarr/>
     <Cardd/>
     <Cardd/>
     <Cardd/>
    </div>
  );
}

export default App;
