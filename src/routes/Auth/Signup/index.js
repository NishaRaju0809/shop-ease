import React, { useState } from "react";

import {
  createAuthUserWithEmail,
  createUserDoc,
  googleSignin,
} from "../../../utils/firebase";
import Input from "../../../components/Input";
import signupImage from "../../../assets/images/singup.png";
import "./styles.scss";
import Button from "../../../components/Button";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/icGoogle.svg";
import { Link } from "react-router-dom";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Signup = () => {
  const [input, setInput] = useState(defaultFormFields);

  const handleSignup = async () => {
    try {
      const { user } = await googleSignin();
      await createUserDoc(user);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.password !== input.confirmPassword) {
      alert("Please enter valid password.");
      return;
    }
    try {
      await createAuthUserWithEmail(input);
      alert("Login successfull!");
      setInput({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user.User already exists!.If it's your email please login");
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
        <h1 className="create-account-heading">Create an account</h1>
        <h4 className="create-account-subheading">Enter your details below</h4>

        <form onSubmit={handleSubmit}>
          <Input
            label={"Name"}
            type={"name"}
            name={"name"}
            onChange={handleChange}
            value={input.name}
          />
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
          <Input
            label={"Confirm Password"}
            type={"password"}
            name={"confirmPassword"}
            onChange={handleChange}
            value={input.confirmPassword}
          />
          <Button width={"100%"} type={"button"} onClick={handleSignup}>
            Create Account
          </Button>
        </form>

        <Button
          width={"100%"}
          marginTop={20}
          type={"google-button"}
          Icon={GoogleIcon}
          variant="outlined"
          onClick={handleSignup}
        >
          Sign up with Google
        </Button>
        <h4 className="login-text">
          Already have an account?
          <Link to={"/login"} className="signin-button">
            Log in
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Signup;
