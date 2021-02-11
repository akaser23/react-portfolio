import React from 'react';
import resume from "../../assets/docs/Anna_Kaser_Resume.pdf";

function Resume() {

    return (
        <section className="resume">
            <h1>
                <a className="resume-link" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </h1>
        </section>
    )

}

export default Resume;