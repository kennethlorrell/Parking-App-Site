import { useState } from 'react';
import api from '@/utils/api.js';

const usePassword = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const updatePassword = async (data) => {
    setIsLoading(true);
    setErrors({});
    setStatus(null);

    try {
      await api.put('/password', data);

      setStatus('Password has been updated!');
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updatePassword,
    errors,
    setErrors,
    status,
    isLoading
  };
};

export default usePassword;
