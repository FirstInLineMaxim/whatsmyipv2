import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { browserName, browserVersion } from "react-device-detect";


export default function TabsComp ({data}){
const short = Object.keys(data.currencies)[0]
const curNames = Object.keys(data.currencies[short])
const curValues = Object.values(data.currencies[short])
return (    
<Tabs>
  <TabList>
    <Tab>Country Facts</Tab>
    <Tab>UserAgent</Tab>
  </TabList>

  <TabPanel>
    <p>Capital : {data.capital[0]}</p>
    <ul>TimeZones{data.timezones.map((ele,i)=><li key={i}>{ele}</li>)}</ul>
    <ul>Currencies{curNames.map((ele,i)=> <li key={i}>{ele} : {curValues[i]}</li>)}</ul>
    <h3>Coat of Arms</h3>
    <img className='CoatOfArms' src={data.coatOfArms.png} alt="CoatOfArms"/>

  </TabPanel>
  <TabPanel>
    <h2>{browserName} : Version {browserVersion}</h2>
    <p>{navigator.userAgent}</p>
    <p>{navigator.cookieEnabled ? "Cookies Enabled" : "no"}</p>

  </TabPanel>
</Tabs>
)
}