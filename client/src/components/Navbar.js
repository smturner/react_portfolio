import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

const styles ={
  nav: {
    // backgroundColor: "green",
    justifyContent:'flex-end'
  },
  toggle: {
    color: "#e7f2df"
  }
}

function Navbar( { currentPage, handlePageChange}) {
  return (
<nav class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    <a class=" navbar-brand " id="name" href="#">Sarah Turner</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"  id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="navLinks" >
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#about" onCllick={() => handlePageChange('About')}>About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " >Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  );
  }

export default Navbar;
