import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { addContact, deleteContact, updateContact } from '../api/api';
import Loader from '../components/Loader/Loader';

export default function ContactsPage() {
    const [isContacts, setContacts] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const addContacts = async () => {
        setIsPostLoading(true);
        const newContact = { name: 'John Doe', lastName: 'Doe', about: 'I am a new contact' };
        const addedContact = await addContact(newContact);
        setContacts([...isContacts, addedContact]);
        setIsPostLoading(false);
    };
    
    const deleteContactHandler = async (id) => {
        await deleteContact(id);
        setContacts(isContacts.filter(contact => contact.id !== id));
    };
    
    const editContact = async (id) => {
        const newContact = { name: 'Sharma', lastName: 'Doe', about: 'I am a new contact' };
        const updatedContact = await updateContact(id, newContact);
        setContacts(isContacts.map(contact => contact.id === id ? updatedContact : contact));
    };

    console.log(location.state);

    return <div className="contacts-container">
    <h1>Contacts</h1>
    <ul>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        isContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} {contact.lastName} - {contact.about}
            <Link to={`${contact.id}`}>Details</Link>
            <button className="contact-btn" onClick={() => deleteContactHandler(contact.id)}>Delete</button>
            <button className="contact-btn" onClick={() => editContact(contact.id)}>Update</button>
          </li>
        ))
      )}
    </ul>
    <button className="add-contact-btn" onClick={addContacts} disabled={isPostLoading}>
      {isPostLoading ? 'Loading...' : 'Add'}
    </button>
  </div>;
}