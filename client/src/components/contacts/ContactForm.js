import { Box, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent } = contactContext;

  const [contact, setContact] = useState({
    text: "",
    completed: false,
    
  });

  const { text } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return alert("Need text");
    }
    addContact(contact);
  };

  return (
    <Box boxShadow={1} style={{ padding: "1.5rem", marginTop: "1rem" }}>
      <div>
        <form onSubmit={onSubmit} noValidate autoComplete="off">
          <TextField
            required
            name="text"
            onChange={onChange}
            value={text}
            placeholder="Enter your todo"
            label="Todo"
          />
        </form>

        <div>
          <input
            onClick={onSubmit}
            type="submit"
            value={"Add todo"}
            className="btn btn-primary btn-block"
          />
        </div>
      </div>
    </Box>
  );
};

export default ContactForm;
