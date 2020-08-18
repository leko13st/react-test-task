import React from 'react';
import './App.css';
import Header from './Header/Header';
import WorkersContainer from './Workers/WorkersContainer';
import InstrumentsContainer from './Instruments/InstrumentsContainer';
import WorkerCardContainer from './WorkerCard/WorkerCardContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <InstrumentsContainer />
      <WorkersContainer />
      <WorkerCardContainer />
    </div>
  );
}

export default App;