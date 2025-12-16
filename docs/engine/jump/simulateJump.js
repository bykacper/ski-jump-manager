import generateLocalWind from "./generateLocalWind.js";
import calculateInrunEfficiency from "./calculateInrunEfficiency.js";
import calculateBaseInrunSpeed from "./calculateBaseInrunSpeed.js";
import randomInrunNoise from "./randomInrunNoise.js";
import calculateTakeoffQuality from "./calculateTakeoffQuality.js";
import calculateFlightDistance from "./calculateFlightDistance.js";

export default function simulateJump(competitor, hill, windTrend) {
  const localWind = generateLocalWind(windTrend);

  const inrunEfficiency =
    calculateInrunEfficiency(competitor);

  const baseSpeed =
    calculateBaseInrunSpeed(hill);

  const inrunSpeed =
    baseSpeed +
    (inrunEfficiency - 50) * 0.02 +
    randomInrunNoise();

  const takeoffQuality =
    calculateTakeoffQuality({
      attributes: competitor.attributes,
      state: competitor.state,
      inrunSpeed
    });

  const distance =
    calculateFlightDistance({
      attributes: competitor.attributes,
      state: competitor.state,
      takeoffQuality,
      context: hill,
      localWind
    });

  return {
    distance,
    inrunSpeed: Number(inrunSpeed.toFixed(2)),
    takeoffQuality: Number(takeoffQuality.toFixed(1)),
    wind: localWind
  };
}
