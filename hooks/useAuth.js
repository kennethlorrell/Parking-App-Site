import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use-storage';
import api from '@/utils/api.js';

const useAuth = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage('access_token', '');

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  }, [accessToken]);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

  const register = async (data) => {
    setIsLoading(true);
    setErrors({});

    try {
      const { data: { access_token } } = await api.post('/register', data);

      setAccessToken(access_token);

      navigate('/vehicles');
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (data) => {
    setErrors({});
    setIsLoading(true);

    try {
      const { data: { access_token } } = await api.post('/login', data);

      setAccessToken(access_token);

      navigate('/parkings/active');
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (force = false) => {
    if (!force) {
      await axios.post('/logout');
    }

    removeAccessToken();
    navigate('/login');
  };

  return {
    register,
    login,
    logout,
    isAuthenticated,
    isLoading,
    errors,
    setErrors
  };
};

export default useAuth;
