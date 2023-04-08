import "./index.css";

import Posts from "../Post/Posts";

import { useState } from "react";
import { useEffect } from "react";

const PostsList = ({ singlePost }) => {
  const [listPosts, setListPosts] = useState([]);
  const [postMissing, setPostMissing] = useState(true);

  const [max, setMax] = useState(9);
  const [min, setMin] = useState(0);

  const [listLenght, setListLenght] = useState(0);

  const reduceList = () => {
    if (listLenght <= 0) {
      return;
    } else {
      setMin(min - 9);
      setMax(max - 9);
      setListLenght((prev) => prev - 10);
    }
  };

  const addList = () => {
    if (listLenght >= listPosts.length) {
      return;
    } else {
      setMin(min + 9);
      setMax(max + 9);
      setListLenght((prev) => prev + 10);
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setListPosts(data.posts);
        setPostMissing(false);
      });
  }, []);

  return (
    <div className="PostsList">
      <div className="postContainer">
        {postMissing ? <p>Attendere...</p> : null}
        {listPosts.map((post) =>
          parseInt(post.id) <= max && parseInt(post.id) >= min ? (
            <Posts PostsData={post} singlePost={singlePost} key={post.id} />
          ) : null
        )}
      </div>
      <div className="arrows">
        <div className="first" onClick={reduceList}>
          {"<"}
        </div>
        <div className="second" onClick={addList}>
          {">"}
        </div>
      </div>
    </div>
  );
};

export default PostsList;
