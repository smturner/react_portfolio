import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Footer from './Footer'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
console.log(currentPage)

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Projects />;
    };

    const handlePageChange = (event) => {
        event.preventDefault();
        if(event && event.currentTarget) {
            setCurrentPage(event.currentTarget.id);
        }else {
            setCurrentPage('About');
        }
    } 

    return (
        <div>
            <Navbar currentPage= {currentPage} handlePageChange= {handlePageChange} />
            <main>
            {renderPage()}
            </main>
            <Footer />
            
        </div>
    )

}

