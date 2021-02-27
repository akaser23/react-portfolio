import React from 'react';
import resume from "../../assets/docs/Anna_Kaser_Resume.pdf";
import resumeImg from '../../assets/img/Resume-img.jpg';

function Resume() {

    return (
        <section className="resume">
            <h1>
                <a className="resume-link" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </h1>
        
            <a href={resume} target="_blank" rel="noopener noreferrer">
                <img className="resume-img" src={resumeImg} alt="resume-img"></img>
            </a>
        </section>
    )

}

export default Resume;