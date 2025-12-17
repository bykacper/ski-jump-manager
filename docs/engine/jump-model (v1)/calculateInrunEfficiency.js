export default function calculateInrunEfficiency(competitor) {
  const { attributes, state } = competitor;

  const base =
    attributes.inrunTechnique * 0.7 +
    state.form * 2.0 +
    state.confidence * 0.2;

  const fatiguePenalty = state.fatigue * 0.3;
  const efficiency = base - fatiguePenalty;

  return efficiency;
}
