import './App.css';
import React,{useEffect,useState} from 'react';
import { NavLink,Routes,Route } from 'react-router-dom';
import Basic from './components/MyTech';
import Cards from './components/Card';


// Mach noch ne Navigation mit 2 tabs oder so mit meinen technologien die ich benutzt habe und noch einem contact page mit meinem githiub etc

function App() {
  return (
    <>
    <NavLink to="/Tech">Technology</NavLink>
    <NavLink to="/Map">Mao</NavLink>

    <Routes>
      <Route index element={<Cards/>}/>
      <Route path='Tech' element={<Basic/>}/>
    </Routes>
    </>
  );
}

export default App;
