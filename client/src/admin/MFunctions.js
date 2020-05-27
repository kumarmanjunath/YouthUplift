import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import ShowMentors from "./ShowMentors";
import ShowStudents from "./ShowStudents";
import addMentors from "./addMentors";
import Category from "./Category";
import addUser from "./AddUser";
import addmentordetail from "../admin/addmentordetail";
import showallmentordetail from "../admin/showallmentordetail";
import review from "./showreview";

function App() {
  return (
    <Router>
      <div className=''>
        <MainNavbar />

        <Switch>
          <Route exact path={"/main/Home"} component={MainHome} />
          <Route path={"/main/review"} component={review} />
          <Route path={"/main/ShowTutors"} component={ShowMentors} />
          <Route path={"/main/ShowStudents"} component={ShowStudents} />
          <Route path={"/main/category"} component={Category} />
          <Route path={"/main/addTutors"} component={addMentors} />
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
