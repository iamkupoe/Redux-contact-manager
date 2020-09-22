import React, { Component } from "react";
import { connect } from "react-redux";
import { editContact } from "../store/contactsActions";

export class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contact.name,
      email: props.contact.email,
      number: props.contact.number
    };
    this.id = props.match.params.id;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number
    };
    this.props.editContact(this.id, updatedInfo);
    this.setState({
      name: "",
      email: "",
      number: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="App contact-form"
        style={{
          marginTop: "15px",
          backgroundColor: "#57759b",
          width: "300px",
          height: "85vh",
          marginLeft: "20rem",
          paddingLeft: "40px",
          paddingTop: "20px",
          fontSize: "15px",
          color: "white",
          borderRadius: "0.5rem"
        }}
      >
        <label htmlFor="" style={{ fontSize: "18px" }}>
          Name:
        </label>
        <input
          type="text" name="name"
          placeholder=""
          value={this.state.name}
          onChange={this.handleChange}
          style={{ width: "200px", height: "30px", borderRadius: "4px" }}
        />
        <br />
        <br />
        <label htmlFor="" style={{ fontSize: "18px" }}>
          Email:
        </label>
        <input
          type="email" name="email"
          placeholder=""
          value={this.state.email}
          onChange={this.handleChange}
          style={{ width: "200px", height: "30px", borderRadius: "4px" }}
        />
        <br />
        <br />
        <label htmlFor="" style={{ fontSize: "18px" }}>
          Number:
        </label>
        <input
          type="number" name="number"
          placeholder=""
          value={this.state.number}
          onChange={this.handleChange}
          style={{ width: "200px", height: "30px", borderRadius: "4px" }}
        />
        <br />
        <br />
        <div>
          <button
            type="SUBMIT"
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "0.5rem",
              width: "10rem",
              marginLeft: "1.2rem"

            }}
          >
            Update Contact
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  contact: state.contacts.find((contact) => contact.id === ownProps.match.params.id),
});

const mapDispatchToProps = {
  editContact: editContact
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
