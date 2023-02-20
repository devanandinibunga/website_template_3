import React from 'react';
import './App.css';
import { funeralcontext,funeralHeaderData,funeralFooterData } from './components/FuneralDataContext/FuneralDataContext';
import { FuneralBody } from './components/FuneralBody/FuneralBody';
import { FuneralFooter } from './components/FuneralFooter/FuneralFooter';
import { FuneralHeader } from './components/FuneralHeader/FuneralHeader';

function App() {
  return (
    <div className="App">
      <funeralcontext.Provider value={{funeralHeaderData,funeralFooterData}}>
      <FuneralHeader/>
      <FuneralBody/>
      <FuneralFooter/>
      </funeralcontext.Provider>
    </div>
  );
}

export default App;
