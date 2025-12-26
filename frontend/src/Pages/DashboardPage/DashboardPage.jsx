import style from './DashboardPage.module.css';
import {useState} from "react";
import Header from "../../components/Header/index.js";
import SearchTitle from "./SearchTitle/index.js";
import CardTournament from "../../components/CardTournament/index.js";
import startTournaments from "../../data/tournaments.js";
import CycleButton from "../../components/CycleButton/index.js";

export default ({navigate, user}) => {
  const [search, setSearch] = useState("");
  const [tournaments, setTournaments] = useState(startTournaments);

  const handleSearch = (value) => {
    setSearch(value)
  }


  return (<div className={style.dashboard}>
    <CycleButton
      onClick={() => navigate("/tournament/create")}
      content={"+"}
    />
    <Header
      user={user}
      navigate={navigate}
    />
    <main className={style.main}>
      <SearchTitle
        search={search}
        onChange={handleSearch}
      />
      <div className={style.grid}>
        {tournaments.filter((el) => el.name.toLowerCase().includes(search.toLowerCase())).map((el) => (
          <CardTournament
            key={el.id}
            navigate={navigate}
            tournament={el}
          />))}
      </div>
    </main>
  </div>);
};