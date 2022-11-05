import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default ({data}) => (
    <Tabs>
      {console.log(data)}
    <TabList>
      <Tab>Country Facts</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <p>Capital : {data.capital[0]}</p>
      <div>{data.timezones.map(ele=><p>{ele}</p>)}</div>
      <p>{Object.values(data.currencies.EUR)}</p>

    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);