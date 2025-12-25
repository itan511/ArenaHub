import style from './Button.module.css';

const Button = ({
                  onClick,
                  content,
                  type = "button",
                  theme = "transparent",
                  width = "100%",
                  height = "2.2em",
                  fontSize = "1em",
                  padding = "0"
                }) => {
  return (<div
    style={{
      width, height, fontSize, padding
    }}
  >
    < button
      type={type}
      className={`${style.button} ${style[theme]}`}
      onClick={onClick}
    >
      {content}
    </button>
  </div>);
};

export default Button;