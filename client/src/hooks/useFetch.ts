import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

function useFetch<T>(url: string): FetchState<T> {
    const [ data, setData ] = useState<T | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<Error | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result:T = await response.json();
                setData(result);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    }, [url])

    return { data, loading, error }

}

export default useFetch