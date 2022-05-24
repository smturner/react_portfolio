import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import './Navbar.css';
// import {Link} from "react-router-dom"

// const styles ={
//   nav: {
//     // backgroundColor: "green",
//     justifyContent:'flex-end'
//   },
//   toggle: {
//     color: "#e7f2df"
//   }
// }
function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg" id="navbarMain" >
            <div className="container-fluid">
                <a className=" navbar-brand " id="name" href="#">Sarah Turner</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">   
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navLinks" >
                    <li className="nav-item">
                        <a  href="#about" onClick={() => handlePageChange('About')} className = {currentPage === 'About' ? 'nav-link active' : 'nav-link'}> About Me</a>        
                         </li>
                    <li className="nav-item">
                        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className = {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#contact" onClick={() => handlePageChange('Contact')} className = {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} >Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#resume" onClick={() => handlePageChange('Resume')} className = {currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} >Resume</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
// function Navbar() {
//   return (
// <nav class="navbar navbar-expand-lg" >
//   <div class="container-fluid">
//     <a class=" navbar-brand " id="name" href="#">Sarah Turner</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse"  id="navbarTogglerDemo02">
//       <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="navLinks" >
//         <li class="nav-item">
//           <a class="nav-link " aria-current="page" href="/" >About Me</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link " href="/portfolio">Portfolio</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link " href="/contact" >Contact</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/resume">Resume</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

//   );
//   }

export default Navbar;