import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';

class LoginForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          name: '',
          password: '',
          error: '',
          navigate: null,
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }
  
    handleSubmit(event) {
        event.preventDefault();

        // When post request is sent to the create url, axios will add a new record(newperson) to the database.
        const loginAttempt = {
            name: this.state.name,
            password: this.state.password,
        };

        axios
        .post("http://localhost:8080/signup", loginAttempt)
        .then((res) => {
          var responseData = JSON.parse(res.data);
          if(responseData.error){
            this.setState({error:responseData.message});
          }else{
            localStorage.setItem("information", JSON.stringify({name: loginAttempt.name, loggedIn: true}));
            this.setState({navigate: "/"})
            window.location.replace("/");
          }
        });
        /*
        // We will empty the state after posting the data to the database
        this.setState({
        name: "",
        password: "",
        });*/
    }
  
    render() {
      if(localStorage.getItem("information"))
        window.location.replace("/");
      if (this.state.navigate) {
        return <Navigate to={this.state.navigate} />
      }
      return (
        <div class="mx-auto" style={{width: 60 +"%",marginTop: 50 + "px"}}>
          <form onSubmit={this.handleSubmit} >
          <div class="form-group">
            <label for="name">
              Name:
            </label>
              <input id="name" type="text" class="form-control" value={this.state.value} onChange={this.handleChange} />
            <br/>
            <label for="password">
              Password:
            </label>
              <input type="password" id="password" class="form-control" value={this.state.value} onChange={this.handleChange} />
            <br/>
            <button type="submit" class="btn btn-primary">
              Signup
            </button>
            </div>
          <div class="form-text text-danger">
            {this.state.error}
          </div>
          </form>
          </div>
      );
    }
  }

export default LoginForm;