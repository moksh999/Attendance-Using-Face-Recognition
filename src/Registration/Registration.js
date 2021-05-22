import React from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import history from "../history";
import "./Image.css";

class Register extends React.Component {
  state = {
    fname: "",
    email: "",
    lname: "",
    password: "",
    cpassword: "",
    error: "",
  };

  post = () => {
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,

      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://127.0.0.1:5000/post", data)
      .then((res) => {
        if (res.status === 200) {
          history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div
        style={{
          height: "100vh",
        }}
        className="BgImage"
      >
        <NavBar />
        <br />
        <br />
        <br />
        <Form
          style={{
            position: "absolute",
            left: "50%",
            top: "55%",
            width: "60vh",
            transform: "translate(-50%,-50%)",
            border: "1px solid black",
            padding: "1em",
            borderRadius: "1em",
            boxShadow: "2px 2px 2px 2px black",
            backgroundColor: "white",
          }}
        >
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => this.setState({ cpassword: e.target.value })}
            />
          </Form.Field>
          {/* <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field> */}
          <Button type="submit" onClick={this.post} id="Btn">
            Submit
          </Button>
          <br />
          <span>
            <NavLink
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "black",
              }}
              to="/"
            >
              Already Have An Account? Login
            </NavLink>
          </span>
        </Form>
      </div>
    );
  }
}

export default Register;
