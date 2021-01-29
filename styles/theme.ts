import { DefaultTheme } from "styled-components";

const COLORS = {
  black: "#121212",
  white: "#FAFAFA",
  lightGrey: "#F0F0F0",
  grey: "#DBDBDB",
  darkGrey: "#6D6D6D",
  red: "#D92222",
  midGrey: "#738a94",
};

export const theme: DefaultTheme = {
  palette: {
    primary: COLORS.black,
    background: COLORS.white,
    error: COLORS.red,
    lightGrey: COLORS.lightGrey,
    grey: COLORS.grey,
    darkGrey: COLORS.darkGrey,
    midGrey: COLORS.midGrey,
  },
};