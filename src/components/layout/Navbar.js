import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <div className="navbar bg-success">
            <h4>
               <i className={icon}/> {title}
            </h4>
            <div class="dropdown">
  <button class="dropbtn">All</button>
  <div class="dropdown-content">
    <li href="#">Contacts</li>
  </div>
</div>
      <ul>
        <li>
        <Link to='/'>Home</Link>
               </li>  
             </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact Manager',
    icon: 'fas fa-id-card-alt'
}
export default Navbar;