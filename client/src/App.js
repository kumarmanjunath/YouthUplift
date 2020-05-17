import React from "react";
import Nextpage from "./Nextpage";
// import MHome from "./mentors/MHome";
// import farm from "./CSS/farm.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "../src/App.css";
import "./mentors/MApp.css";
import "./CSS/App.css";
// import "./Signup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./Navbar";

import Homepage from "./Homepage";
// import AllM from "./mentors/Allm";
// import MHome from "./mentors/MHome";
// import AddItems from "./mentors/addItem";
// import showI from "./mentors/showI";

import Functions from "./mentors/Functions";

// import MainHome from "./admin/MainHome";

// import MainNavbar from "./admin/MainNavbar";
// import ShowDoctors from "./admin/ShowDoctors";
// import ShowPatients from "./admin/ShowPatients";
// import addDonors from "./admin/addDonors";
// import Category from "./admin/Category";
// import addUser from "./admin/AddUser";

import MFunctions from "./admin/MFunctions";

import UFunctions from "./student/UFunctions";

import Forgot from "./components/auth/Forgotpsswrd";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar></Navbar> */}
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/login/:type' component={Login} />
            {/* <Route path='/mlogin' component={MLogin} /> */}
            <Route path='/register/:role' component={Register} />

            {/* <Route exact path='/mhome' component={MHome} /> */}

            {/* <Route exact path={"/mhome"} component={MHome} />
            <Route path='/addItems' component={AddItems} />
            <Route path='/showi' component={showI} /> */}
            {/* <Route exact path={"/main/Home"} component={MainHome} /> */}
            {/* <Route exact path={"/main/add"} component={Register} /> */}

            {/* <Route path={"/main/ShowDoctors"} component={ShowDoctors} />
            <Route path={"/main/ShowPatients"} component={ShowPatients} />
            <Route path={"/main/category"} component={Category} />
            <Route path={"/main/addDoctor"} component={addDonors} />
            <Route path={"/main/addUser"} component={addUser} /> */}
            <Route path={"/main/"} component={MFunctions} />
            <Route role='user' path={"/user/"} component={UFunctions} />
            <Route role='mentor' path={"/mentor/"} component={Functions} />
            <Route path={"/resett"} component={Forgot} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
