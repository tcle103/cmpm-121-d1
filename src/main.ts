import "./style.css";

const overallDiv: HTMLDivElement = document.createElement("div");
const infoDiv: HTMLDivElement = document.createElement("div");
const upgradeDiv: HTMLDivElement = document.createElement("div");
const counterDiv: HTMLDivElement = document.createElement("div");
const growthDiv: HTMLDivElement = document.createElement("div");
const ownedDiv: HTMLDivElement = document.createElement("div");
const buttDivs: HTMLDivElement[] = [];
const button: HTMLButtonElement = document.createElement("button");
interface Item {
  name: string;
  cost: number;
  rate: number;
  owned: number;
  short: string;
}
const availableItems: Item[] = [
  {
    name: "PetalPlucker 3000",
    cost: 10,
    rate: 0.1,
    owned: 0,
    short: "PetalPlucker",
  },
  {
    name: "BloomBuster 250",
    cost: 100,
    rate: 2,
    owned: 0,
    short: "BloomBuster",
  },
  {
    name: "FlowerMower X",
    cost: 1000,
    rate: 50,
    owned: 0,
    short: "FlowerMower",
  },
];
const buttons: HTMLButtonElement[] = [];

let count: number = 0;
let growthRate: number = 0;
let start: number = performance.now();

function updatePetals(amt: number): void {
  count += amt;
  counterDiv.innerHTML = `Petals: ${count.toFixed(2)}`;
  updateButton();
}

function updateButton(): void {
  for (let i: number = 0; i < buttons.length; ++i) {
    if (count >= availableItems[i].cost) {
      buttons[i].disabled = false;
    } else {
      buttons[i].disabled = true;
    }
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

function updateOwned(itemNum: number): void {
  buttDivs[itemNum].innerHTML = `${availableItems[itemNum].short}s: ${
    availableItems[itemNum].owned
  } owned`;
  buttDivs[itemNum].style.display = "block";
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

for (let i = 0; i < availableItems.length; ++i) {
  const div = document.createElement("div");
  buttDivs.push(div);
  div.innerText = `${availableItems[i].short}s: ${
    availableItems[i].owned
  } owned`;
  div.className = "inner";
  div.style.display = "none";
  ownedDiv.append(div);
}

for (let i = 0; i < availableItems.length; ++i) {
  const butt = document.createElement("button");
  buttons.push(butt);
  butt.innerText = `Invest in a ${availableItems[i].name} for ${
    availableItems[i].cost
  } petals\n(+${availableItems[i].rate} petals/sec)`;
  butt.id = `${i}`;
  butt.addEventListener("click", (e) => {
    const butt: EventTarget | null = e?.target;
    if (butt instanceof Element) {
      const itemNum = Number(butt.id);
      ++availableItems[itemNum].owned;
      updateGrowth(availableItems[itemNum].rate);
      updateButton();
      updatePetals(-availableItems[itemNum].cost);
      updateOwned(itemNum);
      availableItems[itemNum].cost = availableItems[itemNum].cost * 1.15;
      butt.innerHTML = `Invest in a ${availableItems[i].name} for ${
        availableItems[i].cost.toFixed(1)
      } petals\n(+${availableItems[i].rate} petals/sec)`;
    }
  });
  upgradeDiv.append(butt);
}

requestAnimationFrame(incrementer);
