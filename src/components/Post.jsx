/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete onClick={() => deletePost(post.id)} />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            className="badge rounded-pill text-bg-primary hashtag"
            key={tag}
          >
            {tag}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
}

export default Post;
