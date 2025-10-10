import "./style.css";

const overallDiv: HTMLDivElement = document.createElement("div");
const infoDiv: HTMLDivElement = document.createElement("div");
const upgradeDiv: HTMLDivElement = document.createElement("div");
const counterDiv: HTMLDivElement = document.createElement("div");
const button: HTMLButtonElement = document.createElement("button");
const upgradeButton1: HTMLButtonElement = document.createElement("button");
let count: number = 0;
let growthRate: number = 0;

overallDiv.id = "overall";
document.body.append(overallDiv);
infoDiv.id = "info";
upgradeDiv.id = "upgrades";
infoDiv.className = "items";
upgradeDiv.className = "items";
overallDiv.append(infoDiv);
overallDiv.append(upgradeDiv);
infoDiv.append(counterDiv);
counterDiv.innerHTML += `Petals: ${count}`;

button.innerText = "🥀";
infoDiv.append(button);
button.addEventListener("click", () => {
  ++count;
  counterDiv.innerHTML = `Petals: ${count}`;
});

upgradeButton1.innerText = "Invest in a PetalPlucker 3000";
upgradeDiv.append(upgradeButton1);

growthRate = 0;

setInterval(() => {
  ++count;
  counterDiv.innerHTML = `Petals: ${count}`;
}, growthRate);
