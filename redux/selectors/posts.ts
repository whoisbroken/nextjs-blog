import { createSelector } from "reselect";

const selectData = (state) => state.data;

export const selectPosts = createSelector(
  [selectData],
  (data) => data.posts
);
export const selectComments = createSelector(
  [selectData],
  (data) => data.comments
);

export const selectLoading = createSelector(
  [selectData],
  (data) => data.loading
);