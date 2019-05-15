import React from "react";

const Friend = props => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Friend;