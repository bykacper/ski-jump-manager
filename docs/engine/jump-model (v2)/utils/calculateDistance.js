function flyingHill(hsPoint) {
  if (hsPoint >= 180) return 1.04;
  return 1;
}

export function calculateDistance(effectiveSpeed, competition) {
  const { hsPoint, baseSpeed } = competition;

  const speedRatio = effectiveSpeed / baseSpeed;

  const adjustedRatio = Math.pow(speedRatio, 1.1);

  let distance =
    hsPoint *
    adjustedRatio *
    flyingHill(hsPoint);

  const maxDistance = hsPoint * 1.08;
  distance = Math.min(distance, maxDistance);

  return distance;
}
