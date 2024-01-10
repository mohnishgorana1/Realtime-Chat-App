import { Route, Routes, redirect, Navigate } from "react-router-dom";
import Dashboard from "./modules/Dashboard/Dashboard";
import Form from "./modules/Form/Form";

const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || true;

  if (!isLoggedIn) {
    return <Navigate to={"/user/sign_in"} />;
  } else if (
    isLoggedIn &&
    ["/user/sign_in", "/user/sign_up"].includes(window.location.pathname)
  ) {
    console.log("object :>> ");
    return <Navigate to={"/"} />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/user/sign_in"
        element={
          <ProtectedRoutes>
            <Form isSignInPage={true} />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/user/sign_up"
        element={
          <ProtectedRoutes>
            <Form isSignInPage={false} />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
