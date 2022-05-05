import { UPDATE_POSTS } from "./actionTypes";
import { APIUrls } from "../helpers/urls";
export function fetchPosts() {
  return  (dispatch)=> {
    const url =APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
       return response.json()
      }).then((data)=>{
          console.log(data)
          dispatch(updatePosts(data.posts)) //*to add the posts fetched to my store
      })
      .catch((err) => {
        console.log("Fetch err", err);
      });
  };
}

export function updatePosts(posts){
    return{
        type:UPDATE_POSTS,
        posts:posts
    }
}