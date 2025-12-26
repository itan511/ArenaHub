import style from './Header.module.css';
import Logotype from "../Logotype/index.js";
import Button from "../Button/index.js";
import AuthService from "../../api/AuthService.js";
import {IoLogOut} from "react-icons/io5";

export default ({user, navigate}) => {
  return (<header className={style.header}>
    <div className={style.pathHeader}>
      <Logotype
        size={"3em"}
        radius={"0.75em"}
      />
      <h1 className={style.title}>ArenaHub</h1>
    </div>
    <div className={style.pathHeader}>
      {!!user ? (<>
        <h1 className={style.title}>{user.email}</h1>
        <Button
          theme={"blue"}
          width={"10em"}
          onClick={AuthService.logout}
          content={
            <span className={style.exit}><IoLogOut className={style.exitSVG} />Log out</span>}
        /></>) : (<><Button
        width={"7.5em"}
        content={"Sign Up"}
        onClick={() => navigate("/auth/register")}
      /><Button
        width={"7.5em"}
        content={"Sign in"}
        theme={"blue"}
        onClick={() => navigate("/auth/login")}
      /></>)}
    </div>
  </header>);
};