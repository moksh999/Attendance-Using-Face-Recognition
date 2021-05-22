import React from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import history from "../history";
import "./Image.css";

class Attendance extends React.Component {
  state = {
    year: "",
    type: "",
    lec: "",

    branch: "",
  };

  postAttendance = (e) => {
    e.preventDefault();

    const data = {
      // fname: this.state.fname,
      // lname: this.state.lname,
      // token: localStorage.getItem("token"),
      year: this.state.year,
      // type: this.state.type,
      lec: this.state.lec.concat(this.state.type),

      // branch: this.state.branch,
    };

    axios
      .post("http://127.0.0.1:5000/info", data)
      .then((res) => {
        if (res.status === 200) {
          history.push("/image");
        }
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
          height: "115vh",
        }}
        className="BgImage"
      >
        <NavBar />
        <Form
          style={{
            position: "absolute",
            left: "50%",
            top: "60%",
            width: "60vh",
            transform: "translate(-50%,-50%)",
            border: "1px solid black",
            padding: "1em",
            borderRadius: "1em",
            boxShadow: "2px 2px 2px 2px black",
            backgroundColor: "white",
          }}
        >
          {/* <Form.Field>
            <label>First Name</label>
            <input
              placeholder="Enter Your First Name"
              type="text"
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Enter Last Name"
              type="text"
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
          </Form.Field> */}
          <Form.Field>
            <label>Select Year</label>
            <select onChange={(e) => this.setState({ year: e.target.value })}>
              <option value="" selected>
                Select a year
              </option>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select>
          </Form.Field>
          {/* <Form.Field>
            <label>Select Branch</label>
            <select onChange={(e) => this.setState({ branch: e.target.value })}>
              <option value="" selected>
                Select a branch
              </option>

              <option value="CMPN">CMPN</option>
              <option value="IT">IT</option>
              <option value="EXTC">EXTC</option>
              <option value="ETRX">ETRX</option>
            </select>
          </Form.Field> */}
          <Form.Field>
            <label>Select Lecture</label>
            <select onChange={(e) => this.setState({ lec: e.target.value })}>
              <option value="" selected>
                Select a specific lecture
              </option>
              <option value="WDL-">WDL</option>
              <option value="DBMS-">DBMS</option>
              <option value="AA-">AA</option>
              <option value="TCS-">TCS</option>
            </select>
          </Form.Field>

          <Form.Field>
            <label>Type</label>
            <select onChange={(e) => this.setState({ type: e.target.value })}>
              <option value="" selected>
                Select the type of lecture
              </option>
              <option value="T">Theory</option>
              <option value="P">Practical</option>
            </select>
          </Form.Field>

          <Button type="submit" onClick={this.postAttendance} id="Btn">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Attendance;
