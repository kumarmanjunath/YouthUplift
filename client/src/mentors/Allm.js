import React from "react";
import axios from "axios";
// import "../CSS/farm.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MHome from "./MHome";
// import fRegistration from "./Registration";
// import MNavbar from "./MNavbar";
import AddItems from "./addItem";
// import showI from "./showI";
import Navbar1 from "../Navbar1";
// import Prof from "./Prof";
// import editProf from "./editProf";
// import orders from "./orders";
import Footer from "./Footer";

class AllM extends React.Component {
  // state = {
  //   users: [],
  //   mentors: [],
  //   // category: [],
  // };

  // getCategory = async () => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const res = await axios.get(
  //       "http://localhost:5000/api/v1/category/",
  //       config
  //     );
  //     this.setState({
  //       category: res.data.data,
  //     });
  //   } catch (err) {
  //     console.log("Can't load the items");
  //   }
  // };

  // getmentors = async () => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const res = await axios.get(`/api/v1/mentors`, config);
  //     this.setState({
  //       mentors: res.data.data,
  //     });
  //   } catch (err) {
  //     // console.log("Can't load the items");
  //   }
  // };
  render() {
    return (
      <Router>
        <div className=''>
          <Navbar1></Navbar1>
          {/* <MNavbar /> */}
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

          <Switch>
            <Route exact path={"/mhome"} component={MHome} />
            {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}

            <Route path='/addItems' component={AddItems} />
            {/* <Route path={"/showI"} component={showI} /> */}
            {/* <Route path={"/vendor/Profile"} component={Prof} />
            <Route path={"/vendor/editProfile"} component={editProf} />
            <Route path={"/vendor/orders"} component={orders} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default AllM;
