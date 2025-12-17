import { competitors } from "./data/competitors.js";
import { competitions } from "./data/competitions.js";
import { generateSpeed } from "./utils/generateSpeed.js";

competitors.forEach(competitor => {
    const approachSpeed = generateSpeed(competitor.abilityToGenerateSpeed, competitions[0].baseSpeed);
    console.log(`${competitor.name} ${competitor.surname} - ${approachSpeed.toFixed(1)} km/h`);
});