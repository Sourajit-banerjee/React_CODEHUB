import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions/posts";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
//REACT_ROUTER
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
//props type check
import PropTypes from "prop-types";
import ErrorPage from "./page404";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    console.log("PROPS from app.js", this.props);
    const { posts } = this.props;

    //! in order form Router to work we have to wrap everything inside our router,since app is the root
    return (
      <Router>
        <div>
          <Navbar />

          {/* <Route exact path="\" component={Home} />    */}
          <Routes>
          <Route path="/login" element={<Login/>}/>
            <Route
              // exact //!not supported in router v6,as in v6 all paths match exactly by default
              path="/"
              // render={(props) => {
              //   //!we are getting the porps in render which are the extra props react router gives us such aas history,
              //   //!location,etc
              //   return <Home {...props} posts={posts} />; //*{...props} is basically doing history={history} and so on
              // }}
              element={<Home posts={posts} />}
            />
         
            <Route path="*" element={<ErrorPage/>}/>
            
          </Routes>

          {/* we cannot pass any props to the route other than the ones mentioned in react docs   */}
          {/* //*exact is a prop which actually means exact={true} whcih basically doeas is that since / is the root path */}
          {/* //*so whataver route we visit '/' will always be there i the beginning so to avoid the home component beign rendered always*/}
          {/* //* we could use exat which means if only "/" is their then only it will render the comp[onent attached to it] */}
        </div>
      </Router>
    );
  }
}


//!Switch which was used to render the very first component that will match( it means that if a route 
//!has the path which is their in url,it will not go further dfown to check),
//!in router v6 we have <Routes><Routes/>for that check docs (https://reactrouter.com/docs/en/v6/upgrading/v5)




function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
