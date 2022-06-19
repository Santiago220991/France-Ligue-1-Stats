import React from 'react';
import backbtn from './backbtn-img.png';
import configbtn from './configbtn-img.png';
import micbtn from './micbtn-img.png';
import './NavBar.css';

const NavBar = () => (
  <div className="navbar">
    <img className="headerbtn" src={backbtn} alt="back-button" />
    <p className="title">FRANCE LIGUE 1</p>
    <img className="headerbtn" src={micbtn} alt="mic-button" />
    <img className="headerbtn" src={configbtn} alt="config-button" />
  </div>
);

export default NavBar;
