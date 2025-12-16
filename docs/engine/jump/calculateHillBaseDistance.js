import { HILL_BASE_FACTOR } from "./balance.js";

export default function calculateHillBaseDistance(context) {
  const { kPoint, hillSize } = context;
  return kPoint + (hillSize - kPoint) * HILL_BASE_FACTOR;
}
