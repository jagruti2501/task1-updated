import React from 'react';


function Header() {
  return (
    <header>
      
      <div className="menu-button">
        <button className="hamburger">&#9776;</button>
      </div>
      <div className="buttons">
        <button className="link-button-solution">Solutions</button>
      </div>
      <div className="buttons">
        <button className="link-button-pricing">Pricing</button>
      </div>
      <div className="buttons">
        <button className="link-button-support">Support</button>
      </div>
      <div className="buttons">
        <button className="link-button-login">LogIn</button>
      </div>
      <div className="buttons">
        <button className="link-button-signup">SignUp</button>
      </div>
      
    </header>
  );
}

export default Header;