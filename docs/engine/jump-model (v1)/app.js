import { competitors } from "./data/competitors.js";
import simulateJump from "./simulateJump.js";
import generateWindTrend from "./generateWindTrend.js";

const hill = {
  baseInrunSpeed: 91,
  baseGate: 10,
  gate: 9,
  kPoint: 125,
  hillSize: 140,
  gatePointValue: 3.0
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
        <td>${r.inrunSpeed.toFixed(1)} km/h</td>
        <td>${r.wind.direction == "head" ? "+" : "-"}${r.wind.strength} m/s</td>
        <td>${r.points.windComp}</td>
        <td>${hill.gate} </td>
        <td></td>
        <td>${r.points.style.toFixed(1)}</td> 
        <td>${r.distance} m</td>
        <td>${r.points.total}</td>
      `;
      tbody.appendChild(tr);
    });
});
