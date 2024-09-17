import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  createAuthUserWithEmail,
  createUserDoc,
  googleSignin,
  loginAuthUserWithEmail,
} from "../../../utils/firebase";
import Input from "../../../components/Input";
import signupImage from "../../../assets/images/singup.png";
import "./styles.scss";
import Button from "../../../components/Button";

const defaultFormFields = {
  email: "",
  password: "",
};

export const Login = () => {
  const [input, setInput] = useState(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginAuthUserWithEmail(input);
      alert("Login successfull!");
      setInput({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log('error.code:', error.code)
      if (error.code === "auth/invalid-credential") {
        alert("Invalid credentials!");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="signup-container">
      <img src={signupImage} arc="image" />
      <div className="form-container">
        <h1 className="create-account-heading">Log in to Shop Ease</h1>
        <h4 className="create-account-subheading">Enter your details below</h4>

        <form onSubmit={handleSubmit}>
          <Input
            label={"Email or Phone Number"}
            type={"email"}
            name={"email"}
            onChange={handleChange}
            value={input.email}
          />
          <Input
            label={"Password"}
            type={"password"}
            name={"password"}
            onChange={handleChange}
            value={input.password}
          />
          <div className="buttons-container">
            <Button type={"submit"} onClick={handleSubmit}>
              Create Account
            </Button>
            <Link className="forget-password">Forget Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
