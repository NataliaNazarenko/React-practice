import axios from "axios"

axios.defaults.baseURL = 'http://localhost:4000/';

export const getContactsList = async () => {
    const contacts = await axios.get('contacts');
    
    return contacts.data;
  };