import { DATA_ACTIONS } from "./actionTypes";

const fetchPostsStart = { type: DATA_ACTIONS.FETCH_POSTS_START };
const fetchPostsSuccess = { type: DATA_ACTIONS.FETCH_POSTS_SUCCESS };
const fetchPostsError = { type: DATA_ACTIONS.FETCH_POSTS_ERROR };

const fetchCommentsStart = { type: DATA_ACTIONS.FETCH_COMMENTS_START };
const fetchCommentsSuccess = { type: DATA_ACTIONS.FETCH_COMMENTS_SUCCESS };
const fetchCommentsError = { type: DATA_ACTIONS.FETCH_COMMENTS_ERROR };

// fetch data
export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart);

  const res = await fetch("https://simple-blog-api.crew.red/posts");
  const posts = await res.json();;

  dispatch({ type: DATA_ACTIONS.FETCH_POSTS, payload: posts });
  dispatch(fetchPostsSuccess);
};

export const fetchComments = () => async (dispatch) => {
  dispatch(fetchCommentsStart);

  const res = await fetch("https://simple-blog-api.crew.red/comments");
  const comments = await res.json();

  dispatch({ type: DATA_ACTIONS.FETCH_COMMENTS, payload: comments });
  dispatch(fetchCommentsSuccess);
};

// add posts
export const addPost = (title, body, id) => ({
  type: DATA_ACTIONS.ADD_POST,
  payload: {title, body, id}
});
