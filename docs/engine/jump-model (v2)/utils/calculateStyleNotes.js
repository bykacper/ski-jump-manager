function getStyleRangeFromStability(stability) {
  if (stability < 0.20) return [12.5, 14.5];
  if (stability < 0.40) return [14.5, 16.5];
  if (stability < 0.60) return [16.5, 17.5];
  if (stability < 0.70) return [17.5, 18.5];
  if (stability < 0.80) return [18.5, 19.0];
  if (stability < 0.95) return [19.0, 19.5];
  return [20.0, 20.0];
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

export function calculateStyleNotes(stability) {
  const [minNote, maxNote] =
    getStyleRangeFromStability(stability);

  const notes = [];

  for (let i = 0; i < 5; i++) {
    let note =
      minNote === maxNote
        ? minNote
        : randomBetween(minNote, maxNote);

    // minimalna indywidualność sędziego
    note += Math.random() * 0.2 - 0.1;

    // clamp bezpieczeństwa
    note = Math.max(12.5, Math.min(20.0, note));

    // zaokrąglenie do 0.5
    note = Math.round(note * 2) / 2;

    notes.push(note);
  }

  return notes;
}
