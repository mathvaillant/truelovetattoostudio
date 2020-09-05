import React from 'react';
import './App.css';

import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import Store from './components/Store/Store';
import Work from './components/Work/Work';
import Artists from './components/Artists/Artists';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App m-0 p-0">
      <Showcase />
      <About />
      <Store />
      <Work />
      <Artists />
      <Footer />
    </div>
  );
}

export default App;
