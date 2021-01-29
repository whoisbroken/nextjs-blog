import { createSelector } from "reselect";

const selectData = (state) => state.data;

export const selectPosts = createSelector(
  [selectData],
  (data) => data.posts
);

export const selectLoading = createSelector(
  [selectData],
  (data) => data.loading
);