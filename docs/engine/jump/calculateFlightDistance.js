import calculateWindEffect from "./calculateWindEffect.js";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

// losowość zależna od klasy zawodnika
function randomFlightNoise(flight) {
  const base = 0.8;                    // minimum dla słabych
  const extra = (flight / 100) * 1.7;  // więcej dla topów
  const range = base + extra;          // max ~2.5 m

  return Math.random() * range * 2 - range;
}

export default function calculateFlightDistance({
  attributes,
  state,
  takeoffQuality,
  context,
  localWind
}) {
  const { flight } = attributes;
  const { form, confidence } = state;
  const { kPoint, hillSize } = context;

  // 1️⃣ baza fizyczna skoczni (NIE K-point)
  const hillBase =
    kPoint + (hillSize - kPoint) * 0.35;

  // 2️⃣ potencjał z wybicia (mały, kontrolowany)
  const takeoffPotential =
    (takeoffQuality - 50) * 0.2;

  // 3️⃣ nośność lotu (flight = klucz)
  const flightLift =
    Math.pow(flight / 100, 1.2);

  const flightContribution =
    takeoffPotential * flightLift;

  // 4️⃣ kara za brak lotu
  const flightPenalty =
    (1 - flightLift) * 18;

  // 5️⃣ stan zawodnika
  const stateModifier =
    form * 0.4 +
    (confidence - 50) * 0.04;

  // 6️⃣ wiatr (metry, bez punktów)
  const windEffect =
    calculateWindEffect(localWind);

  // 7️⃣ finalny dystans
  let distance =
    hillBase +
    flightContribution -
    flightPenalty +
    stateModifier +
    windEffect +
    randomFlightNoise(flight);

  // 8️⃣ ograniczenia realistyczne
  distance = clamp(
    distance,
    kPoint - 25,  // ~100 m
    hillSize + 5  // ~145 m
  );

  return Number(distance.toFixed(1));
}
