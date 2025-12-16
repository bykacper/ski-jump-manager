export default function calculateWindCompensation(localWind) {
  const { direction, strength } = localWind;

  const base = strength * 10;

  if (direction === "head") {
    return Number((-base).toFixed(1)); // odejmujemy
  }

  return Number((base).toFixed(1)); // dodajemy
}
