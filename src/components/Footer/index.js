import React from 'react'
import githubImage from "../../assets/img/GitHub-Mark-64px.png"
import linkedinImage from "../../assets/img/linkedin.png"

function Footer() {

    return (
        <footer>
            <a href="https://github.com/akaser23">
                <img src={githubImage} alt="github-logo"/>
            </a>
            <a href="https://www.linkedin.com/in/anna-kaser-986970165/">
                <img src={linkedinImage} alt="linkedIn-logo"/>
            </a>
        </footer>
    )
}

export default Footer