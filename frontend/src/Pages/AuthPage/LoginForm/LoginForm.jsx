import style from './LoginForm.module.css';
import InputField from "../../../components/InputField/index.js";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import Button from "../../../components/Button/index.js";

export default () => {
  const [loginForm, setLoginForm] = useState({email: "", password: ""})

  const handleEmailInput = (value) => {
    setLoginForm(prevState => ({...prevState, email: value}));
  }

  const handlePasswordInput = (value) => {
    setLoginForm(prevState => ({...prevState, password: value}));
  }

  const login = () => {

  }

  return (<>
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
    />
    <NavLink
      to={"/forgot_password"}
      className={style.forgot}
    >Forgot password?</NavLink>
    <Button
      content={"Sign In"}
      onClick={login}
      theme={"blue"}
      height={"3em"}
    />
  </>);
};