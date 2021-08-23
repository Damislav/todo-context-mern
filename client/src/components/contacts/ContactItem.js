import React, { useContext, useEffect, useState } from "react";

import ContactContext from "../../context/contact/contactContext";
import DoneIcon from "@material-ui/icons/Done";
import { Box, Button, TextField } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
const ContactItem = ({ todo }) => {
  // CONTEXT STATE
  const contactContext = useContext(ContactContext);
  const { deleteContact, updateContact, getContacts } = contactContext;

  const { _id, text, completed } = todo;

  const [todos, setTodos] = useState({
    text: "",
    completed: false,
    _id: _id,
  });
  useEffect(() => {
    getContacts();
  }, [todos, getContacts]);
  // OWN STATE
  const [canEdit, setCanEdit] = useState(true);
  const [toggle, setToggle] = useState(true);

  const handleEdit = (e) => {
    e.preventDefault();
    setCanEdit(!canEdit);
    updateContact(todos);
    getContacts();
  };
  const onDelete = () => {
    deleteContact(_id);
  };

  const handleComplete = (e) => {
    setTodos({
      ...todos,
      completed: !todos.completed,
    });
  };
  return (
    <Box
      className={todos.completed && "complete"}
      boxShadow={1}
      style={{
        padding: "1.5rem",
        margin: "2rem 0 2rem 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3
        onClick={() => setToggle(!toggle)}
        className="text-primary text-left toggle"
      >
        {/* ştatic */}
        {canEdit ? (
          <form onSubmit={handleEdit} noValidate autoComplete="off">
            <TextField
              value={text}
              disabled={canEdit}
              name="text"
              placeholder="Enter your todo"
            />
          </form>
        ) : (
          <form onSubmit={handleEdit} noValidate autoComplete="off">
            <TextField
              placeholder={text}
              onChange={(e) => setTodos({ ...todos, text: e.target.value })}
              value={todos.text}
              name="text"
            />
          </form>
        )}
      </h3>

      <ul className={`${toggle ? "accordion" : ""} list `}></ul>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <Button onClick={() => setCanEdit(!canEdit)}>
            <EditIcon />
          </Button>
          <Button onClick={onDelete}>
            <DeleteOutlineIcon />
          </Button>
          <Button onClick={handleComplete}>
            <DoneIcon />
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default ContactItem;
