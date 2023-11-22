import { useEffect, useState } from 'react';
import api from '@/utils/api.js';

const useZones = () => {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getZones({ signal: controller.signal });

    return () => { controller.abort(); };
  }, []);

  const getZones = async ({ signal }) => {
    try {
      const { data: { data } } = await api.get('/zones', { signal });

      setZones(data);
    } catch (err) {
      console.error(err);
    }
  };

  return { zones };
};

export default useZones;
