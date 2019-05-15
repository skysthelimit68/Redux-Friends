import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import { Route, Link, Redirect } from "react-router-dom"

const PrivateRoute = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  return (
    <div className="App">

      <Link to="/friends-list">Friends List</Link>
      
      <Route path="/login" component={LoginForm} />
      <PrivateRoute path="/friends-list" component={FriendsList} />
    </div>
  );
}

export default App;
