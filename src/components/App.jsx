import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { addContact, delContact } from 'redux/actions';


export const App = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    if (contacts.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
    }
  };

  const handleDelete = event => {
    dispatch(delContact(event));
  };

  const getFilteredContacts = () => {
    const filteredContactList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filteredContactList;
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
};
