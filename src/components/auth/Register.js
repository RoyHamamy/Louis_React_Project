import classes from "./Register.module.css";
import celebration from "../../images/celebration.png";
import RegisterForm from "./RegisterForm";

const Register = (props) => {
  return (
    <div>
      <img className={classes.image} src={celebration} alt="" />
      <h1 className={classes.headline}>Welcome Aboard !</h1>
      <RegisterForm onLogin={props.onLogin} />
    </div>
  );
};

export default Register;
