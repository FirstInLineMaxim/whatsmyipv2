import './App.css';
import React,{useEffect,useState} from 'react';
import { NavLink,Routes,Route } from 'react-router-dom';
// import TabsComp from './Tabs';
// import LeafletMap from './LeafletMap';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Basic from './components/Basic';
import Cards from './components/Card';


// Mach noch ne Navigation mit 2 tabs oder so mit meinen technologien die ich benutzt habe und noch einem contact page mit meinem githiub etc

function App() {
  const [IP, setIP] = useState()
  useEffect(() => {
      fetch("http://ip-api.com/json/").then(response => response.json()).then(data => setIP(data))
    }, [])
    
    const [country, setCountry] = useState()
    useEffect(()=>{
        if(IP){
            fetch(`https://restcountries.com/v3.1/alpha?codes=${IP.countryCode}`).then(response => response.json()).then(data => setCountry(data))
          }
        
        },[IP])
        
        const { DateTime } = require("luxon");

  return (
    <>
    <NavLink to="/Tech">Technology</NavLink>
    <NavLink to="/Map">Mao</NavLink>

    <Routes>
      <Route index element={<Cards/>}/>
      <Route path='Tech' element={<Basic/>}/>
    </Routes>
{/* <div className='map_card'>
 { country &&  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="flag"
        height="auto"
        image={country[0].flags.png}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {IP && <p>Your Ip {IP.ip}</p>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {country && <>
        Today is the {DateTime.now().setLocale(country[0].cca2).toLocaleString(DateTime.DATE_MED)}
        
        </>
        }
        </Typography>
        <p>{country[0].region}</p>
        <p>Click the Map to see your GPS location</p>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>} */}
    
    {/*IP.location  */}
{/* 
    {country && <LeafletMap data={IP}/>}
    </div>
    
    {country && <TabsComp data={country[0]}/>} */}
    </>
  );
}

export default App;
