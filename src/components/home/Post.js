import { useState } from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classes.container}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <h3>
        {props.author}: {props.title}
      </h3>
      <br/>
      {props.time}
      <br />
      <br />
      {!isOpen && <p>Click to view the post</p>}
      {isOpen && (
        <div>
          <br />
          <p>{props.text}</p>
        </div>
      )}
    </div>
  );
};
export default Post;
