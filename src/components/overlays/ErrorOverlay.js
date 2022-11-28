import classes from "./ErrorOverlay.module.css";

const ErrorOverlay = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <p>ERROR: {props.text}</p>
        <button onClick={props.onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default ErrorOverlay;
