import React from "react";
import spinner from "./spinner.gif";
// eslint-disable-next-line
export default () => {
  return (
    <>
      <img
        style={{ width: "200px", margin: "auto", display: "block" }}
        src={spinner}
        alt="Loading..."
      />
      ;
    </>
  );
};
