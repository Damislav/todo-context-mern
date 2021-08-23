import { SET_DARK_THEME, SET_LIGHT_THEME } from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return { ...state, theme: "light" };
    case SET_DARK_THEME:
      return {
        ...state,
        theme: "dark",
      };
    default:
      return state;
  }
};
