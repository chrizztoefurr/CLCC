import React from 'react';

function NavBar() {

  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');
  
    toggleButton.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });
  });

  return (
    <div>
      <div className='navbar-container'>
        <h1 className='logo-img'>LOGO</h1>
          <nav className='navbar'>
          <div class="navbar-toggle">
            <span class="navbar-toggle-icon">&#9776;</span>
          </div>
            <ul className='navbar-list'>
              <li>ABOUT US</li>
              <li>SERVICES</li>
              <li>CONTACT US</li>
              <li>SHOP</li>
            </ul>
          </nav>
      </div>
    </div>
  )
};

export default NavBar;