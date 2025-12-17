import calculateGateCompensation from "./calculateGateCompensation.js";
import calculateDistancePoints from './calculateDistancePoints.js';
import calculateWindCompensation from './calculateWindCompensation.js';
import calculateStylePoints from './calculateStylePoints.js';

export default function calculateJumpPoints({
  distance,
  kPoint,
  localWind,
  attributes,
  gateContext
}) {
  const distancePoints = calculateDistancePoints({ distance, kPoint });
  const windComp = calculateWindCompensation(localWind);
  const style = calculateStylePoints({ attributes, distance, kPoint, localWind });
  const gateComp = calculateGateCompensation(gateContext);

  const total =
    distancePoints +
    windComp +
    gateComp +
    style;

  return {
    distancePoints,
    windComp,
    gateComp,
    style,
    total: Number(total.toFixed(1))
  };
}
