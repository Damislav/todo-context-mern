import React, { useReducer } from "react";
import { SET_DARK_THEME, SET_LIGHT_THEME } from "../types";

import ThemeContext from "./themeContext";
import themeReducer from "./themeReducer";

const ContactState = (props) => {
  const initialState = {
    theme: "light",
  };
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const toggleTheme = (theme) => {
    if (state.theme === "light") {
      dispatch({
        type: SET_DARK_THEME,
      });
    } else {
      dispatch({
        type: SET_LIGHT_THEME,
      });
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ContactState;
