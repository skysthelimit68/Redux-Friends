import React from "react";
import { connect } from "react-redux";
import { login } from "../actions"

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state={
            username : "",
            password : ""
        }
    }

    updateField = event => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    submitForm = event => {
        event.preventDefault();
        this.props.login({username : this.state.username, password: this.state.password})
        this.setState({
            username : "",
            password: ""
        })
    }


    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.updateField}
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.updateField}
                    />
                    <button onClick={this.submitForm}></button>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    { login }
  )(LoginForm);