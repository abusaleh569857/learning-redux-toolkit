import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./postSlice";

const PostView = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);
  console.log("post : ", posts);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return (
    <div>
      <h1>All Post</h1>
      {loading && (
        <div>
          <h1>....loading</h1>
        </div>
      )}
      {error && (
        <div>
          <h1>Error : {error}</h1>
        </div>
      )}
      {posts?.map((p) => {
        return (
          <div key={p.id}>
            <h1>Id : {p.id}</h1>
            <h1>Name : {p.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default PostView;
