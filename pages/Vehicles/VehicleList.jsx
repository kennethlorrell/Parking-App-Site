import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '@/utils/api.js';
import Vehicle from '@/features/Vehicles/Vehicle.jsx';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getVehicles({ signal: controller.signal });

    return () => { controller.abort(); };
  }, []);

  const getVehicles = async ({ signal } = {}) => {
    try {
      const { data: { data } } = await api.get('/vehicles', { signal });

      setVehicles(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleVehicleDelete = async (e) => {
    const vehicleId = e.target.value;

    if (vehicleId) {
      try {
        await api.delete(`/vehicles/${vehicleId}`);

        await getVehicles();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <DefaultLayout>
      <div className='flex flex-col mx-auto md:w-96 w-full'>

        <h1 className='heading'>My Vehicles</h1>

        <Link to='/vehicles/create' className='btn btn-primary'>
          Add Vehicle
        </Link>

        <div className='border-t h-[1px] my-6'></div>

        <div className="flex flex-col gap-2">
          {
            vehicles.map((vehicle) => (
              <Vehicle
                key={vehicle.id}
                vehicle={vehicle}
                handleVehicleDelete={handleVehicleDelete}
              />
            ))
          }
        </div>
      </div>
    </DefaultLayout>
  );
};

export default VehicleList;
