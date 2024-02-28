import { useState } from 'react';

export interface DeleteState {
  isLoading: boolean;
  error: Error | null;
  isSuccess: boolean | null; // Add isSuccess flag
}

const useDelete = () => {
  const [deleteRequestState, setDeleteRequestState] = useState<DeleteState>({
    isLoading: false,
    error: null,
    isSuccess: null, // Initialize isSuccess to null
  });

  const deleteRequest = async (url: string) => {
    setDeleteRequestState({ ...deleteRequestState, isLoading: true, isSuccess: null }); // Reset isSuccess
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (response.status !== 200) {
        throw new Error('Failed to delete resource');
      }
      setDeleteRequestState({ ...deleteRequestState, isLoading: false, isSuccess: true });
      return response;
    } catch (error: any) {
      setDeleteRequestState({ ...deleteRequestState, isLoading: false, error, isSuccess: false });
    }
  };

  return { deleteRequest, ...deleteRequestState };
};

export default useDelete;