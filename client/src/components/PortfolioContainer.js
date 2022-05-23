import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

export default PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage= {currentPage} handlePageChange= {handlePageChange} />
            {renderPage()}
        </div>
    )

};

