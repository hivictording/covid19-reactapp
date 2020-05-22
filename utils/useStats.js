import {useState,useEffect} from 'react';
import axios from 'axios'

export default function useStats(url) {
    const [stats,setStats] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await axios(url);
                setStats(result.data);
            } catch (e) {
                setError(`Error fetching data from ${url}`);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    },[url]);

    return [{stats,isLoading,error}];
}