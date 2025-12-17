import { competitionsSettings } from '../competitionsSettings.js'; 
import { competitions } from '../data/competitions.js'; 

export function generateSpeed(abilityToGenerateSpeed, baseSpeed) { 
    const gateDiff = (competitionsSettings.gate - competitions[0].baseGate) * competitions[0].speedDiff; 
    const randomness = (Math.random() * 0.2 - 0.1).toFixed(1); 
    
    if(abilityToGenerateSpeed === 100) { 
        return (baseSpeed + 1.6) + Number(randomness) + gateDiff; 
    } else if(abilityToGenerateSpeed > 90) { 
        return (baseSpeed + 1.3) + Number(randomness) + gateDiff; 
    } else if(abilityToGenerateSpeed > 80) { 
        return (baseSpeed + 1) + Number(randomness) + gateDiff; 
    } else if(abilityToGenerateSpeed > 65) { 
        return (baseSpeed + 0.7) + Number(randomness) + gateDiff; 
    } else if(abilityToGenerateSpeed > 50) { 
        return (baseSpeed + 0.4) + Number(randomness) + gateDiff; 
    } else if(abilityToGenerateSpeed > 35) { 
        return (baseSpeed + 0.1) + Number(randomness) + gateDiff; 
    } else if(abilityToGenerateSpeed > 20) { 
        return (baseSpeed - 0.2) + Number(randomness) + gateDiff; 
    } else if(abilityToGenerateSpeed > 5) { 
        return (baseSpeed - 0.5) + Number(randomness) + gateDiff; 
    } else { 
        return (baseSpeed - 0.8) + Number(randomness) + gateDiff; 
    } 
}