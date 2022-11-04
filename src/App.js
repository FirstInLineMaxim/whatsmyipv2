import React,{useEffect,useState} from 'react';
import './App.css';
import LeafletMap from './LeafletMap';


function App() {
  const [IP, setIP] = useState()
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL).then(response => response.json()).then(data => setIP(data))
  }, [])

  const [country, setCountry] = useState()
  useEffect(()=>{
    if(IP){
      fetch(`https://restcountries.com/v3.1/alpha?codes=${IP.location.country}`).then(response => response.json()).then(data => setCountry(data))
    }
    
  },[IP])
  
  
  return (
    <>
    {country && <img src={country[0].flags.png} alt="flag"/>}
    {IP && <p>{IP.ip}</p>}
    <LeafletMap/>

    </>
  );
}

export default App;
