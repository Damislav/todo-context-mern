import { Box, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, updateContact, clearCurrent } = contactContext;

  const [contact, setContact] = useState({
    text: "",
    // type: "personal",
  });

  const { text } = contact;

  useEffect(() => {
    // ¸if there is no current set it
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        text: "",
      });
    }
  }, [contactContext, current]);

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null && contact.text !== "") {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Box boxShadow={1} style={{ padding: "1.5rem", marginTop: "1rem" }}>
      <div>
        <h2 className="text-primary">
          {current ? "Edit Contact" : "Add Contact"}
        </h2>

        <form onSubmit={onSubmit} noValidate autoComplete="off">
          <TextField
            required
            name="text"
            onChange={onChange}
            value={text}
            placeholder="Enter your todo"
            id="standard-basic"
            label="Todo"
          />
        </form>

        <div>
          <input
            type="submit"
            value={current ? "Update Contact" : "Add todo"}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </div>
    </Box>
  );
};

export default ContactForm;
