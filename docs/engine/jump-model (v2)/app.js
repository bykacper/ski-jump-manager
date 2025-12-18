import { competitors } from "./data/competitors.js";
import { competitions } from "./data/competitions.js";
import { generateSpeed } from "./utils/generateSpeed.js";
import { simulateTakeoff } from "./utils/simulateTakeoff.js";
import { simulateFlight } from "./utils/simulateFlight.js";

competitors.forEach(competitor => {
    const approachSpeed = generateSpeed(competitor.abilityToGenerateSpeed, competitions[0].baseSpeed);
    const takeoff = simulateTakeoff(approachSpeed, competitor.takeofSkill);
    const flight = simulateFlight(takeoff.effectiveSpeed, competitor.flightSkill, competitions[0]);

    console.log(competitor.name, 
                competitor.surname, ", ", 
                approachSpeed.toFixed(1), " - ", 
                takeoff.effectiveSpeed.toFixed(1), ", ", 
                takeoff.takeoffMultiplier.toFixed(2), ", ", 
                flight.distance.toFixed(0), " m");
});