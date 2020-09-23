import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      type: "personal"
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("from ContactForm", this.state)

    const newContact = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      type: "personal"
    };
    this.props.addContact(newContact);
    this.setState({
      name: "",
      email: "",
      number: "",
      type: "personal"
    });
  };

  render() {
    return (
      <div className="text" style={{color:'white'}}>
        <h2 className="text-success">Contact Form</h2>
        <form
          onSubmit={this.handleSubmit}
          style={{
            marginTop: "15px",
            backgroundColor: "#57759b",
            width: "300px",
            height: "70vh",
            marginLeft: "0",
            paddingLeft: "40px",
            paddingTop: "20px",
            fontSize: "15px",
            borderRadius: "2rem",
          }}
        >
          <label htmlFor="" style={{ fontSize: "18px" }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder=""
            value={this.state.name}
            onChange={this.handleChange}
            style={{ width: "200px", height: "30px", borderRadius: "4px" }}
          />
          <br />
          <label htmlFor="" style={{ fontSize: "18px" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder=""
            value={this.state.email}
            onChange={this.handleChange}
            style={{ width: "200px", height: "30px", borderRadius: "4px" }}
          />
          <label htmlFor="" style={{ fontSize: "18px" }}>
            Number:
          </label>
          <input
            type="number"
            name="number"
            placeholder=""
            value={this.state.number}
            onChange={this.handleChange}
            style={{ width: "200px", height: "30px", borderRadius: "4px" }}
          />
          <br/>
          <button
            type="SUBMIT"
            style={{
              width: "12.5rem",
              color: "white",
              marginLeft: "0",
              height: "30px",
              backgroundColor: "blue",
              fontSize: "18px",
              borderRadius: "0.5rem",
            }}
          >
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
