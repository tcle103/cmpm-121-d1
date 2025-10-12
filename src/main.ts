import "./style.css";

const overallDiv: HTMLDivElement = document.createElement("div");
const infoDiv: HTMLDivElement = document.createElement("div");
const upgradeDiv: HTMLDivElement = document.createElement("div");
const counterDiv: HTMLDivElement = document.createElement("div");
const growthDiv: HTMLDivElement = document.createElement("div");
const button: HTMLButtonElement = document.createElement("button");
const upgradeButton1: HTMLButtonElement = document.createElement("button");
let count: number = 0;
let growthRate: number = 0;
let start: number = performance.now();

function updatePetals(amt: number): void {
  count += amt;
  counterDiv.innerHTML = `Petals: ${count.toFixed(2)}`;
}

function updateGrowth(amt: number): void {
  growthRate += amt;
  growthDiv.innerHTML = `${growthRate.toFixed(1)} petals/sec`;
}

function incrementer() {
  const now = performance.now();
  const elapsed = now - start;
  start = now;

  const inc = elapsed / 1000 * growthRate;
  updatePetals(inc);
  if (count >= 10) {
    upgradeButton1.disabled = false;
  }
  requestAnimationFrame(incrementer);
}

overallDiv.id = "overall";
document.body.append(overallDiv);
infoDiv.id = "info";
upgradeDiv.id = "upgrades";
infoDiv.className = "items";
upgradeDiv.className = "items";
overallDiv.append(infoDiv);
overallDiv.append(upgradeDiv);

infoDiv.append(counterDiv);
infoDiv.append(growthDiv);
growthDiv.innerHTML = `${growthRate.toFixed(1)} petals/sec`;
counterDiv.innerHTML = `Petals: ${count.toFixed(2)}`;

button.innerText = "🥀";
infoDiv.append(button);
button.addEventListener("click", () => {
  updatePetals(1);
  if (count >= 10) {
    upgradeButton1.disabled = false;
  }
});

upgradeButton1.innerText = "Invest in a PetalPlucker 3000";
upgradeDiv.append(upgradeButton1);
upgradeButton1.addEventListener("click", () => {
  updateGrowth(1);
  upgradeButton1.disabled = true;
  updatePetals(-10);
});
upgradeButton1.disabled = true;

requestAnimationFrame(incrementer);
