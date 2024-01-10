import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '@/utils/api.js';
import ParkingInfo from '@/features/Parkings/ParkingInfo.jsx';

const ParkingDetails = () => {
  const { id } = useParams();

  const [parking, setParking] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    getParking(id, { signal: controller.signal });

    return () => controller.abort();
  }, [id]);

  const getParking = async (id, { signal } = {}) => {
    try {
      const { data: { data } } = await api.get(`/parkings/${id}`, { signal });

      setParking(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DefaultLayout>
      <div className='flex flex-col mx-auto md:w-96 w-full'>
        <h1 className='heading'>Подробиці паркування</h1>
        {
          parking && <ParkingInfo parking={parking} />
        }
      </div>
    </DefaultLayout>
  );
};

export default ParkingDetails;
