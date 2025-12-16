import simulateJump from "./simulateJump.js";
import { goodCompetitor } from "./competitor.js";

const hill = {
  baseInrunSpeed: 90,
  baseGate: 10,
  gate: 10,
  kPoint: 125,
  hillSize: 140
};

console.log(simulateJump(goodCompetitor, hill));
