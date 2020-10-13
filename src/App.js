import React, { Component } from "react";
import { connect } from 'react-redux';
import  { addContact, getAllContacts } from './store/contactsActions';
import { deleteContact } from './store/contactsActions';
import { logOutUser } from './store/authActions';
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

  componentDidMount(){
    this.props.getAllContacts();
  }

  render() {
    return (
      <div className="App" >
      <Navbar />

      <div className="form" style={{marginLeft:'15rem', float:'left'}}>
          {/* Form to add new contact */}
        <ContactForm addContact = {this.addNewContact} />
        <button style={{width:"15rem", color:"white",marginTop:'0.5rem', marginLeft:'-10rem', backgroundColor:'blue', borderRadius:'0.5rem'}} onClick={this.props.logOutUser}>Logout</button>
      </div>
        

        {/* List of contacts */}
        <div className="contact-info" style={{float: 'right', marginRight:'3rem'}}> 
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

  const mapStateToProps = (state) => {
    console.log(state);
    return {
      contacts:state.contactsState.contacts
   };}

  const mapDispatchToProps = {
    addContact, 
    deleteContact, 
    getAllContacts,
    logOutUser
  } 


export default connect(mapStateToProps, mapDispatchToProps)(App);
