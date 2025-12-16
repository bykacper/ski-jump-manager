function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomStyleNoise() {
  return (Math.random() - 0.5) * 1.2; // ±0.6
}

export default function calculateStylePoints({
  attributes,
  distance,
  kPoint,
  localWind
}) {
  const { landing = 50, mental = 50 } = attributes;

  let base = 17.5;

  // landing — asymetryczny
  if (landing >= 50) {
    base += (landing - 50) * 0.025;
  } else {
    base -= (50 - landing) * 0.07;
  }

  // psychika
  base += (mental - 50) * 0.02;

  const distanceDiff = distance - kPoint;

  // bardzo długie skoki — lekka kara
  if (distanceDiff > 15) {
    base -= (distanceDiff - 15) * 0.04;
  }

  // krótkie skoki — brutalna kara
  if (distanceDiff < -8) {
    base -= Math.pow(Math.abs(distanceDiff + 8), 1.2) * 0.06;
  }

  // trudny wiatr = chaos w stylu
  if (Math.abs(localWind) > 1.2) {
    base -= Math.abs(localWind) * 0.35;
  }

  base += randomStyleNoise();

  return Number(clamp(base, 14.5, 19.8).toFixed(1));
}
