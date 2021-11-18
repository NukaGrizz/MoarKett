import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
          <h3 className="loginText">Signup</h3>
          <div className="flex-row space-between my-2 centerButton postPad">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="loginInput"
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2 centerButton postPad">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="loginInput"
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2 centerButton postPad">
            <label htmlFor="email">Email:</label>
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

            <div className="g-recaptcha centerButton postPad" data-sitekey="6LdIWDwdAAAAABAIqNzg1tbJoRMzsPOR7wJfOCFg" data-callback="6LdIWDwdAAAAAOi-vJUnBGubDtIoVKHt50mMorTn"></div>
            <div id="g-recaptcha-error" className="error-text"></div>

          <div className="flex-row centerButton postPad">
            <button type="submit" className="loginSubmitButton">
              Submit
            </button>
          </div>
          <div className="loginText postPad">
            <Link to="/login">
              Already a User? Click Here to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );

}

export default Signup;
