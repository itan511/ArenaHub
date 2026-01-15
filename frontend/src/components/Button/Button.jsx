import style from "./Button.module.css";

export default ({
  onClick,
  content,
  type = "button",
  theme = "transparent",
  width = "100%",
  height = "2.2em",
  fontSize = "1em",
  padding = "0",
  disable = false,
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        padding: padding,
      }}
    >
      <button
        disabled={disable}
        type={type}
        className={`${style.button} ${style[theme]}`}
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  );
};
