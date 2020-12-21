import React from 'react';
import resume from "../../assets/docs/Anna_Kaser_-_Junior_Web_Developer.pdf";

function Resume() {

    return (
        <section className="content">
            <h1>
                <a className="resume-link" href={resume}>Resume</a>
            </h1>
            <h2>
                Skills and Proficiencies
        </h2>
            <div>
                <ul>
                    <li className="skill-list">
                        HTML and CSS
                    </li>
                    <li className="skill-list">
                        Javascript
                    </li>
                    <li className="skill-list">
                        Web API's
                    </li>
                    <li className="skill-list">
                        Server Side Api's
                    </li>
                    <li className="skill-list">
                        Node.js
                    </li>
                    <li className="skill-list">
                        Express.js
                    </li>
                    <li className="skill-list">
                        Bootstrap and other css frameworks
                    </li>
                    <li className="skill-list">
                        SQL (mySQL)
                    </li>
                    <li className="skill-list">
                        MongoDB
                    </li>
                    <li className="skill-list">
                        jQuery
                    </li>
                    <li className="skill-list">
                        NoSQL
                    </li>
                    <li className="skill-list">
                        React
                    </li>
                </ul>
                <p>
                    In addition to these skills, I pride myself in my ability to work well in a team, taking in all points of view to create the best product possible. I have been in many management and public-facing positions and am very comfortable communicating and working with people. I like staying organized and practicing good time management, not only for others sake, but for my own as well. 
            </p>
            </div>
        </section>
    )

}

export default Resume;