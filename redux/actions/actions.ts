import { DATA_ACTIONS } from "./actionTypes";

const fetchPostsStart = { type: DATA_ACTIONS.FETCH_POSTS_START };
const fetchPostsSuccess = { type: DATA_ACTIONS.FETCH_POSTS_SUCCESS };
const fetchPostsError = { type: DATA_ACTIONS.FETCH_POSTS_ERROR };


// fetch data
export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart);

  const res = await fetch("https://simple-blog-api.crew.red/posts");
  const data = await res.json();;

  dispatch({ type: DATA_ACTIONS.FETCH_POSTS, payload: data });
  dispatch(fetchPostsSuccess);
};

// add posts
export const addPost = (title, body, id) => ({
  type: DATA_ACTIONS.ADD_POST,
  payload: {title, body, id}
});
