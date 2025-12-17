export default function generateWindTrend() {
  const direction =
    Math.random() < 0.5 ? "head" : "tail";

    console.log(direction);

  const strength = Number((0.6 + Math.random() * 1.4).toFixed(1));

  return {
    direction,
    strength
  };
}
