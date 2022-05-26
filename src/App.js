import React from 'react'
import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/contactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const onAddContact = (addContact) => {
    setContacts([
      ...contacts,
      { ...addContact, id: Math.floor(Math.random() * 1000) },
    ]);

    // console.log(contacts);
  };

  const deleteContactHandler = (id) => {
    console.log("delet Contact ", id);
    const filteredContact = contacts.filter((c) => c.id !== id);
    setContacts(filteredContact);
  };

  return (
    <div className='App'>
      <h1> contacts App </h1>
        <AddContact onAddContact={onAddContact} />
        <ContactList contacts={contacts} onDelete={deleteContactHandler} />
    </div>
  );
}

export default App;
