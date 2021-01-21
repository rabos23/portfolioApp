import React, { Component } from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      msg: "",
      disabled: false,
      emailSent: null,
    };
  }
  handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disabled: true,
      emailSent: false,
    });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="msg">Message</Form.Label>
              <Form.Control
                id="msg"
                name="msg"
                as="textarea"
                rows="10"
                value={this.state.msg}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>
            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline error-msg">Email Sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
