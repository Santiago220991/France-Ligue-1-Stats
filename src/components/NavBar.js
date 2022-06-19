import React from 'react';
import backbtn from './backbtn-img.png';
import configbtn from './configbtn-img.png';
import micbtn from './micbtn-img.png';

const NavBar = () => (
  <div>
    <img src={backbtn} alt="back-button" />
    <p>France League 1</p>
    <img src={micbtn} alt="mic-button" />
    <img src={configbtn} alt="config-button" />
  </div>
);

export default NavBar;
