import React from 'react';
import headshot from "../../assets/img/headshot-sm.jpg";


function Nav(props) {

    const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <main>
            <header className="flex-row px-1">
                <h2 className="name">
                    <a href="/">
                        <img className="small-headshot" src={headshot} alt="Anna Kaser" />
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
        </main>
    );
}

export default Nav;