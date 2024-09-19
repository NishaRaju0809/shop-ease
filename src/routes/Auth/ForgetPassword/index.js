import React, { useState } from "react";

import { resetPassword } from "../../../utils/firebase";
import Input from "../../../components/Input";
import signupImage from "../../../assets/images/singup.png";
import "./styles.scss";
import Button from "../../../components/Button";

const defaultFormFields = {
  email: "",
};

export const ForgetPassword = () => {
  const [input, setInput] = useState(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await resetPassword(input.email);
      alert(
        "Password reset e-mail has been sent to your email. You will get the email if your account associated with us."
      );
      setInput({
        email: "",
      });
    } catch (error) {
      console.log("error.code:", error.code);
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
        <h1 className="create-account-heading">Forgot Password?</h1>
        <h4 className="create-account-subheading">Enter your email below</h4>

        <form onSubmit={handleSubmit}>
          <Input
            label={"Email Address"}
            type={"email"}
            name={"email"}
            onChange={handleChange}
            value={input.email}
          />
          <div>
            <Button width={"100%"} type={"submit"} onClick={handleSubmit}>
              Send Email
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
