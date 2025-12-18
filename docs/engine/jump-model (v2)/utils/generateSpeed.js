import { competitionsSettings } from '../competitionsSettings.js';
import { competitions } from '../data/competitions.js';

const SPEED_SKILL_TABLE = [
  { min: 100, bonus: 1.6 },
  { min: 90,  bonus: 0.9 },
  { min: 80,  bonus: 0.2 },
  { min: 65,  bonus: -0.5 },
  { min: 50,  bonus: -1.2 },
  { min: 35,  bonus: -1.9},
  { min: 20,  bonus: -2.6 },
  { min: 5,   bonus: -3.3 },
  { min: 0,   bonus: -4.0 }
];

function getSkillSpeedBonus(skill) {
  return SPEED_SKILL_TABLE.find(row => skill >= row.min).bonus;
}

export function generateSpeed(abilityToGenerateSpeed, baseSpeed) {
  const competition = competitions[0];

  // 1️⃣ RÓŻNICA BELKI
  const gateDelta =
    competitionsSettings.gate - competition.baseGate;

  let gateDiff;

  if (gateDelta >= 0) {
    // belka w górę – liniowo
    gateDiff = gateDelta * competition.speedDiff;
  } else {
    // belka w dół – kara nieliniowa
    const down = Math.abs(gateDelta);
    const penaltyMultiplier = 1 + 0.12 * down;

    gateDiff =
      -down * competition.speedDiff * penaltyMultiplier;
  }

  // 2️⃣ BONUS / MALUS ZE SKILLA
  let skillBonus =
    getSkillSpeedBonus(abilityToGenerateSpeed);

  // 3️⃣ NISKA BELKA UJAWNIA SŁABY SKILL
  if (gateDelta < 0) {
    const down = Math.abs(gateDelta);

    const skillPenaltyMultiplier =
      1 - Math.min(0.08 * down, 0.35);

    skillBonus *= skillPenaltyMultiplier;
  }

  // 4️⃣ LOSOWOŚĆ (MAŁA, KONTROLOWANA)
  const randomness =
    Math.random() * 0.2 - 0.1;

  // 5️⃣ FINALNA PRĘDKOŚĆ NA PROGU
  return (
    baseSpeed +
    gateDiff +
    skillBonus +
    randomness
  );
}
