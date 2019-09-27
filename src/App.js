import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import loginUser from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Navigation from "./components/Navigation";
import SearchPage from "./components/SearchPage";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import PrivateRoute from "./components/PrivateRoute";
import Reviews from "./components/Reviews";
import SideMap from "./components/Map";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={SideMap}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={loginUser} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/reviews" component={Reviews} />
        <PrivateRoute path="/stylist/profile" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
