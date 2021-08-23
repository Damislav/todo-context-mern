import React, { Fragment, useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "../contacts/ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../layout/Spinner";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  // ¸destructure from Contactcontext
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <div>
      <Fragment>
        {contacts !== null && !loading ? (
          <TransitionGroup>
            {filtered !== null
              ? filtered.map((todo) => (
                  <CSSTransition key={todo._id} timeout={500} classNames="item">
                    <ContactItem todo={todo} />
                  </CSSTransition>
                ))
              : contacts.map((todo) => (
                  <CSSTransition key={todo._id} timeout={500} classNames="item">
                    <ContactItem todo={todo} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </Fragment>
    </div>
  );
};

export default Contacts;
