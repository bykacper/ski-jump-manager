import calculateInrunEfficiency from "./calculateInrunEfficiency.js";
import calculateBaseInrunSpeed from "./calculateBaseInrunSpeed.js";
import randomInrunNoise from "./randomInrunNoise.js";
import calculateTakeoffQuality from "./calculateTakeoffQuality.js";
import calculateFlightDistance from "./calculateFlightDistance.js";
import { INRUN_EFFICIENCY_TO_SPEED } from "./balance.js";

export default function simulateJump(competitor, hill) {
  // 1️⃣ Efektywność najazdu
  const inrunEfficiency =
    calculateInrunEfficiency(competitor);

  // 2️⃣ Bazowa prędkość
  const baseSpeed =
    calculateBaseInrunSpeed(hill);

  // 3️⃣ Finalna prędkość najazdowa
  const inrunSpeed =
    baseSpeed +
    (inrunEfficiency - 50) * INRUN_EFFICIENCY_TO_SPEED +
    randomInrunNoise();

  // 4️⃣ Wybicie
  const takeoffQuality =
    calculateTakeoffQuality({
      attributes: competitor.attributes,
      state: competitor.state,
      inrunSpeed
    });

  // 5️⃣ Lot
  const distance =
    calculateFlightDistance({
      attributes: competitor.attributes,
      state: competitor.state,
      takeoffQuality,
      context: hill
    });

  return {
    inrunSpeed: Number(inrunSpeed.toFixed(1)),
    takeoffQuality: Number(takeoffQuality.toFixed(1)),
    distance
  };
}
