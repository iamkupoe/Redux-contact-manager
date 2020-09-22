import React from "react";
import { Link } from 'react-router-dom';

const ContactInfo = ({name, email, number, id, removeContact}) => {
  const handleClick = () => {
    removeContact(id)
  }
    return (
      <div className="contacts">
      
        <h4>
        Name: {name}
        </h4>
        <p>
        Email: {email}
        </p>
        <p>
        Number: {number}
        </p>
        <hr className="hr"/>
        <button className='btn' onClick={handleClick} style={{backgroundColor:'skyBlue', color:'red', borderRadius:'1rem', height: '2.5rem'}}>DELETE</button>
        <Link to={`/edit/${id}`} style={{color:'blue', marginLeft: '3rem'}}>Edit Contact </Link> 
       
      </div>
    );
}

export default ContactInfo;
