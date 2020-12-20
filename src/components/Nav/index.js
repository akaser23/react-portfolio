import React, { useState } from 'react';
import headshot from "../../assets/img/headshot-sm.jpg";
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Nav(props) {

    const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <body>
            <header className="flex-row px-1">
                <h2 className="name">
                    <a href="/">
                        <img className="small-headshot" src={headshot} />
                    Anna Kaser
                    </a>
                </h2>
                <nav>
                    <ul className="nav nav-tabs flex-row">
                        {tabs.map(tab => (
                            <li className="nav-item mx-2" key={tab}>
                                <a
                                    href={'#' + tab.toLowerCase()}
                                    // Whenever a tab is clicked on,
                                    // the current page is set through the handlePageChange props.
                                    onClick={() => props.handlePageChange(tab)}
                                    className={
                                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                    }
                                >
                                    {tab}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <div>
                <div>{renderPage(currentPage)}</div>
            </div>
        </body>
    )
}

export default Nav;