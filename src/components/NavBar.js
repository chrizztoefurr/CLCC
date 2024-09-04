import React from 'react';

function NavBar() {

  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    toggleButton.addEventListener('click', function() {
      navList.classList.toggle('open');
    });
  });

  return (
    <div>
      <div className='navbar-container'>
        <h1 className='logo-img'>LOGO</h1>
          <nav className='navbar'>
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