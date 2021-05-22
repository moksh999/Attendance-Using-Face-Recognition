import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import history from "../history";
import "./Image.css";
import { CSVLink, CSVDownload } from "react-csv";

export default class Report extends Component {
  state = {
    lec: "",
    sdate: "",
    edate: "",
    type: "",
    data: null,
  };
  report = (e) => {
    e.preventDefault();
    console.log(this.state.sdate);

    let Data = {
      lec: this.state.lec.concat(this.state.type),
      sdate: this.state.sdate,
      edate: this.state.edate,
    };
    let url = "http://127.0.0.1:5000/report";
    axios
      .post(url, Data)
      .then((res) => {
        console.log(res.data);
        let Data = [];
        console.log(typeof Data);
        Data = res.data.replace(/['"]+/g, "");
        console.log(Data);

        this.setState({ data: Data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    console.log(this.state.data);
    let span = null;
    if (!localStorage.getItem("token")) {
      history.push("/");
    }

    if (this.state.data !== null) {
      span = <CSVLink data={this.state.data}>Download me</CSVLink>;
    }
    return (
      <div
        style={{
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
            <label>Subject</label>
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
          <Form.Field>
            <label>Start Date</label>
            <input
              type="date"
              onChange={(e) => this.setState({ sdate: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>End Date</label>
            <input
              type="date"
              onChange={(e) => this.setState({ edate: e.target.value })}
            />
          </Form.Field>
          <Button type="submit" onClick={this.report} id="Btn">
            Submit
          </Button>
          <br />
          {span}
        </Form>
      </div>
    );
  }
}
