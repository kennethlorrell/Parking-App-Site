import { useEffect, useState } from 'react';
import api from '@/utils/api.js';
import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';
import Parking from '@/features/Parkings/Parking.jsx';

const ParkingHistory = () => {
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getParkingHistory({ signal: controller.signal });

    return () => controller.abort();
  }, []);

  const getParkingHistory = async ({ signal } = {}) => {
    try {
      const { data: { data } } = await api.get('/parkings/history', { signal });

      setParkings(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DefaultLayout>
      <div className='flex flex-col mx-auto md:w-96 w-full'>

        <h1 className='heading'>Parking History</h1>

        <div className='flex flex-col gap-1'>
          {
            parkings.map((parking) => (
              <Parking
                key={parking.id}
                parking={parking}
                isDetailed
              />
            ))
          }
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ParkingHistory;
