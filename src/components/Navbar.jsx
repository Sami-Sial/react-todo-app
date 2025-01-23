import React from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import "../stylesheets/navbar.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { logoutUser } from "../redux-toolkit/user.slice";
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(logoutUser());
    navigate("/");
    toast.success("Successfully Logged you out.");
  }

  return (
    <>
        <header>
          <div id="header-left">
              <span style={{color: "#347143", margin: "0 0px 0 20px"}}><FormatListBulletedIcon/></span>
              <h2 style={{ color: "#347143" }}>TodoApp</h2>
          </div>
          <div id='header-right'>
            <button style={{margin: '0px'}} onClick={clickHandler}>Logout</button>
          </div>
        </header>
    </>
  )
}

export default Navbar
