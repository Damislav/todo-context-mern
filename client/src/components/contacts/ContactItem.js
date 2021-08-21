import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box, Button, IconButton } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
const ContactItem = ({ contact }) => {
  const [toggle, setToggle] = useState(true);
  const contactContext = useContext(ContactContext);
  const { text, _id, email } = contact;
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <Box
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
        {text}
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
          <Button onClick={() => setCurrent(contact)}>
            <EditIcon />
          </Button>
          <Button onClick={onDelete}>
            <DeleteOutlineIcon />
          </Button>{" "}
          {/* <IconButton
            onClick={() => setToggle(!toggle)}
            style={{ float: "right" }}
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
          >
            <MoreVertIcon />
          </IconButton> */}
        </div>
      </div>
    </Box>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
