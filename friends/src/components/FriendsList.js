import React from "react";
import Friend from "./Friend";
import { connect } from "react-redux";

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                {this.props.friends.map(friend => <Friend friend={friend} />     
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends : state.friends
})
    


export default connect ( 
    mapStateToProps, 
    {})(FriendsList);