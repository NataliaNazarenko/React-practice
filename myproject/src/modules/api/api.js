import axios from "axios"

axios.defaults.baseURL = 'http://localhost:4000/';

export const getContactsList = async () => {
    const contacts = await axios.get('contacts');
    
    return contacts.data;
  };

export const addContact = async (contact) => {
    const response = await axios.post('contacts', contact);
    
    return response.data;
  };

export const deleteContact = async (id) => {
    const response = await axios.delete(`contacts/${id}`);
    
    return response.data;
};

export const updateContact = async (id, contact) => {
    const response = await axios.put(`contacts/${id}`, contact);
    
    return response.data;
};

export const getContactById = async (id) => {
    const contact = await axios.get(`contacts/${id}`);
    
    return contact.data;
};