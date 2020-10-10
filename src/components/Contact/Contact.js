import React from 'react'
import "./Contact.scss"
import {Paper, Button,FilledInput } from '@material-ui/core'

const FORM_KEY =process.env.REACT_APP_FORMSPREE_KEY;
const FORM_URL ="https://formspree.io/f/"; 
const FORM_FULL_URL = FORM_URL+FORM_KEY;

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div   className="contact">
        <Paper >
        <form
        onSubmit={this.submitForm}
        action={FORM_FULL_URL}
        method="POST"
      
      >
       { 
       //<!-- add your custom form HTML here -->
      }
      <h1>Say Hi!</h1>
      <div className="contact__row">

        <label>Email:</label>
        <input type="email" name="_replyto"/>
      </div>
      <label>Subject:</label>
      <input  name="_subject" value="New submission!" />
      <label>
    Your file:
    <FilledInput type="file" name="upload" className="contact__button-style"/>
  </label>
      <div className="contact__row">
      <label>Message:</label>
        <input type="text" name="message" />
      </div>

        {status === "SUCCESS" ? <p>Thanks for your message! I'll get back to you in 1-2 business days!</p> : <Button variant="contained" size="large" className="contact__button">Submit</Button>}
        {status === "ERROR" && <p>Ooops! There was an error. Please email eulabengco@gmail.com from your email host.</p>}
      </form>
     
        </Paper>
     </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        console.log(xhr.status, "hello")
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        console.log(xhr.status, "error")
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}