import { useEffect, useState, useCallback  } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
    fetchData: () => void; 
}

function useFetch<T>(url: string): FetchState<T> {
    const [ data, setData ] = useState<T | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<Error | null>(null);

    // Memoize fetchData to avoid unnecessary re-renders
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result: T = await response.json();
            setData(result);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(()=>{
        fetchData()
    }, [fetchData])

    return { data, loading, error, fetchData }

}

export default useFetch