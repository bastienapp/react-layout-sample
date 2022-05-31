import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/account/profile'>My account</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
