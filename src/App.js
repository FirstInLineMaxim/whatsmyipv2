import React,{useEffect,useState} from 'react';
import './App.css';
import LeafletMap from './LeafletMap';
import { MyMapComponent } from './LeafletMap';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        
        const { DateTime } = require("luxon");

  return (
    <>
    {/* <Button>FUnFacts</Button> */}
<div className='map_card'>
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
        <p>Today is the {DateTime.now().setLocale(country[0].cca2).toLocaleString(DateTime.DATE_MED)}</p>
        <p>{country[0].region}</p>
        </>
        }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>}
    
    {/*IP.location  */}

    {country && <LeafletMap data={IP.location}/>}
    </div>
    </>
  );
}

export default App;
