import style from './CycleButton.module.css';

export default ({content, onClick}) => {
  return (<button onClick={onClick}
    className={style.but}
  >{content}</button>);
};