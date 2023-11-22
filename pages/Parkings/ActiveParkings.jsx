import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '@/utils/api.js';
import Parking from '@/features/Parkings/Parking.jsx';

const ActiveParkings = () => {
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getActiveParkings({ signal: controller.signal });

    return () => controller.abort();
  }, []);

  const getActiveParkings = async ({ signal } = {}) => {
    try {
      const { data: { data } } = await api.get('/parkings', { signal });

      setParkings(data);
    } catch (err) {
      console.error(err);
    }
  };

  const stopParking = async (parkingId) => {
    try {
      await api.put(`parkings/${parkingId}`);

      await getActiveParkings();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DefaultLayout>
      <div className='flex flex-col mx-auto md:w-96 w-full'>

        <h1 className='heading'>Active Parkings</h1>

        <Link
          to='/parkings/start'
          className='btn btn-primary'
        >
          Order Parking
        </Link>

        <div className='border-t h-[1px] my-6'></div>

        <div className='flex flex-col gap-1'>
          {
            parkings.map((parking) => (
              <Parking
                key={parking.id}
                parking={parking}
                stopParking={stopParking}
              />
            ))
          }
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ActiveParkings;
