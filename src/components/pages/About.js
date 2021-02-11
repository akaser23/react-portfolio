import React from 'react';
import coverImage from "../../assets/img/headshot.jpg";

const About = () => (

    <section>
        <div className="flex-row">
            <img className="large-headshot" src={coverImage} alt="cover" />
            <h1 className="about-title" >About Me</h1>
        </div>
        <div>
            <p>
                Welcome to my site!
                <br />
                <br />
                    I pride myself in my ability to work well in a team, taking in all points of view to create the best product possible. I have been in many management and public-facing positions and am very comfortable communicating and working with people. I like staying organized and practicing good time management, not only for others sake, but for my own as well.
                <br />
                <br />
                    After graduating with a B.A. in English in 3 quick years at the University of Utah, I took on a job as a Marketing Assistant at Salt Lake City Weekly. In this position, I learned a lot about working well in stressful situations, running events for the public, and even did some content and article writing. After leaving my position at City Weekly, I took a job as a Technician at Pyromatrix Enterprises. This job has given me the attention to detail that I believe is useful in coding. In an effort to pursue more education, I enrolled in a coding bootcamp from The University of Utah. Over the past 6 months I have fell in love with a new way to express ideas and have learned so much about problem solving and my ability to work through issues.
                <br />
                <br />
                    Besides staying busy with coding, I enjoy all things outdoors. Living in Utah means that there are lots of options for outdoor fun, my favorites are skiing, camping, hiking and kayaking. I live in downtown SLC with my cat and love going to concerts and festivals in the city.
            </p>
        </div>
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
        </div>
    </section>
);

export default About;
