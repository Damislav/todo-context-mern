import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";
import ContactFilter from "../contacts/ContactFilter";
import ContactForm from "../contacts/ContactForm";
import Contacts from "../contacts/Contacts";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div
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
        <Contacts /> ¸
      </div>{" "}
    </div>
  );
};

export default Home;
