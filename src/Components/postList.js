import React  from "react";
import PropTypes from "prop-types"; //todo this pkg basically makes sure that the prop passed
//todo  to this componenet is the prop we actually desired to pass that is the type of prop over here post is an arr

class PostList extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="posts-list">
          {posts.map((post) => (
            <div className="post-wrapper" key={post._id}>
              <div className="post-header">
                <div className="post-avatar">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1651424836~hmac=9a431c91c8747bcfc1dbc93a9c534d4f"
                    alt="user-pic"
                  />
                  <div>
                    <span className="post-author">{post.user.name}</span>
                    <span className="post-time">a minute ago</span>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>
                <div className="post-actions">
                  <div className="post-like">
                    <img
                      src="https://as1.ftcdn.net/v2/jpg/01/13/95/24/1000_F_113952460_HvyynfBtsfVEWSVZpihIvu7aYpRRrB6z.jpg"
                      alt="like-img"
                    />
                    <span>{post.likes.length}</span>
                  </div>

                  <div className="post-comments-icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/13/13673.png"
                      alt="comment-img"
                    />
                    <span>{post.comments.length}</span>
                  </div>
                </div>
                <div className="post-comment-box">
                  <input placeholder="start typing comment..." />
                  <div className="posts-comments-list">
                    <div className="post-comment-item">
                      <div className="post-comment-header">
                        <span className="post-comment-author">Bill</span>
                        <span className="post-comment-time">a minute ago</span>
                        <span className="post-comment-likes">22</span>
                      </div>
                      <div className="post-comment-content">Random commnet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired, //* isReq is optional means that this prop is required
};

export default PostList;
