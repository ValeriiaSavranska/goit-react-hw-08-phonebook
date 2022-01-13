import { createSlice } from '@reduxjs/toolkit';
import {
  getUserContacts,
  addContact,
  deleteContact,
} from './contactsOperations';

const initialState = {
  data: {
    items: [],
    loading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, action) => ({ ...state, filter: action.payload }),
  },

  extraReducers: builder => {
    builder
      .addCase(getUserContacts.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getUserContacts.fulfilled, (state, action) => {
        state.data.loading = false;
        state.data.items = action.payload;
      })
      .addCase(getUserContacts.rejected, (state, action) => {
        state.data.loading = false;
        state.data.error = action.payload;
      })

      .addCase(addContact.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.data.loading = false;
        // state.data.items.push(action.payload);
        state.data.items = [...state.data.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.data.loading = false;
        state.data.error = action.payload;
      })

      .addCase(deleteContact.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.data.loading = false;
        // state.data.items.filter(({ id }) => id !== action.payload);
        const index = state.data.items.findIndex(
          contact => contact.id === action.payload,
        );
        state.data.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.data.loading = false;
        state.data.error = action.payload;
      });
  },
});

const { actions, reducer } = contactsSlice;

export const { changeFilter } = actions;
export default reducer;
