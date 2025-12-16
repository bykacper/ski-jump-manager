function randomTakeoffNoise() {
  return Math.random() * 2 - 1; 
}

export default function calculateTakeoffQuality({
  attributes,
  state,
  inrunSpeed
}) {
  const base =
    attributes.takeoff * 0.7 +
    inrunSpeed * 0.5;

  const fatiguePenalty = state.fatigue * 0.2;

  const quality =
    base -
    fatiguePenalty +
    randomTakeoffNoise();

  return quality;
}
