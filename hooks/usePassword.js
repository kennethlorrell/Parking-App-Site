import { useState } from 'react';
import api from '@/utils/api.js';

const usePassword = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const updatePassword = async (data) => {
    setIsLoading(true);
    setErrors({});
    setMessage('');

    try {
      await api.put('/password', data);

      setMessage('Password has been updated!');
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
    message,
    isLoading
  };
};

export default usePassword;
