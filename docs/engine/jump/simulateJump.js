import calculateInrunEfficiency from "./calculateInrunEfficiency.js";
import calculateBaseInrunSpeed from "./calculateBaseInrunSpeed.js";
import randomInrunNoise from "./randomInrunNoise.js";
import calculateTakeoffQuality from "./calculateTakeoffQuality.js";
import calculateFlightDistance from "./calculateFlightDistance.js";
import calculateJumpPoints from "./calculateJumpPoints.js";
import generateLocalWind from "./generateLocalWind.js";

export default function simulateJump(competitor, hill, windTrend) {
  // 🌬️ lokalny wiatr dla zawodnika
  const localWind = generateLocalWind(windTrend);

  // 🛷 efektywność najazdu
  const inrunEfficiency =
    calculateInrunEfficiency(competitor);

  // 🛷 bazowa prędkość skoczni
  const baseSpeed =
    calculateBaseInrunSpeed(hill);

  // 🛷 finalna prędkość najazdowa
  const inrunSpeed =
    baseSpeed +
    (inrunEfficiency - 50) * 0.02 +
    randomInrunNoise();

  // 🚀 wybicie
  const takeoffQuality =
    calculateTakeoffQuality({
      attributes: competitor.attributes,
      state: competitor.state,
      inrunSpeed
    });

  // ✈️ lot (metry)
  const distance =
    calculateFlightDistance({
      attributes: competitor.attributes,
      state: competitor.state,
      takeoffQuality,
      context: hill,
      localWind
    });

  // 🧮 punkty (odległość + wiatr + styl)
  const points =
    calculateJumpPoints({
      distance,
      kPoint: hill.kPoint,
      localWind,
      attributes: competitor.attributes
    });

  return {
    competitorId: competitor.id,
    name: competitor.name,
    nation: competitor.nation,

    inrunSpeed: Number(inrunSpeed.toFixed(2)),
    takeoffQuality: Number(takeoffQuality.toFixed(1)),
    distance,

    wind: localWind,
    points
  };
}
