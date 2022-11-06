import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import mui_logo from '../img/MUI.png'
import react_logo from '../img/React.png'
import router_logo from '../img/reactrouter.png'
import leaflet_logo from '../img/React_Leaflet.png'
import './general.css'


export default function Basic() {
  return (
    <>
 {/* <Stack direction="row" spacing={2}>
      <Avatar alt="React" src={react_logo} variant="rounded" />
      <p>React</p>
      <Avatar alt="React Router Dom" src={router_logo} variant="rounded" />
      <p>React Router Dom</p>
      <Avatar alt="React leaflet" src={leaflet_logo} variant="rounded"  />
      <p>React leaflet</p>
      <Avatar alt="MUI" src={mui_logo} variant="rounded" />
      <p>MUI</p>

    </Stack> */}

    <div className='theTech'>
      <h2>The Tech used in this Project</h2>
      <h3><a href='https://reactjs.org/'>React</a></h3>
      <p>The Core of this Website</p>
      <h3><a href="https://v5.reactrouter.com/web/guides/quick-start">React Router Dom</a></h3>
      <p>Making the Routing for this App</p>
      <h3><a href='https://react-leaflet.js.org/'>React leaflet</a></h3>
      <p>The Map used for displaying the Location</p>
      <h3><a href='https://mui.com/'>Material UI</a></h3>
      <p>Some Styling with the MUI component library</p>
      <h3>The API's</h3>
      <p><a href='http://ip-api.com/'>http://ip-api.com/</a> for recieving the Ip of the Client and getting general data like Latitude and Longitude</p>
      <p><a href='https://restcountries.com/v3.1/'>https://restcountries.com/v3.1/</a> for the Country Facts</p>
    </div>

    <Link to="/" ><Button variant="contained">
      Back
</Button></Link>
    </>
  )
}
