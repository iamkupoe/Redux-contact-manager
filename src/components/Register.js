import React from 'react';
import { connect } from 'react-redux';
import { registerWithEmail, loginWithGoogle } from '../store/authActions';

function Register(props) {
    if (!props.auth.isLoaded) return null;

    if (props.auth.uid) props.history.push('/');
    const handleSubmit = (e) => {
       e.preventDefault()
       let email = e.target.elements.email.value;
       let password = e.target.elements.password.value;
        props.registerWithEmail(email, password);
    }
    
    return (
        <div>
            <h3 id="reg">Register Now</h3>

            <form id="form" onSubmit={handleSubmit}>
              <div>
               <label id="label-email" >Email:</label>
                <input name="email" type="email" placeholder="Email" id="email" />
              </div>

              <div>
              <label id="label-email" >Email:</label>
               <input name="password" type="password" placeholder="Password" id="email" />
             </div>
             <hr id="divide"/>
               <button type="submit" id="button-end" >Register</button>

               <hr id="vide" />

            <button id="google-button"  onClick={props.loginWithGoogle}>
            <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2014/09/google-logo-760x380.png" alt="google button" id="google-submit" height="25rem" />
            </button>

            </form>
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
};

const mapDispatchToProps = {
    registerWithEmail,
    loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

