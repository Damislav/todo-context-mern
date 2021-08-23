import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";
import ThemeContext from "../../context/theme/themeContext";
import ContactFilter from "../contacts/ContactFilter";
import ContactForm from "../contacts/ContactForm";
import Contacts from "../contacts/Contacts";

const Home = () => {
  const authContext = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);
  const { loadUser } = authContext;
  const { theme } = themeContext;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div
      style={
        theme === "light" ? { background: "white" } : { background: "black" }
      }
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          margin: "0 auto",
          gap: "2rem",
        }}
      >
        <div>
          <ContactForm />
        </div>
        <div style={{ width: "100%" }}>
          <ContactFilter />
          <Contacts />
        </div>{" "}
      </div>
    </div>
  );
};

export default Home;
