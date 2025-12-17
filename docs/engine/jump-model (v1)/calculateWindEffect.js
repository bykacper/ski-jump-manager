export default function calculateWindEffect(localWind) {
  const { direction, strength } = localWind;

  if (direction === "head") {
    return strength * 1.8;   // +2.8 m na 1 m/s
  }

  return -strength * 2;    // -3.2 m na 1 m/s
}
