import calculateStylePoints from "./calculateStylePoints.js";
import calculateDistancePoints from './calculateDistancePoints.js';
import calculateWindCompensation from './calculateWindCompensation.js'

export default function calculateJumpPoints({
  distance,
  kPoint,
  localWind,
  attributes
}) {
  const distancePoints = calculateDistancePoints({ distance, kPoint });
  const windComp = calculateWindCompensation(localWind);
  const style = calculateStylePoints({ attributes, distance, kPoint });
  const styleTotal = style*3;

  const total =
    distancePoints +
    windComp +
    styleTotal;

  return {
    distancePoints,
    windComp,
    styleTotal,
    total: Number(total.toFixed(1))
  };
}
