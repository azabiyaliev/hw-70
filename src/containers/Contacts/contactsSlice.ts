import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI.ts';
import { RootState } from '../../app/store.ts';
import { IContact, IContactAPI } from '../../types';

interface contactsState {
  object: {
    [id: string]: IContact;
  };
  isFetching: boolean;
  error: boolean;
}

const initialState: contactsState = {
  object: {},
  isFetching: false,
  error: false,
};
export const contactsList = (state: RootState) => state.contacts.object;

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
  const {data: contacts} = await axiosAPI.get<IContactAPI>("contacts.json", );
  return contacts;
});


export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers:{
  },
  extraReducers:(builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isFetching = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isFetching = true;
        state.object = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      });
  }
});

export const contactsReducer = contactsSlice.reducer;
