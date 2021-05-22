import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./Registration/Registration";
import Login from "./Registration/Login";
import Feed from "./Feed";
import { HashRouter, Route } from "react-router-dom";
import Attendance from "./Attendance/Attendance";
import UploadImage from "./Attendance/UploadImage";
import GetInfo from "./Attendance/GetInfo";
import AddStudent from "./Attendance/AddStudent";
import Report from "./Attendance/Report";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename='/'>
      <div className="App">
        {/* <Route exact path="/" component={Feed} /> */}

        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/attendance" component={Attendance} />
        <Route exact path="/image" component={UploadImage} />
        <Route exact path="/getinfo" component={GetInfo} />
        <Route exact path="/add" component={AddStudent} />
        <Route exact path="/report" component={Report} />
      </div>
      </HashRouter>
    );
  }
}

export default App;
