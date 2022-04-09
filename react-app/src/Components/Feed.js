import React, { useState, useEffect } from 'react';
import Post from "./Post";
import Comments from "./Comments";
import NewPost from "./NewPost";
import NewComment from "./NewComment";
import axios from "axios";

const Feed = () => {
  const [data, setData] = useState([]);
  // every time the submit button is pressed, feed must be re-rendered
  const [newPostOrComment, setNewPostOrComment] = useState(true);

  const handleClick = () => {
    setNewPostOrComment(!newPostOrComment);
  };

  const getPostsData = () => {
    axios
      .get("http://localhost:3002/posts")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPostsData();
  }, [data, newPostOrComment]);

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data.map(d =>
          <>
            <Post title={d.title} body={d.body}/>
            <Comments comments={d.comments}/>
            <NewComment id={d.id} onClick={() => handleClick()}/>
          </>
        )
      }

      <NewPost onClick={() => handleClick()}/>
    </div>
  )

}

export default Feed;
