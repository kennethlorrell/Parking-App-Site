import { useEffect, useState } from 'react';
import api from '@/utils/api.js';
import { useNavigate } from 'react-router-dom';

const useVehicle = (id = null) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const controller = new AbortController();

      getVehicle(id, { signal: controller.signal });

      return () => { controller.abort(); };
    }
  }, [id]);

  const getVehicle = async (id, { signal } = {}) => {
    setIsLoading(true);

    try {
      const { data: { data } } = await api.get(`/vehicles/${id}`, { signal });

      setData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const createVehicle = async (data) => {
    setIsLoading(true);
    setErrors({});

    try {
      await api.post('/vehicles', data);

      navigate('/vehicles');
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  };

  const updateVehicle = async (vehicle) => {
    setIsLoading(true);
    setErrors({});

    try {
      await api.put(`/vehicles/${vehicle.id}`, vehicle);

      navigate('/vehicles');
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    vehicle: {
      data,
      setData,
      isLoading,
      errors,
      setErrors
    },
    createVehicle,
    updateVehicle
  };
};

export default useVehicle;
