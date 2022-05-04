import React from "react";
import  PostList  from "./postList";
class Home extends React.Component {
  render() {
    const { posts } = this.props;
    console.log("PROPS FROM HOME",this.props)
    return (
      <div className="home">
        <PostList posts={posts} />
      </div>
    );
  }
}

export default Home;
