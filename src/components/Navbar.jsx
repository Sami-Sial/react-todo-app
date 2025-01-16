import React from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
        <header>
          <div id="header-left">
              <span style={{color: "#347143", margin: "0 0px 0 20px"}}><FormatListBulletedIcon/></span>
              <h2 style={{color: "#347143"}}>TodoApp</h2>
          </div>
        </header>
    </>
  )
}

export default Navbar
