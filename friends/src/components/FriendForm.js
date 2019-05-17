import React from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { addFriend, updateFriend} from "../actions";

class FriendForm extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email:"",
        }
    }

    updateField = event => {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleFormSubmit = event => {
        event.preventDefault();
        if(!this.props.activeFriend) {
            this.props.addFriend({name:this.state.name, age: this.state.age, email: this.state.email})
            .then(() => this.props.history.push('/friends-list'))
        } else {
            this.props.updateFriend({name:this.state.name, age: this.state.age, email: this.state.email})
            .then(() => this.props.history.push('/friends-list'))
        }   
        
    }

    render() {
        return(
            <Form onSubmit={this.handleFormSubmit}>
                 <FormGroup >
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="name" value={this.state.name} onChange={this.updateField}/>
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input type="number" name="age" id="age" placeholder="age" value={this.state.age} onChange={this.updateField}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="email" value={this.state.email} onChange={this.updateField}/>
                </FormGroup>
                <Button>{`${
            this.props.activeFriend ? 'Update' : 'Add New'
          } Friend`}</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    friends : state.friends
})

export default connect( mapStateToProps , { addFriend, updateFriend })(FriendForm);