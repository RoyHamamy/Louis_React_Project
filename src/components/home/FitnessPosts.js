import { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./FitnessPosts.module.css";

const FitnessPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://react-http-b58c9-default-rtdb.firebaseio.com/fitness.json"
      );
      const responseData = await response.json();

      const loadedPosts = [];

      for (const key in responseData) {
        loadedPosts.push({
          id: key,
          author: responseData[key].author,
          title: responseData[key].title,
          text: responseData[key].text,
          time: responseData[key].date,
        });
      }
      setPosts(loadedPosts);
    };
    fetchPosts();
  }, [posts]);

  const postsList = posts
    .reverse()
    .map((post) => (
      <Post
        key={post.id}
        id={post.id}
        author={post.author}
        title={post.title}
        text={post.text}
        time={post.time}
      />
    ));
  return (
    <div>
      {postsList.length === 0 && (
        <p className={classes.p}>No Posts here... add one of your own!</p>
      )}
      {postsList.length !== 0 && <ul>{postsList}</ul>}
    </div>
  );
};

export default FitnessPosts;
