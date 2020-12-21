import React from 'react';
import githubRed from "../../assets/img/github-red.png"

function Project() {
    return (
        <div className="flex-row">
            <div title="Mood-Music-Gif" className="img-thumbnail-1 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://akaser23.github.io/music-mood/">
                        Mood Music
               </a>
                    <a href="https://github.com/akaser23/music-mood">
                        <img className="github-red" src={githubRed} alt="github logo red" />
                    </a>
                </div>

            </div>
            <div title="Holiday-Planner-Screen" className="img-thumbnail-2 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://desolate-inlet-16467.herokuapp.com/login">
                        Holiday Planner
                </a>
                    <a href="https://github.com/akaser23/holiday-planner">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
            <div title="Budget-Tracker-Screen" className="img-thumbnail-3 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://damp-reaches-34129.herokuapp.com/">
                        Budget Tracker
                </a>
                    <a href="https://github.com/akaser23/budget-tracker">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
            <div title="day-scheduler-gif" className="img-thumbnail-4 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://akaser23.github.io/work-day-scheduler/">
                        Day Planner
                </a>
                    <a href="https://github.com/akaser23/work-day-scheduler">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
            <div title="Run Buddy Gif" className="img-thumbnail-5 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://akaser23.github.io/run-buddy/">
                        Run Buddy
                </a>
                    <a href="https://github.com/akaser23/run-buddy">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
            <div title="Pizza Hunt Gif" className="img-thumbnail-6 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://whispering-hollows-55929.herokuapp.com/">
                        Pizza Hunt
                </a>
                    <a href="https://github.com/akaser23/pizza-hunt">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Project;