export default function calculateGateCompensation({
  gate,
  baseGate,
  gatePointValue
}) {
  const gateDiff = baseGate - gate; 
  // niższa belka = dodatnia rekompensata

  const compensation = gateDiff * gatePointValue;

  return Number(compensation.toFixed(1));
}
