import Register from "../components/auth/Register";

const RegisterPage = (props) => {
  return <Register onLogin={props.onLogin}/>;
};

export default RegisterPage;
