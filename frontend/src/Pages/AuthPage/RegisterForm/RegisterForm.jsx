import InputField from "../../../components/InputField/index.js";
import {useState} from "react";
import Button from "../../../components/Button/index.js";
import authService from "../../../api/AuthService.js";

export default ({showNotification, navigate}) => {
  const [registerForm, setRegisterForm] = useState({
    email: "", password1: "", password2: ""
  })

  const handleEmailInput = (value) => {
    setRegisterForm(prevState => ({...prevState, email: value}));
  }

  const handlePassword1Input = (value) => {
    setRegisterForm(prevState => ({...prevState, password1: value}));
  }

  const handlePassword2Input = (value) => {
    setRegisterForm(prevState => ({...prevState, password2: value}));
  }


  const register = async () => {
    if (registerForm.email) {
      if (registerForm.password1 || registerForm.password2) {
        if (registerForm.password1 === registerForm.password2) {
          await authService.register({
            email: registerForm.email, password: registerForm.password2
          }).then((r) => r ? navigate("/login") : showNotification("Account with this email already exists"));
        } else {
          showNotification("Passwords don't match")
        }
      } else {
        showNotification("Password required");
      }
    } else {
      showNotification("Email required");
    }
  }

  return (<>
    <InputField
      inputValue={registerForm.email}
      onChange={handleEmailInput}
      label={"Email Address"}
      name={"email"}
      placeholder={"Enter your email"}
    />
    <InputField
      inputValue={registerForm.password1}
      onChange={handlePassword1Input}
      label={"Password"}
      name={"password"}
      placeholder={"Enter your password"}
      isPassword={true}
    />
    <InputField
      inputValue={registerForm.password2}
      onChange={handlePassword2Input}
      label={"Repeat password"}
      name={"password"}
      placeholder={"Repeat your password"}
      isPassword={true}
    />
    <Button
      content={"Sign Up"}
      onClick={register}
      theme={"blue"}
      height={"3em"}
    />
  </>);
};