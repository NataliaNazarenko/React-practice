import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllContacts } from '../../modules/api/api';

export const fetchUsers = createAsyncThunk('contacts/fetchUsers', getAllContacts);

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
     state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer