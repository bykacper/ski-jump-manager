export default function calculateBaseInrunSpeed(context) {
  const { baseInrunSpeed, baseGate, gate } = context;

  return baseInrunSpeed + (gate - baseGate) * 0.6;
}