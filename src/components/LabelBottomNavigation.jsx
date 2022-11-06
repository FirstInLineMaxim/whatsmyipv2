import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoOutlined from '@mui/icons-material/Info'
import AccountCircleOutlined from '@mui/icons-material/AccountCircle'
import { NavLink } from 'react-router-dom';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='bottomNav'>
    <BottomNavigation showLabels sx={{ width: 500 }} value={value} onChange={handleChange}>
        <BottomNavigationAction
        label="MainPage"
        value=""
        to="/"
        LinkComponent={NavLink}
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="TheTech"
        value="Tech"
        to="/Tech"
        LinkComponent={NavLink}
        icon={<InfoOutlined />}
      />
      <BottomNavigationAction
        label="The Dev"
        value="TheDev"
        to="/Dev"
        LinkComponent={NavLink}
        icon={<AccountCircleOutlined />}
      />

    </BottomNavigation>
    </div>
  );
}
