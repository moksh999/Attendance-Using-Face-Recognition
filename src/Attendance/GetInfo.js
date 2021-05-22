import React, { Component } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import history from "../history";

class GetInfo extends Component {
  state = {
    data: [],
  };
  showFrom = () => {
    history.push("/add");
  };
  getReport = () => {
    history.push("/report");
  };
  getInfo = () => {
    let url = "http://127.0.0.1:5000/getinfo";

    axios
      .get(url, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        let Data = [];
        console.log(res.data);
        for (let key in res.data.data) {
          Data.push({
            ...res.data.data[key],
          });
        }
        this.setState({ data: Data });
        // console.log(this.data);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    console.log("cid");
    this.getInfo();
  }

  Delete = (i) => {
    let data = [];
    data = Object.values(i);
    let Data = {
      Roll: data[0],
      Name: data[1],
    };
    let url = "http://127.0.0.1:5000/delete";
    axios
      .post(url, Data)
      .then((res) => {
        console.log(res);
        this.getInfo();
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
    let box = [];
    let smaller = null;
    let small = null;
    if (this.state.data !== []) {
      smaller = this.state.data.map((i) => {
        console.log("hello");
        box = Object.values(i);

        console.log(i);
        console.log(box);

        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              fontWeight: "500",
              margin: "0% 5% 0% 10%",
              fontSize: "1em",
            }}
          >
            <div
              style={{
                fontSize: "1.2em",
              }}
            >
              {box[0]}
            </div>
            <div
              style={{
                fontSize: "1.2em",
              }}
            >
              {box[1]}
            </div>
            <div>
              <button
                onClick={() => this.Delete(i)}
                style={{
                  // fontWeight: "500",
                  // margin: "0% 5% 0% 10%",
                  // fontSize: "1.5em",
                  backgroundColor: "black",
                  color: "white",
                  cursor: "pointer",
                  // fontSize: "20px",
                  borderRadius: "0.5em",
                  // width: "30%",
                  outline: "none",
                  alignSelf: "center",
                  // margin: "20px",
                  padding: "10px 13px",
                }}
              >
                Delete
              </button>
            </div>

            <br />
          </div>
        );
      });
    }
    if (!smaller.length > 0) {
      small = <h1 className="cart">No student found</h1>;
    }
    console.log(smaller);
    return (
      <div>
        <NavBar />
        <br />
        <br />
        {this.state.data !== [] ? (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                fontWeight: "500",
                margin: "0% 5% 0% 10%",
                fontSize: "1.5em",
              }}
              // id="cart-headings"
            >
              <div>Roll No</div>
              <div>Name</div>
              <div
                style={{
                  visibility: "hidden",
                }}
              >
                button
              </div>
            </div>
            <hr />
            <br />

            {smaller}
            {small}
            <br />
            <hr />
            <button
              style={{
                // fontWeight: "500",
                // margin: "0% 5% 0% 10%",
                // fontSize: "1.5em",
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
                // fontSize: "20px",
                borderRadius: "0.5em",
                // width: "30%",
                outline: "none",
                alignSelf: "center",
                margin: "20px",
                padding: "10px 13px",
              }}
              onClick={this.showFrom}
            >
              Add a student
            </button>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default GetInfo;
