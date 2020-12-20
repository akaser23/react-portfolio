import React, {useState } from 'react';

function Body() {
    // const [currentPage, handlePageChange] = useState('About');

    return (
        <div>
            {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange}/> */}
            <div>{renderPage(currentPage)}</div>
        </div>
    );
}

export default Body;