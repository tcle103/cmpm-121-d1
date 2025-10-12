import "./style.css";

const overallDiv: HTMLDivElement = document.createElement("div");
const infoDiv: HTMLDivElement = document.createElement("div");
const upgradeDiv: HTMLDivElement = document.createElement("div");
const counterDiv: HTMLDivElement = document.createElement("div");
const growthDiv: HTMLDivElement = document.createElement("div");
const ownedDiv: HTMLDivElement = document.createElement("div");
const butt1Div: HTMLDivElement = document.createElement("div");
const butt2Div: HTMLDivElement = document.createElement("div");
const butt3Div: HTMLDivElement = document.createElement("div");
const button: HTMLButtonElement = document.createElement("button");
const upgradeButton1: HTMLButtonElement = document.createElement("button");
const upgradeButton2: HTMLButtonElement = document.createElement("button");
const upgradeButton3: HTMLButtonElement = document.createElement("button");
let count: number = 0;
let growthRate: number = 0;
let start: number = performance.now();
let butt1Owned: number = 0;
let butt2Owned: number = 0;
let butt3Owned: number = 0;

function updatePetals(amt: number): void {
  count += amt;
  counterDiv.innerHTML = `Petals: ${count.toFixed(2)}`;
  updateButton();
}

function updateButton(): void {
  if (count >= 10) {
    upgradeButton1.disabled = false;
  } else {
    upgradeButton1.disabled = true;
  }
  if (count >= 100) {
    upgradeButton2.disabled = false;
  } else {
    upgradeButton2.disabled = true;
  }
  if (count >= 1000) {
    upgradeButton3.disabled = false;
  } else {
    upgradeButton3.disabled = true;
  }
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
ownedDiv.className = "inner";
counterDiv.className = "inner";
growthDiv.className = "inner";
growthDiv.innerHTML = `${growthRate.toFixed(1)} petals/sec`;
counterDiv.innerHTML = `Petals: ${count.toFixed(2)}`;

button.innerText = "🥀";
infoDiv.append(button);
button.addEventListener("click", () => {
  updatePetals(1);
});

infoDiv.append(ownedDiv);
ownedDiv.append(butt1Div);
ownedDiv.append(butt2Div);
ownedDiv.append(butt3Div);
butt1Div.className = "inner";
butt2Div.className = "inner";
butt1Div.innerHTML = `PetalPluckers: ${butt1Owned} owned`;
butt2Div.innerHTML = `BloomBusters: ${butt2Owned} owned`;
butt3Div.innerHTML = `FlowerMowers: ${butt3Owned} owned`;
butt1Div.style.display = "none";
butt2Div.style.display = "none";
butt3Div.style.display = "none";

upgradeButton1.innerText =
  "Invest in a PetalPlucker 3000 for 10 petals\n(+0.1 petals/sec)";
upgradeDiv.append(upgradeButton1);
upgradeButton1.addEventListener("click", () => {
  updateGrowth(.1);
  updateButton();
  updatePetals(-10);
  butt1Div.style.display = "block";
  butt1Div.innerHTML = `PetalPluckers: ${++butt1Owned} owned`;
});
upgradeButton1.disabled = true;

upgradeButton2.innerText =
  "Invest in a BloomBuster 250 for 100 petals\n(+2.0 petals/sec)";
upgradeDiv.append(upgradeButton2);
upgradeButton2.addEventListener("click", () => {
  updateGrowth(2);
  updateButton();
  updatePetals(-100);
  butt2Div.style.display = "block";
  butt2Div.innerHTML = `BloomBusters: ${++butt2Owned} owned`;
});
upgradeButton2.disabled = true;

upgradeButton3.innerText =
  "Invest in a FlowerMower X for 1000 petals\n(+50 petals/sec)";
upgradeDiv.append(upgradeButton3);
upgradeButton3.addEventListener("click", () => {
  updateGrowth(50);
  updateButton();
  updatePetals(-1000);
  butt3Div.style.display = "block";
  butt3Div.innerHTML = `FlowerMowers: ${++butt3Owned} owned`;
});
upgradeButton3.disabled = true;

requestAnimationFrame(incrementer);
