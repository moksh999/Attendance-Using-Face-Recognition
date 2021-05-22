import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import history from "../history";
import "./Image.css";
import Spinner from "../Spinner/Spinner";

class UploadImage extends Component {
  state = {
    image1: null,
    image2: null,
    image3: null,
    form: 0,
    error: null,
  };
  postAttendance = (e) => {
    e.preventDefault();
    this.setState({ form: 1 });
    let form_data = new FormData();
    form_data.append("image1", this.state.image1);
    form_data.append("image2", this.state.image2);
    form_data.append("image3", this.state.image3);

    let url = "http://127.0.0.1:5000/attendance";

    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          history.push("/getinfo");
        }
      })
      .catch((err) => {
        this.setState({ error: 1 });
      });
  };
  render() {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
    if (this.state.error !== null) {
      history.push("/attendance");
    }
    return (
      <div
        style={{
          height: "115vh",
        }}
        className="BgImage"
      >
        <NavBar />
        {this.state.form === 0 ? (
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
            <Form.Field>
              <label>Upload Image1</label>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={(e) => this.setState({ image1: e.target.files[0] })}
              />
            </Form.Field>
            <Form.Field>
              <label>Upload Image2</label>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={(e) => this.setState({ image2: e.target.files[0] })}
              />
            </Form.Field>
            <Form.Field>
              <label>Upload Image3</label>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={(e) => this.setState({ image3: e.target.files[0] })}
              />
            </Form.Field>

            <Button type="submit" onClick={this.postAttendance} id="Btn">
              Submit
            </Button>
          </Form>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default UploadImage;
