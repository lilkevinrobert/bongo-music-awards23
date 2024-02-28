import { useEffect, useState } from "react";

interface DeleteState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useDel<T>(url: string | null): DeleteState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const deleteData = async () => {
      try {
        if (url !== null) {
          const response = await fetch(url, {
            method: "DELETE",
          });
          const result: T = await response.json();
          setData(result);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    deleteData();
  }, [url]);

  return { data, loading, error };
}

export default useDel;
