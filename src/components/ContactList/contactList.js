import styles from './style.module.css'

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2> Contact List </h2>
      {contacts.map((c) => (
        <div key={c.id} className={styles.holder}>
          <ul className={styles.list}>
            <li> name :  {c.name} </li>
            <li> E-mail :  {c.email} </li>
          </ul>
          <button className={styles.btn}> Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
