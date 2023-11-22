export const formatVehicleInfo = (vehicle) => {
  return formatPlateNumber(vehicle.plate_number) + ' ' + formatDescription(vehicle.description);
};

const formatPlateNumber = (plateNumber) => {
  return plateNumber.toUpperCase();
};

const formatDescription = (description) => {
  return `(${description ?? 'No description provided...'})`;
};
