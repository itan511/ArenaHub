import style from './TournamentForm.module.css';
import Header from "../../components/Header/index.js";
import {Outlet} from "react-router-dom";

export default ({navigate, user}) => {
  return (<div className={style.tournament}>
    <Header
      navigate={navigate}
      user={user}
    />
    <main className={style.main}>
      <Outlet />
      <div className={style.gridOverview}>
        <Outlet context={{slot1: true}} />
        <Outlet context={{slot2: true}}/>
      </div>
    </main>
  </div>);
};