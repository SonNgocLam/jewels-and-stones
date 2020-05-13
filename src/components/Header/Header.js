import React from 'react';
import './Header.scss';
import images from "assets";

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <h1>
          <strong>Jewels and Stones</strong>
        </h1>
        <h3>
          This is my ReactJS Demonstration Project
        </h3>
      </div>
      <div className="headerRight">
        <img src={images.logo} alt="logo" />
        <div className="myInformation">
          <p><b>LÂM NGỌC SƠN</b></p>
          <p>Mobile: +84 37 467 7171</p>
          <p>Email: lamngocsontv@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
