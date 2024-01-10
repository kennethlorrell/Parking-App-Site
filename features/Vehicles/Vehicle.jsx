import { Link } from 'react-router-dom';

const Vehicle = ({ vehicle, handleVehicleDelete }) => {
  return (
    <div className="flex bg-gray-100 w-full p-2 justify-between">
      <div className="flex items-center overflow-hidden w-full">
        <div className="text-xl plate">
          {vehicle.plate_number}
        </div>
        <div className="font-normal text-gray-600 pl-2 grow truncate">
          {vehicle.description}
        </div>
      </div>
      <div className="flex gap-1">
        <Link
          to={`/vehicles/${vehicle.id}/edit`}
          className="btn btn-secondary text-sm"
        >
          Редагувати
        </Link>
        <button
          value={vehicle.id}
          onClick={handleVehicleDelete}
          type="button"
          className="btn text-white bg-red-600 hover:bg-red-500 text-sm"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Vehicle;
