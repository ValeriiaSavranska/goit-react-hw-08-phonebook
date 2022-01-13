import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ContactsPage.module.css';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import * as actions from '../../redux/contactsSlice/contactsSlice';
import * as operations from '../../redux/contactsSlice/contactsOperations';
import * as selectors from '../../redux/contactsSlice/contactsSelectors';

const ContactsPage = () => {
  const contacts = useSelector(selectors.getContacts);
  const loading = useSelector(selectors.getLoading);
  const error = useSelector(selectors.getError);
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getUserContacts());
  }, [dispatch]);

  const formSubmitHandler = (name, number) => {
    const newContact = {
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
      )
    ) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    dispatch(operations.addContact(newContact));
  };

  const deleteContact = id => {
    dispatch(operations.deleteContact(id));
    // dispatch(actions.changeFilter(''));
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  const changeFilter = e => {
    dispatch(actions.changeFilter(e.target.value));
  };

  useEffect(() => {
    if (contacts.length === 1) {
      dispatch(actions.changeFilter(''));
    }
  }, [contacts.length, dispatch]);

  const noContacts = !loading && !contacts.length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>

      <ContactForm onSubmit={formSubmitHandler} />

      <h2 className={styles.title}>Contacts</h2>

      {loading && <Loader />}

      {noContacts && <h4 className={styles.noCities}>No cities yet</h4>}

      {error && <ErrorMsg message={error} />}

      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}

      {!!getFilteredContacts().length && (
        <ContactList
          filteredContacts={getFilteredContacts()}
          onDeleteContacts={deleteContact}
        />
      )}
    </div>
  );
};

export default ContactsPage;
