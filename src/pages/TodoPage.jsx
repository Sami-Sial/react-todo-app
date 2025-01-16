import React, { useEffect } from 'react';
import "../styles/todopage.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Weather from '../components/weather/Weather';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const TodoPage = () => {
  const { user } = useSelector(state => state.user);
  

  return (
    <>
      {user && user.isAuthenticated ?
        <div>
          <Navbar />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div id='sidebar-component'><Sidebar /></div>
            
            <div id='main-component'><Main /></div>
            
            <div id='weather-component'><Weather /></div>
          </div>
        </div>
        :
        <Navigate to={"/"}/>
      }
    </>
  )
}


export default TodoPage
