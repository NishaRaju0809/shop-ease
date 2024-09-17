import React, { useState } from "react";
import {
  createAuthUserWithEmail,
  createUserDoc,
  googleSignin,
} from "../../utils/firebase";
import Input from "../../components/Input";
import signupImage from "../../assets/images/singup.png";

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
        alert("Cannot create user.User already exists!");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <img src={signupImage} arc="image" />
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
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleSignup}>Sign in with google</button>
    </div>
  );
};

export default Signup;
