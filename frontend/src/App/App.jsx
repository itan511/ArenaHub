import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import LoginForm from "../Pages/AuthPage/LoginForm/index.js";
import RegisterForm from "../Pages/AuthPage/RegisterForm/index.js";
import Notification from "../Notification/Notification.jsx";
import useNotification from "../hooks/useNotification.js";
import DashboardPage from "../Pages/DashboardPage/index.js";
import TournamentForm from "../Pages/TournamentForm/index.js";
import CreateTournament
  from "../Pages/TournamentForm/CreateTournament/index.js";
import IdTournament from "../Pages/TournamentForm/IdTournament/index.js";
import {useState} from "react";
import EditTournament from "../Pages/TournamentForm/EditTournament/index.js";

export default () => {
  const {notification, showNotification} = useNotification();
  const [user, setUser] = useState({email: "pupupupu"});
  const navigate = useNavigate();
  return (<>
    <Notification
      isVisible={notification.isVisible}
      context={notification.text}
    />
    <Routes>
      <Route
        path={"/auth/*"}
        element={<AuthPage navigate={navigate} />}
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
      <Route
        path={"*"}
        element={<Navigate
          to={"/dashboard"}
          replace
        />}
      />
      <Route
        path={"/dashboard"}
        element={<DashboardPage
          navigate={navigate}
          user={user}
        />}
      />
      <Route
        path={"/tournament/*"}
        element={<TournamentForm
          navigate={navigate}
          user={user}
        />}
      >
        <Route
          path={"create"}
          element={<CreateTournament navigate={navigate} />}
        />
        <Route
          path={":id"}
          element={<IdTournament navigate={navigate} />}
        />
        <Route
          path={"edit/:id"}
          element={<EditTournament navigate={navigate} />}
        />
      </Route>
    </Routes>
  </>);
};
