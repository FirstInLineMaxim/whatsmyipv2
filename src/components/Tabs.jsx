import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function TabsComp ({data}){
const short = Object.keys(data.currencies)[0]
const curNames = Object.keys(data.currencies[short])
const curValues = Object.values(data.currencies[short])

return (    
<Tabs>
  <TabList>
    <Tab>Country Facts</Tab>
    <Tab>Title 2</Tab>
  </TabList>

  <TabPanel>
    <p>Capital : {data.capital[0]}</p>
    <ul>TimeZones{data.timezones.map((ele,i)=><li key={i}>{ele}</li>)}</ul>
    <ul>Currencies{curNames.map((ele,i)=> <li key={i}>{ele} : {curValues.map((ele2) => (ele2[i]))}</li>)}</ul>
    <h3>Coat of Arms</h3>
    <img className='CoatOfArms' src={data.coatOfArms.png} alt="CoatOfArms"/>

  </TabPanel>
  <TabPanel>
    <h2>Any content 2</h2>
  </TabPanel>
</Tabs>
)
}