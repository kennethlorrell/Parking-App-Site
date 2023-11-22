import { useEffect, useState } from 'react';
import api from '@/utils/api.js';

const useProfile = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    const controller = new AbortController();

    getProfile({ signal: controller.signal });

    return () => { controller.abort(); };
  }, []);

  const getProfile = async ({ signal = {} }) => {
    setIsLoading(true);

    try {
      const { data: profileData } = await api.get('/profile', { signal });

      setData(profileData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (profileData) => {
    setIsLoading(true);
    setErrors({});
    setMessage('');

    try {
      await api.put('/profile', profileData);

      setMessage('Profile has been updated!');
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  };

  return [
    {
      data,
      setData,
      errors,
      setErrors,
      message,
      isLoading
    },
    updateProfile
  ];
};

export default useProfile;
