import style from "./LoginForm.module.css";
import InputField from "../../../components/InputField/index.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../../../components/Button/index.js";
import authService from "../../../api/AuthService.js";

export default ({ showNotification, navigate }) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleEmailInput = (value) => {
    setLoginForm((prevState) => ({ ...prevState, email: value }));
  };

  const handlePasswordInput = (value) => {
    setLoginForm((prevState) => ({ ...prevState, password: value }));
  };

  const login = async () => {
    if (!loginForm.email) {
      showNotification("Email required");
      return;
    }

    if (!loginForm.password) {
      showNotification("Password required");
      return;
    }

    try {
      const data = await authService.login({
        email: loginForm.email,
        password: loginForm.password,
      });

      if (data?.access_token) {
        navigate("/");
      } else {
        showNotification("Invalid email or password");
      }
    } catch (e) {
      showNotification("Invalid email or password");
    }
  };

  return (
    <>
      <InputField
        inputValue={loginForm.email}
        onChange={handleEmailInput}
        label={"Email Address"}
        name={"email"}
        placeholder={"Enter your email"}
      />
      <InputField
        inputValue={loginForm.password}
        onChange={handlePasswordInput}
        label={"Password"}
        name={"password"}
        placeholder={"Enter your password"}
        isPassword={true}
      />
      <NavLink to={"/forgot_password"} className={style.forgot}>
        Forgot password?
      </NavLink>
      <Button
        content={"Sign In"}
        onClick={login}
        theme={"blue"}
        height={"3em"}
      />
    </>
  );
};
