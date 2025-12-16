import calculateHillBaseDistance from "./calculateHillBaseDistance.js";

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function randomFlightNoise() {
    return Math.random() * 3 - 1.5; // -1.5 .. +1.5 m
}

export default function calculateFlightDistance({
    attributes,
    state,
    takeoffQuality,
    context
}) {
    const { flight } = attributes;          // 0..100
    const { form, confidence } = state;     // form: -10..10
    const { kPoint, hillSize } = context;

    /**
     * 1️⃣ Potencjał z wybicia (mały!)
     * To NIE jest główne źródło metrów
     */
    const takeoffPotential = (takeoffQuality - 50) * 0.2;

    /**
     * 2️⃣ Nośność lotu (KLUCZ)
     * flight = 0   → ~0.15
     * flight = 50  → ~0.55
     * flight = 100 → 1.0
     */
    const flightLift =
        Math.pow(flight / 100, 1.2);

    /**
     * 3️⃣ Efektywna część lotna
     */
    const flightContribution =
        takeoffPotential * flightLift;

    /**
     * 4️⃣ TWARDY LIMIT DLA SŁABEGO LOTU
     * Brak umiejętności = szybkie opadanie
     */
    const flightPenalty =
        (1 - flightLift) * 18; // do -18 m

    /**
     * 5️⃣ Stan zawodnika (mały wpływ)
     */
    const stateModifier =
        form * 0.4 +
        (confidence - 50) * 0.04;

    const hillBase =
        calculateHillBaseDistance(context);

    let distance =
        hillBase +
        flightContribution -
        flightPenalty +
        stateModifier +
        randomFlightNoise();


    /**
     * 6️⃣ Ograniczenia HS 140
     */
    distance = clamp(
        distance,
        kPoint - 25, // ~100 m
        hillSize + 5 // ~145 m
    );

    return Number(distance.toFixed(1));
}
