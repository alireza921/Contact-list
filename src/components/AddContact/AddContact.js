import { useState } from "react";

const AddContact = ({onAddContact}) => {
  const [addContact, setAddContact] = useState({
    name: "",
    email: "",
  });

  const submitFormHandler = (e) => { 
      e.preventDefault(); 
      onAddContact(addContact) ; 
      
    setAddContact({
        name: "",
        email: "",
      });
  }

const changeHandler = (e) => { 
    setAddContact({...addContact , [e.target.name ] : e.target.value}); 
}



  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label> name : </label>
        <input type='text' onChange={changeHandler} name='name' value={addContact.name} />
      </div>
      <div>
        <label> Email : </label>
        <input type='email' onChange={changeHandler} name='email' value={addContact.email} />
      </div>
      <button type='submit'> Add Contact </button>
    </form>
  );
};

export default AddContact;
