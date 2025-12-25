import {Route, Routes} from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import LoginForm from "../Pages/AuthPage/LoginForm/index.js";
import RegisterForm from "../Pages/AuthPage/RegisterForm/index.js";

export default () => {
  return (<Routes>
    <Route
      path={"/auth/*"}
      element={<AuthPage />}
    >
      <Route
        path="login"
        element={<LoginForm />}
      />
      <Route
        path="register"
        element={<RegisterForm />}
      />
    </Route>
  </Routes>);
};
