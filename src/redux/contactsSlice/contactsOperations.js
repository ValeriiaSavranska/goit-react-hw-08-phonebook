import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getUserContacts = createAsyncThunk(
  'contacts/getUserContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const addContact = createAsyncThunk('contacts/addContact', async newContact => {
  try {
    const { data } = await axios.post('/contacts', newContact);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.log(error);
    }
  },
);

export { getUserContacts, addContact, deleteContact };
