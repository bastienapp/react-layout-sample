import React from "react";
import { Link } from "react-router-dom";

function AccountNav() {
  return (
    <aside className='AccountNav'>
      <ul>
        <li>
          <Link to='/account'>My profile</Link>
        </li>
        <li>
          <Link to='/account/orders'>My orders</Link>
        </li>
      </ul>
    </aside>
  );
}

export default AccountNav;
