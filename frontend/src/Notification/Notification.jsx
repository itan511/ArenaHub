import style from "./Notification.module.css"

export default ({context, isVisible, }) => {
  return (
    <div
      className={`${style.notification} ${isVisible ? style.visibility : ""} ${style.right}`}
    >
      <p>{context}</p>
    </div>)
}