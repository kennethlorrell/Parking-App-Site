import { useNavigate, useParams } from 'react-router-dom';
import useVehicle from '@/hooks/useVehicle.js';
import ErrorMessage from '@/components/ErrorMessages/ErrorMessage.jsx';
import ButtonWithLoader from '@/components/Buttons/ButtonWithLoader.jsx';
import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';

const CreateVehicle = () => {
  const { id } = useParams();
  const { vehicle, createVehicle, updateVehicle } = useVehicle(id);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const action = id ? updateVehicle : createVehicle;

    await action(vehicle.data);
  };

  const handlePlateNumberChange = (e) => {
    vehicle.setData((prevState) => ({
      ...prevState,
      plate_number: e.target.value
    }));
  };

  const handleDescriptionChange = (e) => {
    vehicle.setData((prevState) => ({
      ...prevState,
      description: e.target.value
    }));
  };

  const handleCancelClick = () => {
    navigate('/vehicles');
  };

  return (
    <DefaultLayout>
      <form onSubmit={ handleSubmit }>
        <div className='flex flex-col mx-auto md:w-96 w-full'>

          <h1 className='heading'>{id ? `Update Vehicle #${id}` : 'Add Vehicle'}</h1>

          <div className='flex flex-col gap-2 mb-4'>
            <label
              htmlFor='plate_number'
              className='required'
            >
              License Plate
            </label>
            <input
              id='plate_number'
              name='plate_number'
              type='text'
              value={vehicle.data.plate_number ?? ''}
              onChange={handlePlateNumberChange}
              className='form-input plate'
            />
            <ErrorMessage errors={vehicle.errors} field='plate_number' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='description'>Description</label>
            <input
              id='description'
              name='description'
              type='text'
              value={vehicle.data.description ?? ''}
              onChange={handleDescriptionChange}
              className='form-input'
            />
            <ErrorMessage errors={vehicle.errors} field='description' />
          </div>

          <div className='border-t h-[1px] my-6'></div>

          <div className='flex items-center gap-2'>
            <ButtonWithLoader
              isLoading={vehicle.isLoading}
              text={id ? 'Update Vehicle' : 'Save Vehicle'}
            />

            <button
              type='button'
              className='btn btn-secondary'
              onClick={handleCancelClick}
              disabled={vehicle.isLoading}
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default CreateVehicle;
