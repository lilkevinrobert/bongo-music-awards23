import { useState } from "react";

const useDelete = (
  url: string
): [boolean, boolean, () => Promise<boolean>] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendDeleteRequest = async (): Promise<boolean> => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      // Handle successful response
      setLoading(false);
      return true; // Success
    } catch (error) {
      setError(true);
      setLoading(false);
      return false; // Failure
    }
  };

  return [loading, error, sendDeleteRequest];
};

export default useDelete;
