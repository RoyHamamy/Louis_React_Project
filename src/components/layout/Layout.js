import { useHistory } from "react-router-dom";
import classes from "./Layout.module.css";
import chewbacca from "../../images/chewbacca.png";
import React from "react";

const Layout = (props) => {
  const history = useHistory();
  return (
    <div className={classes.header}>
      {props.text === "home" && (
        <div>
          <img
            src={chewbacca}
            alt=""
            onClick={() => {
              history.replace("/home");
            }}
          />
          <button
            className={classes.logout}
            onClick={() => {
              props.onLogout();
              history.replace("/");
            }}
          >
            Logout
          </button>
          {props.text2 === "insideFitness" && (
            <React.Fragment>
              <button
                className={classes.back}
                onClick={() => {
                  history.replace("/home");
                }}
              >
                Back
              </button>
              <button
                className={classes.calories}
                onClick={() => {
                  history.replace("/calories");
                }}
              >
                Calories
              </button>
            </React.Fragment>
          )}
          {props.text2 === "insideCalories" && (
            <React.Fragment>
              <button
                className={classes.back}
                onClick={() => {
                  history.replace("/home");
                }}
              >
                Back
              </button>
              <button
                className={classes.fitness}
                onClick={() => {
                  history.replace("/fitness");
                }}
              >
                Fitness
              </button>
            </React.Fragment>
          )}
          {props.text2 === "both" && (
            <React.Fragment>
              <button
                className={classes.back}
                onClick={() => {
                  history.replace("/home");
                }}
              >
                Back
              </button>
              <button
                className={classes.fitness}
                onClick={() => {
                  history.replace("/fitness");
                }}
              >
                Fitness
              </button>
              <button
                className={classes.calories}
                onClick={() => {
                  history.replace("/calories");
                }}
              >
                Calories
              </button>
            </React.Fragment>
          )}
        </div>
      )}
      <h1>Louis - Making Fitness Fun!</h1>
      {props.text === "welcome" && (
        <button
          className={classes.logout}
          onClick={() => {
            history.replace("/connect");
          }}
        >
          Back
        </button>
      )}
    </div>
  );
};

export default Layout;
