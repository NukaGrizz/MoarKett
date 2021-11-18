import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="containerLogin">
      <div className="loginCenter">
        <form onSubmit={handleFormSubmit} className="loginForm">
          <h2 className="loginText">MoarKett</h2>
          <p className="loginText">
            Get Moar for Less
          </p>
          <h3 className="loginText">Login</h3>
          <div className="flex-row space-between my-2 centerButton postPad">
            <label htmlFor="email">Email address:</label>
            <input 
              className="loginInput"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2 centerButton postPad">
            <label htmlFor="pwd">Password:</label>
            <input
              className="loginInput"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {
            error ? <div>
              <p className="error-text" >The provided credentials are incorrect</p>
            </div> : null
          }
          
                  <div className="g-recaptcha centerButton postPad" data-sitekey="6LdIWDwdAAAAABAIqNzg1tbJoRMzsPOR7wJfOCFg" data-callback="6LdIWDwdAAAAAOi-vJUnBGubDtIoVKHt50mMorTn"></div>
                  <div id="g-recaptcha-error" className="error-text"></div>
          
          <div className="flex-row centerButton postPad">
            <button type="submitButton" className="loginSubmitButton">
              Submit
            </button>
          </div>
          <div className="loginText postPad">
            <Link to="/signup" >
            Not a user? Click Here To Signup
            </Link>
          </div>
        </form>
        
      </div>
    </div>
  );
}


export default Login;
