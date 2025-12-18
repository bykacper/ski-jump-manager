export function applyWindToDistance(
  baseDistance,
  wind,
  flightSkill,
  hsPoint
) {
  if (!wind || wind.strength <= 0) {
    return baseDistance;
  }

  // skill lotu 0–1
  const skillFactor =
    Math.max(0, Math.min(100, flightSkill)) / 100;

  // bazowy wpływ wiatru: 1 m/s ≈ 3% HS
  const baseImpact = hsPoint * 0.03;

  // losowość efektu (żeby było 4–6 m)
  const randomness = 0.8 + Math.random() * 0.4 ; // 0.8–1.2

  // im lepszy lot, tym mniejszy wpływ wiatru
  const skillReduction = 1 - skillFactor * 0.35;

  let windEffect =
    wind.strength *
    baseImpact *
    randomness *
    skillReduction;

  if (wind.direction === 'tail') {
    windEffect *= -1;
  }

  return baseDistance + windEffect;
}
