import { useEffect, useState } from 'react';
import useParking from '@/hooks/useParking.js';
import { useNavigate } from 'react-router-dom';
import useZones from '@/hooks/useZones.js';
import ErrorMessage from '@/components/ErrorMessages/ErrorMessage.jsx';
import LoadingButton from '@/components/Buttons/LoadingButton.jsx';
import CancelButton from '@/components/Buttons/CancelButton.jsx';
import useVehicle from '@/hooks/useVehicle.js';
import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';
import { formatVehicleInfo } from '@/utils/vehicles.js';
import { formatZoneInfo } from '@/utils/zones.js';

const OrderParking = () => {
  const [vehicleId, setVehicleId] = useState();
  const [zoneId, setZoneId] = useState();

  const { vehicles } = useVehicle();
  const { zones } = useZones();
  const { errors, isLoading, startParking } = useParking();

  const navigate = useNavigate();

  useEffect(() => setVehicleId(vehicles[0]?.id), [vehicles]);
  useEffect(() => setZoneId(zones[0]?.id), [zones]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await startParking({
      vehicle_id: vehicleId,
      zone_id: zoneId
    });
  };

  const handleZoneChange = (e) => {
    setZoneId(e.target.value);
  };

  const handleVehicleChange = (e) => {
    setVehicleId(e.target.value);
  };

  const handleCancelClick = () => {
    navigate('/parkings/active');
  };

  return (
    <DefaultLayout>
      <form onSubmit={ handleSubmit } noValidate>
        <div className='flex flex-col mx-auto md:w-96 w-full'>

          <h1 className='heading'>Замовлення паркування</h1>

          <div className='flex flex-col gap-2 mb-4'>
            <label
              htmlFor='vehicle_id'
              className='required'
            >
              Транспортний засіб
            </label>
            <select
              id='vehicle_id'
              className='form-input'
              value={vehicleId}
              onChange={handleVehicleChange}
            >
              {
                vehicles.length > 0 && vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {formatVehicleInfo(vehicle)}
                  </option>
                ))
              }
            </select>
            <ErrorMessage errors={errors} field='vehicle_id' />
          </div>

          <div className='flex flex-col gap-2'>
            <label
              htmlFor='zone_id'
              className='required'
            >
              Зона
            </label>
            <select
              name='zone_id'
              id='zone_id'
              value={zoneId}
              className='form-input'
              onChange={handleZoneChange}
            >
              { zones.length > 0 && zones.map((zone) => {
                return (
                  <option
                    key={zone.id}
                    value={zone.id}
                  >
                    {formatZoneInfo(zone)}
                  </option>
                );
              }) }
            </select>
            <ErrorMessage errors={errors} field='zone_id' />
            <ErrorMessage errors={errors} field='general' />
          </div>

          <div className='border-t h-[1px] my-6'></div>

          <div className='flex items-center gap-2'>
            <LoadingButton
              isLoading={isLoading}
              text='Почати паркування'
            />

            <CancelButton
              isLoading={isLoading}
              callback={handleCancelClick}
            />
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default OrderParking;
