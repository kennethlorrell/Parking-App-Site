export const formatZoneInfo = (zone) => {
  return zone.name + ': ' + formatHourlyRate(zone.hourly_rate);
};

const formatHourlyRate = (rate) => {
  const formattedRate = (rate / 100).toFixed(2);

  return `${formattedRate} \u20AC/hour`;
};
