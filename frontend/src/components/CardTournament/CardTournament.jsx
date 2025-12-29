import style from './CardTournament.module.css';
import Button from "../Button/index.js";
import {RiDeleteBinFill} from "react-icons/ri";
import tournamentService from '../../api/TournamentService.js';

export default ({tournament, remove, navigate}) => {
  const removeTournament = async(id)=>{
    await tournamentService.delete(id);
  }
  return (<div className={style.card}>
    <h4 className={style.name}>{tournament.name}</h4>
    <h6 className={style.left}>{tournament.start_date} - {tournament.end_date}</h6>
    <div className={style.character}>
      <span className={style.left}>Format</span>
      <span>{tournament.format}</span>
    </div>
    <div className={style.character}>
      <span className={style.left}>Participants</span>
      <span>{tournament.participants}</span>
    </div>
    <div className={style.character}>
      <Button
        content={"View Details"}
        theme={"blue"}
        onClick={() => navigate(`/tournament/${tournament.id}`)}
      />
      <RiDeleteBinFill
        onClick={() => removeTournament(tournament.id)}
        className={style.delete}
      />
    </div>
  </div>);
};