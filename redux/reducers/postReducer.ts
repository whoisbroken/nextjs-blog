import { DATA_ACTIONS } from "../actions/actionTypes";

const initialState = {
  posts: [],
  comments: [],
  loading: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_ACTIONS.FETCH_POSTS_START:
      return {
        ...state,
        loading: true
      };
    case DATA_ACTIONS.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case DATA_ACTIONS.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case DATA_ACTIONS.FETCH_COMMENTS_START:
      return {
        ...state,
        comments: [],
        loading: true,
      };
    case DATA_ACTIONS.FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case DATA_ACTIONS.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DATA_ACTIONS.ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
           action.payload,
        ],
        loading: false,
      };
    default:
      return state;
  }
};