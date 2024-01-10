import { Link } from 'react-router-dom';
import { formatTotalParkingPrice } from '@/utils/parking.js';
import { formatZoneInfo } from '@/utils/zones.js';

const ParkingInfo = ({ parking }) => {
  console.log(parking);
  const {
    id,
    vehicle: {
      plate_number: plateNumber,
      description
    },
    zone,
    start_time: startTime,
    stop_time: stopTime,
    total_price: totalPrice
  } = parking;

  return (
    <>
      <div className="border p-2 font-mono">
        <div className="font-bold uppercase mb-4">
          Квитанція парковки #{id}
        </div>

        <div className="font-bold uppercase mt-1">Номерний знак:</div>
        <div className="uppercase">
          {plateNumber}
        </div>

        <div className="font-bold uppercase mt-1">Опис:</div>
        <div>{description}</div>

        <div className="font-bold uppercase mt-1">Зона:</div>
        <div>{zone.name}</div>

        <div className="font-bold uppercase mt-1">Вартість:</div>
        <div>
          {formatZoneInfo(zone)}
        </div>

        <div className="font-bold uppercase mt-1">Дата початку:</div>
        <div>
          {startTime}
        </div>

        <div className="font-bold uppercase mt-1">Дата кінця:</div>
        <div>
          {stopTime}
        </div>

        <div className="font-bold uppercase mt-1">Підсумок</div>
        <div className="text-xl">
          {formatTotalParkingPrice(totalPrice)} &#8372;
        </div>
      </div>

      <div className="border-t h-[1px] my-6"></div>

      <Link
        to={'/parkings/history'}
        className='btn btn-secondary uppercase'
      >
        Повернутись
      </Link>
    </>
  );
};

export default ParkingInfo;
