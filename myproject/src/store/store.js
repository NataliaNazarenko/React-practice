import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../redux/counter/counterSlice"
import contactsReducer from "../redux/users/userSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        contacts: contactsReducer,
    },
});