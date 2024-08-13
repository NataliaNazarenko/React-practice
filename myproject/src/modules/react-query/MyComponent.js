import {useMutation, useQuery, refetch} from 'react-query';
import axios from 'axios';
import { getContactsList, addContact } from '../api/api';


axios.defaults.baseURL = 'http://localhost:4000/';

const MyComponent = () => {
    const {data, isFetching, error} = useQuery({
        queryKey: ['contactsList'],
        queryFn: getContactsList,
    }); //використовувати при get запитi

    const {mutateAsync} = useMutation({
        mutationFn: (payload) => addContact(payload), 
    }); //використовувати при post запитi

    const addNewContact = async () => {
        const payload = {name: 'Josha', LastName: 'Doe', about: 'I am a new contact'};
        try {
            await mutateAsync(payload);
            await refetch();
        } catch (error) {}
    };
    
    if (isFetching) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return <div>{data.title}</div>;
};



export default MyComponent;