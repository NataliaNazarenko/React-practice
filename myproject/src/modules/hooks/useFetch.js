import { useState, useEffect, useCallback } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const contentType = response.headers.get('Content-Type');
      const text = await response.text();  // Read the response as text for debugging
      if (contentType && contentType.includes('application/json')) {
        const result = JSON.parse(text);  // Parse the text as JSON
        setData(result);
      } else {
        throw new Error('Response is not JSON');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

export default useFetch;