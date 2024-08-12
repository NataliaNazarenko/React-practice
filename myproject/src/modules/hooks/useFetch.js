import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            console.warn('something went wrong',error);
            setError(error.message);
        } finally {
        
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchData();
    }, []);


    return {data, loading, error};
};

export default useFetch;