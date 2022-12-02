import { useState } from "react";
import classes from "./BlogPage.module.css";
import BlogPosts from "./BlogPosts";
import NewPost from "./NewPost";

const BlogPage = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const switchHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
        <br/>
      {props.context === "nutrition" && (
        <h2 className={classes.title}>The Nutrition Blog</h2>
      )}
      {props.context === "fitness" && (
        <h2 className={classes.title}>The Fitness Blog</h2>
      )}
      {isClicked && props.context === "nutrition" && (
        <NewPost firebase="nutrition" onCancel={switchHandler} />
      )}
      {isClicked && props.context === "fitness" && (
        <NewPost firebase="fitness" onCancel={switchHandler} />
      )}
      {!isClicked && (
        <div className={classes.container} onClick={switchHandler}>
          <h2 className={classes.headline_top}>Add new Post</h2>
        </div>
      )}
      <div className={classes.container}>
        <h2 className={classes.headline_post}>Posts:</h2>
        <br />
        <br />
        {props.context === "nutrition" && <BlogPosts context="nutrition" />}
        {props.context === "fitness" && <BlogPosts context="fitness" />}
      </div>
    </div>
  );
};

export default BlogPage;
