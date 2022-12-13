import './App.css';
import React from 'react';
import {Routes,Route } from 'react-router-dom';
import Basic from './components/MyTech';
import TheDev from './components/TheDev';
import Cards from './components/Card';
import LabelBottomNavigation from './components/LabelBottomNavigation';


// Mach noch ne Navigation mit 2 tabs oder so mit meinen technologien die ich benutzt habe und noch einem contact page mit meinem githiub etc

function App() {
  return (
    <>
    {/* <NavLink to="/Tech">TheTech</NavLink> */}
    <div className='mainContainer'>
    <Routes>
      <Route path='whatsmyipv2' element={<Cards/>}/>
      <Route path='whatsmyipv2/Tech' element={<Basic/>}/>
      <Route path='whatsmyipv2/Dev' element={<TheDev/>}/>

    </Routes>
    <LabelBottomNavigation/>
    </div>
    </>
  );
}

export default App;
