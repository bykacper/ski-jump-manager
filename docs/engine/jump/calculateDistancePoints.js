export default function calculateDistancePoints({
  distance,
  kPoint
}) {
  const meterValue = 1.8;
  return Number(((distance - 90) * meterValue).toFixed(1));
}
