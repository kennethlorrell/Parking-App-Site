import { formatTotalParkingPrice } from '@/utils/parking.js';
import { formatZoneInfo } from '@/utils/zones.js';
import { Link } from 'react-router-dom';

const Parking = (props) => {
  const {
    parking,
    stopParking = (id) => id,
    isDetailed = false
  } = props;

  return (
    <div className='flex flex-col p-2 border gap-1'>
      <div className='plate text-2xl'>
        { parking.vehicle.plate_number }
      </div>
      <div className='text-sm text-gray-600'>
        { parking.vehicle.description }
      </div>
      <div className='bg-gray-100 p-2'>
        {formatZoneInfo(parking.zone)}
      </div>

      <div>
        <div className="font-bold uppercase">З <span className="font-mono">{parking.start_time}</span></div>
      </div>
      {
        isDetailed && (
          <div>
            <div className="font-bold uppercase">До <span className="font-mono">{parking.stop_time}</span></div>
          </div>
        )
      }

      <div className='flex items-top'>
        <span className={`text-2xl font-bold ${isDetailed ? 'ml-auto' : 'text-blue-600'}`}>
          {formatTotalParkingPrice(parking.total_price)}
        </span>
        <span className='pt-0.5'>&nbsp;&#8372;</span>
      </div>

      {
        isDetailed
          ? (
            <Link
              to={`/parkings/${parking.id}`}
              type='button'
              className='btn btn-secondary uppercase'
            >
              Деталі
            </Link>
          ) : (
            <button
              type='button'
              className='btn btn-danger uppercase ml-auto'
              onClick={() => stopParking(parking.id)}
            >
              Зупинити
            </button>
          )
      }
    </div>
  );
};

export default Parking;
