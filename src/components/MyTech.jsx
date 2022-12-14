import React from 'react'
import './general.css'


export default function Basic() {
  return (
    <>

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
      <h3><a href='https://github.com/nukeop/react-ui-cards'>React UI Cards</a></h3>
      <p>Just my Github Profile Card</p>
      <h3>The API's</h3>
      <p><a href='http://ip-api.com/'>http://ip-api.com/</a> for recieving the Ip of the Client and getting general data like Latitude and Longitude</p>
      <p><a href='https://restcountries.com/v3.1/'>https://restcountries.com/v3.1/</a> for the Country Facts</p>
    </div>
    </>

  )
}
