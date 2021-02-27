import React from 'react';
import githubRed from "../../assets/img/github-red.png";
// import Card from 'react-bootstrap/Button';
// import ListGroupItem from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/Button';

function Project() {
    return (
        <div className="flex-row">
            {/* <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div> */}

            <div title="Mood-Music-Gif" className="img-thumbnail-1 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://akaser23.github.io/music-mood/" target="_blank" rel="noopener noreferrer">
                        Mood Music
               </a>
                    <a href="https://github.com/akaser23/music-mood" target="_blank" rel="noopener noreferrer">
                        <img className="github-red" src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
            <div title="Holiday-Planner-Screen" className="img-thumbnail-2 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://desolate-inlet-16467.herokuapp.com/login" target="_blank" rel="noopener noreferrer">
                        Holiday Planner
                </a>
                    <a href="https://github.com/akaser23/holiday-planner" target="_blank" rel="noopener noreferrer">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
            <div title="Budget-Tracker-Screen" className="img-thumbnail-3 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://damp-reaches-34129.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        Budget Tracker
                </a>
                    <a href="https://github.com/akaser23/budget-tracker" target="_blank" rel="noopener noreferrer">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
            <div title="dinostore-gif" className="img-thumbnail-4 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://ancient-lake-97986.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        Dinostore
                </a>
                    <a href="https://github.com/akaser23/dino-store" target="_blank" rel="noopener noreferrer">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
            <div title="Run Buddy Gif" className="img-thumbnail-5 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://akaser23.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
                        Run Buddy
                </a>
                    <a href="https://github.com/akaser23/run-buddy" target="_blank" rel="noopener noreferrer">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
            <div title="Pizza Hunt Gif" className="img-thumbnail-6 mx-1">
                <div className="project-desc">
                    <a className="project-title" href="https://whispering-hollows-55929.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        Pizza Hunt
                </a>
                    <a href="https://github.com/akaser23/pizza-hunt" target="_blank" rel="noopener noreferrer">
                        <img src={githubRed} alt="github logo red" />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Project;