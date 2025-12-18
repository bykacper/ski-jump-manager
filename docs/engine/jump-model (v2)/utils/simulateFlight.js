import { competitions } from "../data/competitions.js";
import { calculateDistance } from "./calculateDistance.js";

export function simulateFlight(effectiveSpeed, flightSkill, competitions) {
  const skill = Math.max(0, Math.min(100, flightSkill)) / 100;

  // baza skoczni
  const BASE_FACTOR = 1.6;

  // lot też nie jest idealny:
  // słaby traci sporo, top traci mało
  const minMultiplier = 0.88;
  const maxMultiplier = 1.0;

  const baseMultiplier =
    minMultiplier + (maxMultiplier - minMultiplier) * skill;

  // mały rozrzut – lot nigdy nie jest identyczny
  const spread = 0.04 - 0.03 * skill; // słaby ~±0.04, top ~±0.01
  const randomness = (Math.random() * 2 - 1) * spread;

  const flightMultiplier = clamp(
    baseMultiplier + randomness,
    minMultiplier,
    maxMultiplier
  );

  const distance = calculateDistance(effectiveSpeed, competitions);

  return {
    distance,
    flightMultiplier
  };
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
