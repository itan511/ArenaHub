import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import LoginForm from "../Pages/AuthPage/LoginForm/index.js";
import RegisterForm from "../Pages/AuthPage/RegisterForm/index.js";
import Notification from "../Notification/Notification.jsx";
import useNotification from "../hooks/useNotification.js";

export default () => {
  const {notification, showNotification} = useNotification();
  const navigate = useNavigate();
  return (<>
    <Notification
      isVisible={notification.isVisible}
      context={notification.text}
    />
    <Routes>

      <Route
        path={"/auth/*"}
        element={<AuthPage navigate={navigate}/>}
      >
        <Route
          path={"login"}
          element={<LoginForm
            showNotification={showNotification}
            navigate={navigate}
          />}
        />
        <Route
          path={"register"}
          element={<RegisterForm
            showNotification={showNotification}
            navigate={navigate}
          />}
        />
        <Route
          path={"*"}
          element={<Navigate
            to={"/auth/login"}
            replace
          />}
        />
      </Route>
    </Routes>
  </>);
};
