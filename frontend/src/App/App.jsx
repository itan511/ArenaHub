import {Route, Routes} from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import LoginForm from "../Pages/AuthPage/LoginForm/index.js";
import RegisterForm from "../Pages/AuthPage/RegisterForm/index.js";
import Notification from "../Notification/Notification.jsx";
import useNotification from "../hooks/useNotification.js";

export default () => {
  const {notification, showNotification} = useNotification();
  return (<>
    <Notification
      isVisible={notification.isVisible}
      context={notification.text}
    />
    <Routes>

      <Route
        path={"/auth/*"}
        element={<AuthPage />}
      >
        <Route
          path="login"
          element={<LoginForm showNotification={showNotification} />}
        />
        <Route
          path="register"
          element={<RegisterForm showNotification={showNotification} />}
        />
      </Route>
    </Routes>
  </>);
};
