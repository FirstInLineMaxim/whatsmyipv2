import React, { useEffect, useState } from 'react';
import LeafletMap from './LeafletMap';
import TabsComp from './Tabs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Cards() {

  const [IP, setIP] = useState()
  useEffect(() => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => setIP(data))
    .catch(err => console.error(err))
  }, [])

  const [country, setCountry] = useState()
  useEffect(() => {
    if (IP) {
      fetch(`https://restcountries.com/v3.1/alpha?codes=${IP.country_code}`)
      .then(response => response.json())
      .then(data => setCountry(data))
      .catch(err => console.error(err))
    }

  }, [IP])

  const { DateTime } = require("luxon");


  return (
    <>
      <div className='map_card'>
        {country && <Card sx={{ maxWidth: 345, maxHeight: 465 }}>
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
            <Typography variant="body1" color="text.primery">ISP: {IP.org}</Typography>
            <Typography variant="body1" color="text.primery">Country: {IP.country_name}</Typography>
            <Typography variant="body1" color="text.primery">State/Region: {IP.region}</Typography>
            <Typography variant="body1" color="text.primery">Click the Map to see your GPS location</Typography>
          </CardContent>
        </Card>}


        {country && <LeafletMap data={IP} />}
      </div>

      {country && <TabsComp data={country[0]} />}
    </>
  )
}
