import React from "react";

const Friend = props => {
    return (
        <div>
            <h4>{props.friend.name}</h4>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button>Delete</button> <button>Update</button>
        </div>
    )
}

export default Friend;