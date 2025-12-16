import { competitors } from "./data/competitors.js";
import simulateJump from "./simulateJump.js";
import generateWindTrend from "./generateWindTrend.js";

const hill = {
  baseInrunSpeed: 87,
  baseGate: 8,
  gate: 8,
  kPoint: 116,
  hillSize: 130
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
    .sort((a, b) => b.points.total - a.points.total)
    .forEach((r, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td> </td>
        <td>${r.name}</td>
        <td>${r.nation}</td>
        <td>${r.inrunSpeed} km/h</td>
        <td>${r.wind.direction} ${r.wind.strength} m/s</td>
        <td>${r.points.windComp}</td>
        <td> 10 </td>
        <td></td>
        <td>${r.points.styleTotal.toFixed(1)}</td>
        <td>${r.distance} m</td>
        <td>${r.points.total}</td>
      `;
      tbody.appendChild(tr);
    });
});
