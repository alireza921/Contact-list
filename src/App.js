import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/contactList";

function App() {
  const [contacts, setContact] = useState([]);

  const onAddContact = (addContact) => {
    setContact([
      ...contacts,
     { ...addContact,
      id: Math.floor(Math.random() * 1000)},
    ]);

    // console.log(contacts);
  };

  return (
    <div className='App'>
      <h1> contacts App </h1>
      <section>
        <AddContact onAddContact={onAddContact} />
      </section>
      <section> 
        <ContactList contacts={contacts} /> 
      </section>
    </div>
  );
}

export default App;
