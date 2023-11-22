import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';
import { Link } from 'react-router-dom';
import Vehicle from '@/features/Vehicles/Vehicle.jsx';
import useVehicle from '@/hooks/useVehicle.js';

const VehicleList = () => {
  const { getVehicles, deleteVehicle, vehicles } = useVehicle();

  const handleVehicleDelete = async (e) => {
    const vehicleId = e.target.value;

    if (vehicleId) {
      try {
        await deleteVehicle();
        await getVehicles();
      } catch (err) {
        console.log(err);
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

        <div className='flex flex-col gap-2'>
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
