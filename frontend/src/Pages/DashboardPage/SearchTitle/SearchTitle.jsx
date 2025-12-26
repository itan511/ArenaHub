import style from './SearchTitle.module.css';
import InputField from "../../../components/InputField/index.js";


export default ({search, onChange}) => {
  return (<div className={style.titleSearch}>
    <div className={style.title}>
      <h3 className={style.h3}>Tournament Dashboard</h3>
      <h6 className={style.h6}>Manage and monitor all your tournaments in one place</h6>
    </div>
    <InputField
      width={"35%"}
      height={"1.5em"}
      inputValue={search}
      placeholder={"Search tournaments"}
      onChange={onChange}
    />
  </div>);
};