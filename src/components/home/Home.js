import classes from "./Home.module.css";
import woman from "../../images/woman.jpeg";
import calories from "../../images/calories.jpg";
import fitness from "../../images/fitness.jpg";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className={classes.body}>
      <h3>Welcome to Louis !</h3>
      <div className={classes.container}>
        <h2>About</h2>
        <br />
        <p>
          Louis is a Social Network, with the purpose of sharing many Tips, "Fun
          Facts", Or basically anything that comes to mind about the world of
          Fitness and Nutrition.
        </p>
        <br />
        <img src={woman} alt="" />
      </div>
      <div className={classes.container}>
        <h2>Share & learn about Nutrition !</h2>
        <br />
        <p>
          Here in Louis, you can share your wisdom about the world of Nutrition,
          Wheater it's a new low-calorie food you've recently discovered, A new
          research/study about Nutrition, Or basically anything that comes to
          mind !
        </p>
        <p
          onClick={() => {
            history.replace("/calories");
          }}
          className={classes.explore}
        >
          Click here to Go to the Nutrition Blog, and explore !
        </p>
        <br />
        <img src={calories} alt="" />
      </div>
      <div className={classes.container}>
        <h2>Discover new Workouts and Fitness Routines !</h2>
        <br />
        <p>
          Here in Louis, you can Discover and Discuss about other people's
          Workout Routines, Share your own Routine, And ask for advices ! The
          goal is to explore together the amazing and broad world of Fitness.
        </p>
        <p
          onClick={() => {
            history.replace("/fitness");
          }}
          className={classes.explore}
        >
          Click here to Go to the Fitness Blog, and explore !
        </p>
        <br />
        <img src={fitness} alt="" />
      </div>
    </div>
  );
};

export default Home;
