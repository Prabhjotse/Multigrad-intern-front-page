import React from "react";
import "../Style/Header.css";
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className="container">
      <div className="container-box">

        <img className="container-image" src="" alt="" />

        <div className="heading">
          <h1 className="container-heading">Bundelkhand Jhansi</h1>
          <h3 className="container-heading-one">Jhansi, Uttar Pradesh </h3>
        </div>

        <div className="button">                          
          <Button className="button-one" variant="outlined">Message</Button>
          <Button className="button-two"  variant="contained">Admission</Button>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
