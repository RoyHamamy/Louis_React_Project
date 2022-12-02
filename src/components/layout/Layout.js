import { useHistory } from "react-router-dom";
import classes from "./Layout.module.css";
import chewbacca from "../../images/chewbacca.png";
import React from "react";

const Layout = (props) => {
  const history = useHistory();
  return (
    <div className={classes.header}>
      {props.text === "home" && (
        <img
          src={chewbacca}
          alt=""
          onClick={() => {
            history.replace("/home");
          }}
        />
      )}
      <h1>Louis - Health is Wealth!</h1>
      <ul className={classes.ul}>
      {props.text === "welcome" && (
        <button
          className={classes.btn}
          onClick={() => {
            history.replace("/connect");
          }}
        >
          Back
        </button>
      )}
      {props.text === "home" && props.text2 !== "insideFitness" &&
            <button
              className={classes.btn}
              onClick={() => {
                history.replace("/fitness");
              }}
            >
              Fitness
            </button> }
            {props.text === "home" && props.text2 !== "insideCalories" && <button
              className={classes.btn}
              onClick={() => {
                history.replace("/calories");
              }}
            >
              Nutrition
            </button> }
            {(props.text2 === "insideFitness" || props.text2 === "insideCalories" )&& (
              <button
                className={classes.btn}
                onClick={() => {
                  history.replace("/home");
                }}
              >
                Back
              </button>
          )}
            {props.text === "home" && <button
              className={classes.btn}
              onClick={() => {
                props.onLogout();
                history.replace("/");
              }}
            >
              Logout
            </button> }
          </ul>
    </div>
  )
};

export default Layout;
