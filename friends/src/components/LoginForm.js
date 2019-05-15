import React from "react";

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

    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.updateField}
                    />
                    <input 
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

export default LoginForm;