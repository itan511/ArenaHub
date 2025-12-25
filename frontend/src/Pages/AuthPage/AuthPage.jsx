import style from './AuthPage.module.css';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import Logotype from "../../components/Logotype/index.js";
import Button from "../../components/Button";
import {useState} from "react";


export default () => {
  const [switcher, setSwitcher] = useState("login")
  const navigate = useNavigate()

  const mySwitch = () => {
    if (switcher === "login") {
      setSwitcher("register");
      navigate("/auth/register");
    } else if (switcher === "register") {
      setSwitcher("login");
      navigate("/auth/login");
    }
  }

  return (<div className={style.authPage}>
    <form className={style.form}>
      <NavLink
        to={"/welcome"}
        className={style.logo}
      >
        <Logotype size={"4em"} />
        <h1 className={style.logoTitle}>ArenaHub</h1>
      </NavLink>
      <div className={style.switcher}>
        <Button
          disable={switcher === "login"}
          content={"Login"}
          width={"50%"}
          theme={switcher === "login" ? "white" : "transparent"}
          onClick={mySwitch}
        />
        <Button
          disable={switcher === "register"}
          content={"Register"}
          width={"50%"}
          theme={switcher === "register" ? "white" : "transparent"}
          onClick={mySwitch}
        />
      </div>
      <Outlet />
    </form>
  </div>);
};