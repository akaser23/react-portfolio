import React from 'react';
import githubRed from "../../assets/img/github-red.png";
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/Card';
import MoodImg from '../../assets/img/Mood Music _ The Weather Based Mood Selector.gif';
import DinoImg from '../../assets/img/Dinostore.gif';
import HolidayImg from '../../assets/img/holiday-planner-screen.png';
import BudgetImg from '../../assets/img/budget-tracker.jpg';
import BuddyImg from '../../assets/img/Run Buddy.gif';
import PizzaImg from '../../assets/img/Pizza-Hunt.gif';

function Project() {
    return (
        <div className="flex-row">
            <div>
                <Card style={{ width: '23rem', border: '5px solid #702632', margin: '20px' }}>
                    <Card.Img variant="top" src={MoodImg} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center', fontWeight: '700', fontSize: '1.5rem' }}>Mood Music</Card.Title>
                        <Card.Text>Web API application that provides the user a playlist and drink recipe depending on the weather.</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" >
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>Javascript</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>Web API</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>HTML, CSS</ListGroupItem>
                    </ListGroup>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Link href="https://akaser23.github.io/music-mood/" target="_blank" rel="noopener noreferrer" style={{ color: '#702632'}}>Visit Site</Card.Link>
                        <Card.Link href="https://github.com/akaser23/music-mood" target="_blank" rel="noopener noreferrer">
                            <img className="github-red" src={githubRed} alt="github logo red" />
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '23rem', border: '5px solid #702632', margin: '20px' }}>
                    <Card.Img variant="top" src={DinoImg} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center', fontWeight: '700', fontSize: '1.5rem' }}>Dino Store</Card.Title>
                        <Card.Text>
                            Full-Stack e-commerce application built in React with advanced CSS.
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>React</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>HTML, CSS, Javascript</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>MongoDB</ListGroupItem>
                    </ListGroup>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Link href="https://ancient-lake-97986.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#702632'}}>Visit Site</Card.Link>
                        <Card.Link href="https://github.com/akaser23/dino-store" target="_blank" rel="noopener noreferrer">
                            <img className="github-red" src={githubRed} alt="github logo red" />
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '23rem', border: '5px solid #702632', margin: '20px' }}>
                    <Card.Img variant="top" src={HolidayImg} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center', fontWeight: '700', fontSize: '1.5rem' }}>Holiday Planner</Card.Title>
                        <Card.Text>Full-Stack application that helps in planning for the holidays.</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>HTML, CSS, Handlebars.js</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>JQuery, Express.js</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>mySQL, Seqeulize</ListGroupItem>
                    </ListGroup>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Link href="https://desolate-inlet-16467.herokuapp.com/login" target="_blank" rel="noopener noreferrer" style={{ color: '#702632'}}>Visit Site</Card.Link>
                        <Card.Link href="https://github.com/akaser23/holiday-planner" target="_blank" rel="noopener noreferrer">
                            <img className="github-red" src={githubRed} alt="github logo red" />
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '23rem', border: '5px solid #702632', margin: '20px' }}>
                    <Card.Img variant="top" src={BudgetImg} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center', fontWeight: '700', fontSize: '1.5rem' }}>Budget Tracker</Card.Title>
                        <Card.Text>Application that helps to plan expenses and saves all data even when you are offline. </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>HTML, CSS</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>Javascript, Express.js</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>MongoDB, Mongoose</ListGroupItem>
                    </ListGroup>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Link href="https://damp-reaches-34129.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#702632'}}>Visit Site</Card.Link>
                        <Card.Link href="https://github.com/akaser23/budget-tracker" target="_blank" rel="noopener noreferrer">
                            <img className="github-red" src={githubRed} alt="github logo red" />
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '23rem', border: '5px solid #702632', margin: '20px' }}>
                    <Card.Img variant="top" src={PizzaImg} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center', fontWeight: '700', fontSize: '1.5rem' }}>Pizza Hunt</Card.Title>
                        <Card.Text>
                            The user can create a login, create a pizza to save to the page and leave comments on other pizzas. 
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>HTML, CSS</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>Javascript, Express.js</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>MongoDB, Mongoose</ListGroupItem>
                    </ListGroup>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Link href="https://whispering-hollows-55929.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#702632'}}>Visit Site</Card.Link>
                        <Card.Link href="https://github.com/akaser23/pizza-hunt" target="_blank" rel="noopener noreferrer">
                            <img className="github-red" src={githubRed} alt="github logo red" />
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '23rem', border: '5px solid #702632', margin: '20px' }}>
                    <Card.Img variant="top" src={BuddyImg} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center', fontWeight: '700', fontSize: '1.5rem' }}>Run Buddy</Card.Title>
                        <Card.Text>
                            This site displays information about the buisness "Run Buddy" using HTML and CSS.
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>HTML</ListGroupItem>
                        <ListGroupItem style={{ margin: '3px', textAlign: 'center', border: '2px solid #702632' }}>CSS</ListGroupItem>
                    </ListGroup>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Link href="https://akaser23.github.io/run-buddy/" target="_blank" rel="noopener noreferrer" style={{ color: '#702632'}}>Visit Site</Card.Link>
                        <Card.Link href="https://github.com/akaser23/run-buddy" target="_blank" rel="noopener noreferrer">
                            <img className="github-red" src={githubRed} alt="github logo red" />
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>

            {/* <div title="Mood-Music-Gif" className="img-thumbnail-1 mx-1">
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
            </div> */}
        </div>
    )
}


export default Project;