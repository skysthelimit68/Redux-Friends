import React from "react";
import Friend from "./Friend";
import { connect } from "react-redux";
import { getFriends } from "../actions";

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        console.log(this.props.friends)
        return(
            <div>
                {this.props.friends.map(friend => <Friend friend={friend} />) }               
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends : state.friends, 
    token : state.token
})
    


export default connect ( 
    mapStateToProps, 
    { getFriends })(FriendsList);