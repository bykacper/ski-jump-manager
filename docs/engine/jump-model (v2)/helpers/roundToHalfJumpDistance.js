export function roundToHalfJumpDistance(distance) {
  const integerPart = Math.floor(distance);
  const firstDecimal =
    Math.floor((distance - integerPart) * 10);

  if (firstDecimal < 5) {
    return integerPart;
  }

  return integerPart + 0.5;
}