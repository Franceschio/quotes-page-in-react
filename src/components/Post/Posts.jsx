import "./index.css";

const Posts = ({ PostsData, singlePost }) => {
  const seeAll = () => {
    singlePost(() => PostsData);
  };

  return (
    <div className="Post">
      <h1>{PostsData.title}</h1>
      <p>{PostsData.body}</p>
      <button className="tagButton" onClick={seeAll}>
        See all
      </button>
    </div>
  );
};

export default Posts;
