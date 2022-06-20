import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import configbtn from './configbtn-img.png';
import micbtn from './micbtn-img.png';
import './styles/NavBar.css';

const NavBar = () => (
  <div className="navbar">
    <Link to="/"><div><AiOutlineLeft className="backbtn" /></div></Link>
    <p className="title">FRANCE LIGUE 1</p>
    <img className="headerbtn" src={micbtn} alt="mic-button" />
    <img className="headerbtn" src={configbtn} alt="config-button" />
  </div>
);

export default NavBar;
