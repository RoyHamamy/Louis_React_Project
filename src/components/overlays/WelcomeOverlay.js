import { motion } from "framer-motion";
import "./WelcomeOverlay.module.css";
import chewbacca from "../../images/chewbacca.png";
import classes from "./WelcomeOverlay.module.css";
import { useHistory } from "react-router-dom";

const WelcomOverley = () => {
  const history = useHistory();
  return (
    <div>
      <img src={chewbacca} alt="" className={classes.image}/>
      <motion.div
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className={classes.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3>Hi There !</h3>
          <p>Welcome to Louis - Your Fitness Friend !</p>
          <br />
          <br />
          <p>I'm Excited to Start Our Journey !</p>
          <br />
          <br />
          <p>Are you Ready?</p>
          <button
            className={classes.link}
            onClick={() => {
              history.replace("/connect");
            }}
          >
            Let's Go!
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomOverley;
