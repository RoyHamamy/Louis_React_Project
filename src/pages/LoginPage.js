import Login from "../components/auth/Login";

const LoginPage = (props) => {
  return <Login onLogin={props.onLogin}/>;
};

export default LoginPage;