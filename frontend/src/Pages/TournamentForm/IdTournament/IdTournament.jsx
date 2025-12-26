import style from './IdTournament.module.css';
import {useOutletContext, useParams} from "react-router-dom";
import {useState} from "react";
import Button from "../../../components/Button/index.js";
import CycleButton from "../../../components/CycleButton/index.js";
import {MdEdit} from "react-icons/md";

export default ({navigate}) => {
  const {id} = useParams()
  const [tournament, setTournament] = useState({
    id: 10,
    name: "International Open",
    start_date: "2025-05-01",
    end_date: "2025-05-04",
    format: "Open Qualifier",
    participants: 512,
    description: " The Championship League 2024 is our premier annual tournament featuring the best players from\n" +
      "around the world. This single-elimination tournament will determine the ultimate champion through\n" +
      "intense matches and strategic gameplay.Prize pool of $50,000 with additional rewards for top performers. All matches will be streamed live\n" +
      "with professional commentary and analysis.",
    prize: 100,
  });


  if (useOutletContext()?.slot1) {
    return <div className={style.description}>
      <h3>Tournament Description</h3>
      <span>{tournament.description} </span>
    </div>;
  }

  if (useOutletContext()?.slot2) {
    return <div className={style.characters}>
      <h3>Tournament Details</h3>
      <div className={style.character}>
        <span className={style.left}>Format</span>
        <span>{tournament.format}</span>
      </div>
      <div className={style.character}>
        <span className={style.left}>Start Date</span>
        <span>{tournament.start_date}</span>
      </div>
      <div className={style.character}>
        <span className={style.left}>End Date</span>
        <span>{tournament.end_date}</span>
      </div>
      <div className={style.character}>
        <span className={style.left}>prize pool</span>
        <span>{tournament.prize}</span>
      </div>
    </div>;
  }
  return (<div className={style.name}>
    <CycleButton
      content={<MdEdit />}
      onClick={() => navigate(`/tournament/edit/${id}`)}
    />
    <Button
      content={"<"}
      width={"3em"}
      onClick={() => navigate("/dashboard")}
    />
    <h2>{tournament.name}</h2>
  </div>);
};