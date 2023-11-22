import { useState } from 'react';
import api from '@/utils/api.js';
import { useNavigate } from 'react-router-dom';

const useParking = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const startParking = async (data) => {
    setIsLoading(true);
    setErrors({});

    try {
      await api.post('/parkings/start', data);

      navigate('/parkings/active');
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    startParking,
    isLoading,
    errors,
    setErrors
  };
};

export default useParking;
