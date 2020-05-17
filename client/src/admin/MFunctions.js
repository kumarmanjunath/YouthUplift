import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import ShowMentors from "./ShowDoctors";
import ShowStudents from "./ShowPatients";
import addDonors from "./addDonors";
import Category from "./Category";
import addUser from "./AddUser";
import addmentordetail from "../admin/addmentordetail";
import showallmentordetail from "../admin/showallmentordetail";

function App() {
  return (
    <Router>
      <div className=''>
        <MainNavbar />

        <Switch>
          <Route exact path={"/main/Home"} component={MainHome} />

          <Route path={"/main/ShowTutors"} component={ShowMentors} />
          <Route path={"/main/ShowStudents"} component={ShowStudents} />
          <Route path={"/main/category"} component={Category} />
          <Route path={"/main/addTutors"} component={addDonors} />
          <Route path={"/main/addUser"} component={addUser} />
          <Route path={"/main/addmentordetail"} component={addmentordetail} />
          <Route
            path={"/main/showallmentordetail"}
            component={showallmentordetail}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
