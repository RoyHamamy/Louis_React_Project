import classes from "./Home.module.css";
import woman from "../../images/woman.jpeg";
import calories from "../../images/calories.jpg";
import fitness from "../../images/fitness.jpg";


const Home = () => {
  return (
    <div className={classes.body}>
      <h3>Welcome to Louis !</h3>
      <div className={classes.container}>
        <h2>About</h2>
        <br />
        <p>
          Louis is a Social Network, with the purpose of sharing many Tips, "Fun
          Facts", or just plain opinions about the world of Fitness and
          Nutrition.
        </p>
        <br />
        <img src={woman} alt="" />
      </div>
      <div className={classes.container}>
        <h2>Share & learn about Calories !</h2>
        <br />
        <p>
          Here in Louis, you can share your wisdom about the world of Calories,
          Wheater its a new low-calorie food you've recently discovered, A new
          research/study about calories, Or basically anything that comes to
          mind !
        </p>
        <p>Just Click on "Calories" in the Nav bar, and enjoy !</p>
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
        <p>Just Click on "Fitness" in the Nav bar, and Discover !</p>
        <br />
        <img src={fitness} alt="" />
      </div>
    </div>
  );
};

export default Home;
