import React, { useEffect } from 'react';
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
          <div style={{ display: "flex" }}>
            <div style={{ width: "15vw", minHeight: "calc(100vh - 60px)", backgroundColor: "#2c2c2c", color: "white" }}><Sidebar /></div>
            
            <div style={{ width: "60vw", minHeight: "calc(100vh - 60px)", backgroundColor: "#232323", color: "white" }}><Main /></div>
            
            <div style={{ width: "25vw", minHeight: "calc(100vh - 60px)", backgroundColor: "#2c2c2c", color: "white", paddingTop: "2rem" }}><Weather /></div>
          </div>
        </div>
        :
        <Navigate to={"/"}/>
      }
    </>
  )
}


export default TodoPage
