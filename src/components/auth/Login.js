import sparkle from "../../images/sparkle.png";
import classes from "./Login.module.css";
import LoginForm from "./LoginForm";
const Login = (props) => {
  return (
    <div>
      <h1 className={classes.headline}>Welcome Back !</h1>
      <img className={classes.image} src={sparkle} alt="" />
      <LoginForm onLogin={props.onLogin} />
    </div>
  );
};

export default Login;
