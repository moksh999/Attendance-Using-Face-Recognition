import React from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import history from "../history";
import image1 from "../Images/1.jpeg";
import "./Image.css";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: null,
  };

  login = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      history.push("/");
    } else {
      const data = {
        email: this.state.email,
        password: this.state.password,
      };

      axios
        .post("http://127.0.0.1:5000/login", data)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            history.push("/attendance");
          } else if (res.status === 404) {
            this.setState({ error: "Invalid email or password" });
          } else {
            this.setState({ error: "Email doesnt exists" });
          }
        })
        .catch((err) => {
          if (err.request.status === 404) {
            this.setState({ error: "Invalid email or password" });
          } else if (err.request.status === 400) {
            this.setState({ error: "Email doesnt exists" });
          }
        });
    }
  };
  render() {
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

          <Button type="submit" onClick={this.login} id="Btn">
            {localStorage.getItem("token") ? (
              <span>Logout</span>
            ) : (
              <span>Login</span>
            )}
          </Button>
          <br />
          {this.state.error !== null ? (
            <span
              style={{
                color: "red",
              }}
            >
              {this.state.error}
            </span>
          ) : null}
          <br />
          <span>
            <NavLink
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "black",
              }}
              to="/register"
            >
              Dont Have An Account? Sign In
            </NavLink>
          </span>
        </Form>
      </div>
    );
  }
}

export default Login;
