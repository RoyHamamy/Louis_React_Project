import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import React, { useState } from "react";
import ConnectPage from "./pages/ConnectPage";
import DownbarLayout from "./components/layout/DownbarLayout";
import FitnessPage from "./pages/FitnessPage";
import CaloriesPage from "./pages/CaloriesPage";

function App() {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(token);

  const LoginHandler = (tokenId) => {
    setIsLoggedIn(tokenId);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(null);
  };

  return (
    <div className="background">
      <Switch>
        <Route path="/" exact>
          <Layout />
          <WelcomePage />
        </Route>
        <Route path="/connect">
          <Layout />
          <ConnectPage />
        </Route>
        <Route path="/login">
          <Layout text="welcome" />
          <LoginPage onLogin={LoginHandler} />
        </Route>
        <Route path="/register">
          <Layout text="welcome" />
          <RegisterPage onLogin={LoginHandler} />
        </Route>
        {isLoggedIn !== null && (
          <React.Fragment>
            <Route path="/home">
              <Layout text="home" text2="both" onLogout={logoutHandler} />
              <HomePage />
            </Route>
            <Route path="/fitness">
              <Layout
                text="home"
                text2="insideFitness"
                onLogout={logoutHandler}
              />
              <FitnessPage />
            </Route>
            <Route path="/calories">
              <Layout
                text="home"
                text2="insideCalories"
                onLogout={logoutHandler}
              />
              <CaloriesPage />
            </Route>
          </React.Fragment>
        )}
        <Route path="*" exact>
          <Layout />
          <Redirect to="/" />
        </Route>
      </Switch>
      <DownbarLayout />
    </div>
  );
}

export default App;
