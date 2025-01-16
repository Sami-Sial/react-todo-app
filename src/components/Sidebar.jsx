import React from 'react';
import "../styles/sidebar.css";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import EventIcon from '@mui/icons-material/Event';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { Gauge } from '@mui/x-charts/Gauge';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


const Sidebar = () => {
  const [chartVal, setChartVal] = useState();
  const { todos } = useSelector(state => state.todos);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    console.log(todos.length);
    if (todos.length>=1) {
      let tasksDone = todos.filter((todo) => {
        return todo.isDone == true
      })
      
      let tasksDoneLength;
      if (tasksDone.length >= 1) {
        let num = tasksDone.length * 100 / todos.length;
        tasksDoneLength = num.toFixed(2); 
      } else {
        tasksDoneLength = 0
      }
  
      setChartVal(tasksDoneLength);
    }
  }, [todos, chartVal])
  

  return (
    <>
      <div id="sidebar-wrapper">
        <div id="sidebar">

          {/* <img src="../assets/react.svg" alt="" /> */}
          <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "18px", color: "#347136" }}>Hey, {user.name}</p>

          <div id='sidebar-middle'>
            <div>
              <SpeakerNotesIcon />
              <Link style={{color: "white", textDecoration: "none"}}>All Tasks</Link>
            </div>
      
            <div>
              <StarIcon />
              <Link style={{color: "white", textDecoration: "none"}}>Important Tasks</Link>
             </div>
          </div>

          <div id="todo-chart">
            <div>
              <p>Today Tasks</p>
              {/* <p>11</p> */}
            </div>

              <Gauge
                value={chartVal}
                startAngle={0}
                endAngle={360}
                innerRadius="80%"
                outerRadius="100%"
                height={150}
                width={150}
              />

              <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                  <span style={{width: "15px", height: "15px",border:"2px solid #1f1f1f",  backgroundColor: "#1f1f1f", borderRadius: "50%"}}></span>
                  <p>Pending</p>
                </div>

                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                  <span style={{width: "15px", height: "15px",border:"2px solid #1976d2",  backgroundColor: "#1976d2", borderRadius: "50%"}}></span>
                  <p>Done</p>
                </div>
             </div>
         

          </div>
         </div>
      </div>
    </>
  )
}

export default Sidebar
