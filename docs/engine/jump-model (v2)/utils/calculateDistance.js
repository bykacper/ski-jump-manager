export function calculateDistance(effectiveSpeed, competition) {
  const { hsPoint, baseSpeed } = competition;

  const speedRatio = effectiveSpeed / baseSpeed;

  // lekka nieliniowość – im dalej, tym trudniej
  const adjustedRatio = Math.pow(speedRatio, 1.1);

  const distance = hsPoint * adjustedRatio;

  // zabezpieczenie – nie latamy w kosmos
  const maxDistance = hsPoint * 1.08;

  return Math.min(distance, maxDistance);
}
