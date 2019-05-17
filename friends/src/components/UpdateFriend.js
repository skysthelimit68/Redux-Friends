import React from "react";
import FriendForm from "./FriendForm";
import { connect } from "react-redux"

class UpdateFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFriend: {}
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        console.log(id)
        const activeFriend = this.props.friends.find( friend => friend.id == id)
        console.log(activeFriend)
        if(id) {
            
            this.setState({
               activeFriend : activeFriend
           })
        }
    }

    render() {
        return(
            <div>
                <FriendForm activeFriend={this.state.activeFriend} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    friends : state.friends
})

export default connect ( mapStateToProps, {})(UpdateFriend);

