export function calculateDistancePoints(distance, competition) {
  const {
    distanceBasePoint,
    hsPoint
  } = competition;

  // wartość metra zależna od wielkości skoczni
  let meterValue = 1.8;

  if (hsPoint >= 180) meterValue = 1.2; // mamuty

  return (
    ((distance - distanceBasePoint) * meterValue).toFixed(1)
  );
}
