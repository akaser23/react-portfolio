import React from 'react';

function Project() {
    return (
       <div className="flex-row">
           <img
           src={require("../../assets/img/Mood Music _ The Weather Based Mood Selector.gif").default}
           alt="Mood-Music-Gif"
           className="img-thumbnail mx-1"
           />
           <img
           src={require("../../assets/img/holiday-planner-screen.png").default}
           alt="Holiday-Planner-Screen"
           className="img-thumbnail mx-1"
           />
           <img
           src={require("../../assets/img/budget-tracker.jpg").default}
           alt="Budget-Tracker-Screen"
           className="img-thumbnail mx-1"
           />
           <img
           src={require("../../assets/img/day-scheduler.gif").default}
           alt="day-scheduler-gif"
           className="img-thumbnail mx-1"
           />
           <img
           src={require("../../assets/img/Run Buddy.gif").default}
           alt="Run Buddy Gif"
           className="img-thumbnail mx-1"
           />
           <img
           src={require("../../assets/img/Pizza-Hunt.gif").default}
           alt="Pizza Hunt Gif"
           className="img-thumbnail mx-1"
           />
       </div> 
    )
}


export default Project;