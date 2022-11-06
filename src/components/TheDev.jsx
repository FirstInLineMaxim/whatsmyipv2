import React from 'react'
import { UserCard } from 'react-ui-cards';
import myAvatar from '../img/myAvatar.webp'
import './general.css'


export default function TheDev() {
  return (
    <>
    <div className='TheDev'>
        <h3>Who is behind this Webpage</h3>
        <p>This was a little Project on a Friday Afternoon for us to get to know different API's and the usage of that Information.
        </p>
        <p>All the Tech i used is in the Tech tab. If you are intressted in that i linked all of them just not inDepth</p>
        <p>Here is the link to the Repo:<a href='https://github.com/FirstInLineMaxim/whatsmyipv2'>https://github.com/FirstInLineMaxim/whatsmyipv2</a></p>
        <p>My Github Profile : <a href='https://github.com/FirstInLineMaxim'>@FirstInLineMaxim</a></p>
        <UserCard
    float
    href='https://github.com/FirstInLineMaxim'
    header='https://i.imgur.com/vRAtM3i.jpg'
    avatar={myAvatar}
    name='Maxim'
    positionName='FullStack Dev'
    // stats="test"
/>
    </div>
    </>
  )
}

