import React, { useState } from 'react'
import Nav from '../Nav';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Header() {

    const [currentPage, handlePageChange] = useState('About Me');

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
        <header>
            <Nav classname="header" currentpage={currentPage} handlePageChange={handlePageChange}></Nav>
            <div className="page-content">{renderPage(currentPage)}</div>
        </header>
    )
}

export default Header