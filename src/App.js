import React, { Component } from "react";
import { connect } from 'react-redux';
import  { addContact } from './store/contactsActions';
import { deleteContact } from './store/contactsActions';
import ContactInfo from "./components/ContactInfo";
import ContactForm from './components/ContactForm';
import Navbar from './components/layout/Navbar';
import "./App.css";



export class App extends Component {

  addNewContact = newContact => {
    console.log("from App", newContact)
    this.props.addContact(newContact)
  };
  deleteContact = contact_id => {
    this.props.deleteContact(contact_id);
  }

  render() {
    return (
      <div className="App" >
      <Navbar />

      <div className="form" style={{marginLeft:'15rem', float:'left'}}>
          {/* Form to add new contact */}
        <ContactForm addContact = {this.addNewContact} />
      </div>
        

        {/* List of contacts */}
        <div className="contact-info" style={{float: 'right', marginRight:'15rem'}}> 
         {this.props.contacts.map((item) => {
             return (
               <ContactInfo
               key={item.id}
               id={item.id}
               name={item.name}
               email={item.email}
               number={item.number}
               removeContact={this.deleteContact} />
              
             );
         })}
        </div>
      </div>
    );
  }
  }

  const mapStateToProps = (state) => ({
     contacts:state.contacts
  });

  const mapDispatchToProps = {
    addContact: addContact,
    deleteContact: deleteContact
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
