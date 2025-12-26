import style from './InputField.module.css';
import {IoEye} from "react-icons/io5";
import {IoEyeOff} from "react-icons/io5";
import {useState} from "react";

export default ({
                  name,
                  label,
                  isPassword,
                  inputValue: value,
                  placeholder,
                  onChange,
                  width = "100%",
                  height = "2.5em",
                }) => {
  const [isVisible, setVisible] = useState(false);
  const RenderIcon = isVisible ? IoEye : IoEyeOff


  return (<div
    className={style.field}
    style={{width, height}}
  >
    {label && <label
      htmlFor={name}
      className={style.label}
    >{label}
    </label>}
    <div className={style.area}>
      <input
        type={(isPassword && !isVisible) ? "password" : "text"}
        name={name}
        className={style.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {isPassword && <RenderIcon
        className={style.icon}
        onClick={() => setVisible(prev => !prev)}
      />}
    </div>
  </div>);
};