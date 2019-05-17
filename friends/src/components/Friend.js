import React from "react";
import PrivateRoute from "../PrivateRoute";
import UpdateFriend from "./UpdateFriend";
import { Link } from "react-router-dom";
import { deleteFriend } from "../actions";
import { connect } from "react-redux"

const Friend = props => {
    
    const deleteFriend = event => {
        event.preventDefault();
        console.log(props)
        props.deleteFriend(props.friend.id)
        window.location.reload(); 
    }

    return (
        <div>
            <h4>{props.friend.name}</h4>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button onClick={deleteFriend}>Delete</button> 
            <Link to={`/updateFriend/${props.friend.id}`} {...props}>
                <button>Update</button>
                </Link>
            
           


        </div>
    )
}



export default connect( null, { deleteFriend }) (Friend);