import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorOverlay from "../overlays/ErrorOverlay";
import SuccessOverlay from "../overlays/SuccessOverlay";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./RegisterForm.module.css";

const RegisterForm = (props) => {
  const history = useHistory();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const secondPasswordInputRef = useRef();

  const confirmHandler = () => {
    setError("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const secondEnteredPassword = secondPasswordInputRef.current.value;

    if (enteredPassword !== secondEnteredPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1eWxzoG3H8esJAVOBkU3c4JAFNu_L3ws",
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
      ).then((res) => {
        if (res.ok) {
          setSuccess(true);
          props.onLogin();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Invalid Email or Password...";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            setIsLoading(false);
            setError(errorMessage);
          });
        }
      });
    }
  };

  return (
    <div>
      {success && (
        <SuccessOverlay
          text="Success! Now, Please Login."
          onConfirm={() => {
            history.replace("/login");
          }}
        />
      )}
      {error !== "" && <ErrorOverlay text={error} onConfirm={confirmHandler} />}
      <div className={classes.container}>
        <form className={classes.questions} onSubmit={submitHandler}>
          <h3>Please enter your email address :</h3>
          <br />
          <input type="text" ref={emailInputRef} />
          <br />
          <br />
          <h3>Please enter a password :</h3>
          <br />
          <input type="password" ref={passwordInputRef} />
          <br />
          <br />
          <h3>Please enter password again :</h3>
          <br />
          <input type="password" ref={secondPasswordInputRef} />
          <br />
          <br />
          <label>Please make sure that you type a valid Email Addres,</label>
          <br />
          <label>As well as a Password with a minimum length of 6.</label>
          <br />
          <br />
          {!isLoading && (
            <button className={classes.btn}> Sign Me Up ! </button>
          )}
          {isLoading && <LoadingSpinner />}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
