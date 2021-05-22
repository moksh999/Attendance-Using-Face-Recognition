import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import history from "../history";

const NavBar = () => {
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          backgroundColor: "black",
          color: "white",
          // height: "40%",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* <NavLink
          to="/"
          style={{
            textDecoration: "none",
            listStyle: "none",
            color: "white",
          }}
          activeStyle={{
            color: "orange",
          }}
        >
          <li>Home</li>
        </NavLink> */}
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
            activeStyle={{
              color: "orange",
            }}
          >
            <li>Login</li>
          </NavLink>
          <NavLink
            to="/register"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
            activeStyle={{
              color: "orange",
            }}
          >
            <li>Register</li>
          </NavLink>
          <NavLink
            to="/image"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
            activeStyle={{
              color: "orange",
            }}
          >
            <li>Upload Image</li>
          </NavLink>
          <NavLink
            to="/attendance"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
            activeStyle={{
              color: "orange",
            }}
          >
            <li>Take Attendance</li>
          </NavLink>
          <NavLink
            to="/getinfo"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
            activeStyle={{
              color: "orange",
            }}
          >
            <li>Get Information</li>
          </NavLink>
          <NavLink
            to="/report"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
            activeStyle={{
              color: "orange",
            }}
          >
            <li>Get Report</li>
          </NavLink>
          {localStorage.getItem("token") ? (
            <Button
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "white",
                backgroundColor: "black",
                border: "transparent",
              }}
              onClick={() => {
                if (localStorage.getItem("token")) {
                  localStorage.removeItem("token");
                }
                history.push("/");
              }}
            >
              <li>LogOut</li>
            </Button>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
