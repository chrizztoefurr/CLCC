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
    <>
      <nav className='navbar'>
        <p className='logo'>logo</p>
        <button class="menu-toggle" aria-label="Toggle menu">
          ☰
        </button>
        <ul className='nav-list'>
          <li>About us</li>
          <li>Services</li>
          <li>Contact us</li>
          <li>Shop</li>
        </ul>
      </nav>
    </>
  )
};

export default NavBar;