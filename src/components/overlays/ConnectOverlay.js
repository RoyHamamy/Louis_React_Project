import classes from "./ConnectOverlay.module.css";
import chewbacca from "../../images/chewbacca.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ConnectOverlay = () => {
  return (
    <div>
      <img src={chewbacca} alt="" className={classes.image} />
      <motion.div
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className={classes.second_text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3>But first, Lets get familiarized</h3>
          <p>If you've been here before - Please Login.</p>
          <br />
          <br />
          <p>However, If you're new to this whole thing - Please Register.</p>
          <ul className={classes.tab}>
            <Link className={classes.second_link} to="/login">
              Login
            </Link>
            <Link className={classes.second_link} to="/register">
              Register
            </Link>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConnectOverlay;
