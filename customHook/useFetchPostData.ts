import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchComments } from "../redux/actions/actions";
import { selectPosts, selectComments, selectLoading } from "../redux/selectors/posts";

export const useFetchPostData = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const comments = useSelector(selectComments);
  const loading = useSelector(selectLoading);
  
  useEffect(() => {
    if (posts.length === 0 || comments.length === 0) {
      dispatch(fetchPosts());
      dispatch(fetchComments());
    }
  }, []);

  return { posts, comments, loading };
};