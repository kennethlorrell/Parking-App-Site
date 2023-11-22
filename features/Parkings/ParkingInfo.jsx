import { Link } from 'react-router-dom';
import { formatTotalParkingPrice } from '@/utils/parking.js';
import { formatZoneInfo } from '@/utils/zones.js';

const ParkingInfo = ({ parking }) => {
  const {
    id,
    plate_number: plateNumber,
    description,
    zone,
    start_time: startTime,
    stop_time: stopTime,
    total_price: totalPrice
  } = parking;

  return (
    <>
      <div className='border p-2 font-mono'>
        <div className='font-bold uppercase mb-4'>
          Parking order #{id}
        </div>

        <div className='font-bold uppercase'>License plate</div>
        <div className='plate text-2xl'>
          {plateNumber}
        </div>

        <div className='font-bold uppercase'>Description</div>
        <div>{description}</div>

        <div className='font-bold uppercase'>Zone</div>
        <div>{zone.name}</div>

        <div className='font-bold uppercase'>price</div>
        <div>
          {formatZoneInfo(zone)}
        </div>

        <div className='font-bold uppercase'>From</div>
        <div>{startTime}</div>

        <div className='font-bold uppercase'>To</div>
        <div>{stopTime}</div>

        <div className='font-bold uppercase'>Total</div>
        <div className='text-xl'>
          {formatTotalParkingPrice(totalPrice)} &euro;
        </div>
      </div>

      <div className='border-t h-[1px] my-6'></div>

      <Link
        to={'/parking/history'}
        className='btn btn-secondary uppercase'
      >
        Return
      </Link>
    </>
  );
};

export default ParkingInfo;
