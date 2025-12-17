export default function generateLocalWind(windTrend) {
  const directionFlipChance = 0.25; 

  const flipped =
    Math.random() < directionFlipChance;

  const direction = flipped
    ? (windTrend.direction === "head" ? "tail" : "head")
    : windTrend.direction;

  let strength;

  if (flipped) {
    strength = Math.random() * 1; // 0.0 – 0.5 m/s
  } else {
    const deviation = Math.random() * 1.2 - 0.6;
    strength = windTrend.strength + deviation;
  }

  return {
    direction,
    strength: Number(Math.max(0, strength).toFixed(2))
  };
}
