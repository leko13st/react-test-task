import React from 'react';
import './App.css';
import Header from './Header/Header';
import Instruments from './Instruments/Instruments';
import Workers from './Workers/Workers';
import WorkerCard from './WorkerCard/WorkerCard';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Instruments />
      <Workers />
      <WorkerCard />
    </div>
  );
}

export default App;