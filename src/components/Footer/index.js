import React from 'react'
import githubImage from "../../assets/img/GitHub-Mark-64px.png"
import linkedinImage from "../../assets/img/linkedin.png"
import stackoverflowImage from "../../assets/img/stackoverflow.png"

function Footer() {

    return (
        <footer>
            <div className="social-links">
            <a href="https://github.com/akaser23" target="_blank" rel="noopener noreferrer">
                <img src={githubImage} alt="github-logo" />
            </a>
            <a href="https://www.linkedin.com/in/anna-kaser-986970165/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImage} alt="linkedIn-logo"/>
            </a>
            <a href="https://stackoverflow.com/users/13966532/akaser23?tab=profile" target="_blank" rel="noopener noreferrer">
                <img src={stackoverflowImage} alt="stackoverflow-logo"/>
            </a>
            </div>
        </footer>
    )
}

export default Footer