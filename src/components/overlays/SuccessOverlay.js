import classes from "./SuccessOverlay.module.css";

const SuccessOverlay = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <p>{props.text}</p>
        <button onClick={props.onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default SuccessOverlay;
