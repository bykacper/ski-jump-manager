import { competitors } from "./data/competitors.js";
import simulateJump from "./simulateJump.js";
import generateWindTrend from "./generateWindTrend.js";

const hill = {
  baseInrunSpeed: 90,
  baseGate: 10,
  gate: 10,
  kPoint: 120,
  hillSize: 142
};

const button = document.getElementById("simulate");
const tbody = document.getElementById("results");

button.addEventListener("click", () => {
  tbody.innerHTML = "";

  // 🔑 WIATR KONKURSU
  const windTrend = generateWindTrend();

  const results = competitors.map(c => {
    const result =
      simulateJump(c, hill, windTrend);

    return { ...c, ...result };
  });

  results
    .sort((a, b) => b.distance - a.distance)
    .forEach((r, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td> </td>
        <td>${r.name}</td>
        <td>${r.nation}</td>
        <td>${r.inrunSpeed} km/h</td>
        <td>${r.wind.direction} ${r.wind.strength} m/s</td>
        <td> 10 </td>
        <td></td>
        <td></td>
        <td>${r.distance} m</td>
        <td></td>
      `;
      tbody.appendChild(tr);
    });
});
