import classes from "./LoginForm.module.css";
import { useRef, useState } from "react";
import ErrorOverlay from "../overlays/ErrorOverlay";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const LoginForm = (props) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const confirmHandler = () => {
    setError("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Here add validation !!

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1eWxzoG3H8esJAVOBkU3c4JAFNu_L3ws",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Wrong Email or Password!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        props.onLogin(data.idToken);
        localStorage.setItem("token", data.idToken);
        history.replace("/home");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  return (
    <div>
      {error !== "" && <ErrorOverlay text={error} onConfirm={confirmHandler} />}
      <div className={classes.container}>
        <form className={classes.questions} onSubmit={submitHandler}>
          <h3>Please enter your email address :</h3>
          <br />
          <input type="text" ref={emailInputRef} />
          <br />
          <br />
          <h3>Please enter your password :</h3>
          <br />
          <input type="password" ref={passwordInputRef} />
          <br />
          <br />
          <label>
            Please make sure that you type the correct registered Email Address,
          </label>
          <br />
          <label>As well as your correct Password.</label>
          <br />
          <br />
          {!isLoading && <button className={classes.btn}>Log Me In !</button>}
          {isLoading && <LoadingSpinner />}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
