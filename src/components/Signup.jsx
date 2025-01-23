import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import "../stylesheets/signup.css";
import { useDispatch } from 'react-redux';
import { signUpUser } from "../redux-toolkit/user.slice";


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const registerSubmit = async(e) => {
    e.preventDefault();

    let isAuthenticated = true
    let data = {name, email, isAuthenticated}

    dispatch(signUpUser(data));

    navigate("/user/todos");
    toast.success("Succssfully Signed Up. Welcome!");
  };

     
    return (
        <>
        <div id='signup-form-wrapper'>
                      
            <h1>SignUp Page</h1>
            <form
                id='signup-form'
                method='post'
                className="signUpForm"
                onSubmit={registerSubmit}
              >
                <div className="input">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete='true'
                  />
                </div>

                <div className="input">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='true'
                  />
                </div>

                <div className="input">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <input type="submit" value="Register" id="signup-btn" />
              </form>
       
          </div>
        </>
    )
}

export default Signup
