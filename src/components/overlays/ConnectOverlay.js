import classes from "./ConnectOverlay.module.css";
import chewbacca from "../../images/chewbacca.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ConnectOverlay = () => {
  return (
    <div>
      <motion.div
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h3>But first, Lets get familiarized</h3>
        <p>If you already have an account - Please Login.</p>
        <br />
        <p>If you are new here and want to start exploring - Please Register and be part of the louis community !</p>
        <ul className={classes.tab}>
          <Link className={classes.second_link} to="/login">
            Login
          </Link>
          <Link className={classes.second_link} to="/register">
            Register
          </Link>
        </ul>
      </motion.div>
      <img src={chewbacca} alt="" className={classes.image} />
    </div>
  );
};

export default ConnectOverlay;
