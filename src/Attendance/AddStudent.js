import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import history from "../history";
import "./Image.css";
export default class AddStudent extends Component {
  state = {
    name: "",
    roll: "",
  };
  add = (e) => {
    e.preventDefault();

    let Data = {
      Roll: this.state.roll,
      Name: this.state.name,
    };
    let url = "http://127.0.0.1:5000/add";
    axios
      .post(url, Data)
      .then((res) => {
        console.log(res);
        history.push("/getinfo");
      })
      .catch((err) => console.log(err));
  };
  render() {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
    return (
      <div
        style={{
          boxShadow: "2px solid black",
          height: "100vh",
        }}
        className="BgImage"
      >
        <NavBar />
        <Form
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
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
            <label>Name</label>
            <input
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Roll No</label>
            <input
              placeholder="Roll No"
              type="text"
              onChange={(e) => this.setState({ roll: e.target.value })}
            />
          </Form.Field>

          <Button type="submit" onClick={this.add} id="Btn">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
