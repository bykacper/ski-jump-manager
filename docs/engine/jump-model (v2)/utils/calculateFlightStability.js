export function calculateFlightStability(
  flightSkill,
  wind
) {
  let stability = flightSkill / 100;

  if (wind) {
    stability -= wind.strength * 0.15;

    if (wind.direction === 'tail') {
      stability -= 0.05;
    }
  }

  stability += Math.random() * 0.1 - 0.05;

  return Math.max(0, Math.min(1, stability));
}
