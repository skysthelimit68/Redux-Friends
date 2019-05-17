import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import { Route, Link } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import AddFriend from "./components/AddFriend";
import UpdateFriend from "./components/UpdateFriend";

/*
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
);*/

function App() {

  return (
    <div className="App">

      <Link to="/friends-list">Friends List</Link>
      <Link to="/addFriend">Add New Friend</Link>
      
      <Route path="/login" component={LoginForm} />
      <PrivateRoute path="/friends-list" component={FriendsList} />
      <PrivateRoute path="/addFriend" component={AddFriend} />
      <PrivateRoute path="/updateFriend/:id" component={UpdateFriend}/>

    </div>
  );
}

export default App;
