import React from 'react';
import './App.scss';

import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import Store from './components/Store/Store';
import Work from './components/Work/Work';
import Artists from './components/Artists/Artists';
import Footer from './components/Footer/Footer';
import Map from './components/Map';

function App() {
  return (
    <div className="App m-0 p-0">
      <Showcase />
      <About />
      <Work />
      <Store />
      <Artists />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
