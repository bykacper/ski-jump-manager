import { competitors } from "./data/competitors.js";
import { competitions } from "./data/competitions.js";
import { generateSpeed } from "./utils/generateSpeed.js";
import { simulateTakeoff } from "./utils/simulateTakeoff.js";
import { simulateFlight } from "./utils/simulateFlight.js";
import { competitionsSettings } from "./competitionsSettings.js";
import { applyWindToDistance } from "./utils/applyWind.js";
import { calculateFlightStability } from "./utils/calculateFlightStability.js";
import { calculateStyleNotes } from "./utils/calculateStyleNotes.js";
import { calculateDistancePoints } from "./utils/calculateDistancePoints.js";
import { roundToHalfJumpDistance } from './helpers/roundToHalfJumpDistance.js'

competitors.forEach(competitor => {
    const approachSpeed = generateSpeed(competitor.abilityToGenerateSpeed, competitions[0].baseSpeed);
    const takeoff = simulateTakeoff(approachSpeed, competitor.takeofSkill);
    const flight = simulateFlight(takeoff.effectiveSpeed, competitor.flightSkill, competitions[0]);

    const distance = applyWindToDistance(
        flight.distance,
        competitionsSettings.wind,
        competitor.flightSkill,
        competitions[0].hsPoint
    );

    const roundedDistance = roundToHalfJumpDistance(distance);

    const flightStability = calculateFlightStability(
        competitor.flightSkill,
        competitionsSettings.wind
    );

    const styleNotes = calculateStyleNotes(flightStability);    
    const sortedNotes = [...styleNotes].sort((a, b) => a - b);
    const stylePoints = sortedNotes[1] + sortedNotes[2] + sortedNotes[3];

    const distancePoints = calculateDistancePoints(roundedDistance, competitions[0]);
    const totalPoints = Number(distancePoints) + Number(stylePoints);

    console.log(competitor.name,
        competitor.surname, ", ",
        approachSpeed.toFixed(1), " km/h - ",
        roundedDistance, "m |", 
        stylePoints, "j. pts. |",
        totalPoints, "p.");
});