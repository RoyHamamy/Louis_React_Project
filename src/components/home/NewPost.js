import classes from "./NewPost.module.css";
import { useRef, useState } from "react";
import ErrorOverlay from "../overlays/ErrorOverlay";
import SuccessOverlay from "../overlays/SuccessOverlay";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewPost = (props) => {
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const authorRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const postHandler = async () => {
    const auther = authorRef.current.value.trim();
    const title = titleRef.current.value.trim();
    const text = textRef.current.value.trim();
    setIsLoading(true);

    if (auther.length < 2 || title.length < 2 || text.length < 2) {
      setError("One or more inputs are too short.");
      setIsLoading(false);
    } else {
      const current = new Date();
      const time = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()} at ${current.getHours()}:${current.getMinutes()}`;
      const response = await fetch(
        `https://react-http-b58c9-default-rtdb.firebaseio.com/${props.firebase}.json`,
        {
          method: "POST",
          body: JSON.stringify({
            author: authorRef.current.value,
            title: titleRef.current.value,
            text: textRef.current.value,
            date: time,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        setError("Connection to firebase failed.");
        setIsLoading(false);
      } else {
        authorRef.current.value = "";
        titleRef.current.value = "";
        textRef.current.value = "";
        setIsSent(true);
      }
    }
  };
  return (
    <div>
      {error !== "" && (
        <ErrorOverlay
          text={error}
          onConfirm={() => {
            setError("");
          }}
        />
      )}
      {isSent && (
        <SuccessOverlay
          text="Post Sent!"
          onConfirm={() => {
            setIsSent(false);
            setIsLoading(false);
          }}
        />
      )}
      <div className={classes.container}>
        <h2 className={classes.headline_top} onClick={props.onCancel}>Add new Post</h2>
        <br />
        <h1 className={classes.headline}>Author:</h1>
        <textarea
          className={classes.input_author}
          maxLength="25"
          ref={authorRef}
        />
        <br />
        <h1 className={classes.headline}>Title:</h1>
        <textarea
          className={classes.input_title}
          maxLength="25"
          ref={titleRef}
        />
        <br />
        <h1 className={classes.headline}>Content:</h1>
        <textarea
          maxLength="800"
          type="textarea"
          name="textValue"
          className={classes.input_text}
          ref={textRef}
        />
        <br />
        {!isLoading && (<div>
          <button className={classes.btn} onClick={postHandler}>
            Post
          </button>
          <button className={classes.btn} onClick={props.onCancel}>
            Cancel
          </button>
          </div>
        )}
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default NewPost;
