import React from "react";
import Friend from "./Friend";
import { connect } from "react-redux";
import { getFriends} from "../actions";
import Loader from 'react-loader-spinner'

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends : []
        }
    }

    

    componentDidMount() {
        this.props.getFriends();
        this.setState({
            friends : this.props.friends
        })
    }

    componentDidUpdate() {
        if(this.props.friends !== this.state.friends)
        this.setState({
            friends : this.props.friends
        })
        
    }

    
    render() {
        return(
            
            <div>
            {this.props.retrivingFriends && (
                <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
            )}

                {this.props.friends.map(friend => <Friend friend={friend} {...this.props}/>) }               
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends : state.friends, 
    token : state.token,
    retrivingFriends : state.retrivingFriends
    
})
    

export default connect ( 
    mapStateToProps, 
    { getFriends })(FriendsList);