import React from 'react';

function NavBar() {

  React.useEffect(() => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');

    const handleToggle = () => {
      navbar.classList.toggle('active');
    };

    if (toggleButton) {
      toggleButton.addEventListener('click', handleToggle);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener('click', handleToggle);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <div className='navbar-container'>
        <h1 className='logo-img'>LOGO</h1>
          <nav className='navbar'>
          <div class="navbar-toggle">
            <span class="navbar-toggle-icon">&#9776;</span>
          </div>
            <ul className='navbar-list'>
              <li><a href='#about'>ABOUT US</a></li>
              <li><a href='#services'>SERVICES</a></li>
              <li><a href='#form'>CONTACT US</a></li>
              <li><a href='#shop'>SHOP</a></li>
            </ul>
          </nav>
      </div>
    </div>
  )
};

export default NavBar;