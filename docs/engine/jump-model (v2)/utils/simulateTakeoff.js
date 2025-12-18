export function simulateTakeoff(inrunSpeed, takeoffSkill) {
  const skill = Math.max(0, Math.min(100, takeoffSkill)) / 100;

  // baza: skill redukuje straty, NIE daje boosta
  const baseMultiplier = 0.85 + 0.15 * skill; // max 1.0

  // rozrzut: większy niż wcześniej
  const spread = 0.06 - 0.04 * skill; // słaby ~0.06, top ~0.02

  const randomness = (Math.random() * 2 - 1) * spread;

  // lekki peak tylko przy bardzo dobrym trafieniu
  let multiplier = baseMultiplier + randomness;

  // SOFT CAP
  const MAX_PEAK = 1.08;
  const MIN_VALUE = 0.72;

  multiplier = Math.max(MIN_VALUE, multiplier);
  multiplier = Math.min(MAX_PEAK, multiplier);

  return {
    effectiveSpeed: inrunSpeed * multiplier,
    takeoffMultiplier: multiplier
  };
}
