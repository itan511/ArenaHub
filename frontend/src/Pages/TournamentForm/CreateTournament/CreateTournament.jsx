import style from './CreateTournament.module.css';
import {useOutletContext} from "react-router-dom";
import {useState} from "react";
import CycleButton from "../../../components/CycleButton/index.js";
import {FaCheck} from "react-icons/fa6";
import InputField from "../../../components/InputField/index.js";
import Button from "../../../components/Button/index.js";

export default ({navigate}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [format, setFormat] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [prize, setPrize] = useState("");

  const handleName = (value) => {
    setName(value)
  }

  const handleDescription = (value) => {
    setDescription(value)
  }
  const handleFormat = (value) => {
    setFormat(value)
  }
  const handleStartDate = (value) => {
    setStartDate(value)
  }
  const handleEndDate = (value) => {
    setEndDate(value)
  }
  const handlePrize = (value) => {
    setPrize(value)
  }
  const createTournament = () => {

  }


  if (useOutletContext()?.slot1) {
    return <div className={style.description}>
      <InputField
        inputValue={description}
        name={"description"}
        label={"Tournament Description"}
        height={"7em"}
        placeholder={"Enter tournament description"}
        onChange={handleDescription}
      />
    </div>;
  }

  if (useOutletContext()?.slot2) {
    return <div className={style.characters}>
      <h3>Tournament Details</h3>
      <div className={style.character}>
        <span className={style.left}>Format</span>
        <InputField
          inputValue={format}
          onChange={handleFormat}
          width={"60%"}
          placeholder={"Enter format"}
        />
      </div>
      <div className={style.character}>
        <span className={style.left}>Start Date</span>
        <InputField
          inputValue={startDate}
          onChange={handleStartDate}
          width={"60%"}
          placeholder={"Enter start date"}
        />
      </div>
      <div className={style.character}>
        <span className={style.left}>End Date</span>
        <InputField
          inputValue={endDate}
          onChange={handleEndDate}
          placeholder={"Enter end date"}
          width={"60%"}

        />
      </div>
      <div className={style.character}>
        <span className={style.left}>prize pool</span>
        <InputField
          inputValue={prize}
          onChange={handlePrize}
          placeholder={"Enter prize"}
          width={"60%"}
        />
      </div>
    </div>;
  }
  return (<div className={style.name}>
    <CycleButton
      content={<FaCheck />}
      onClick={createTournament}
    />
    <Button
      content={"<"}
      width={"3em"}
      onClick={() => navigate("/dashboard")}
    />
    <InputField
      inputValue={name}
      onChange={handleName}
      placeholder={"Enter name"}
      width={"30%"}
    />
  </div>);
};