import "./style.css";

const overallDiv: HTMLDivElement = document.createElement("div");
const infoDiv: HTMLDivElement = document.createElement("div");
const counterDiv: HTMLDivElement = document.createElement("div");
const button: HTMLButtonElement = document.createElement("button");
let count: number = 0;
let growthRate: number = 0;

overallDiv.id = "overall";
document.body.append(overallDiv);
infoDiv.id = "info";
overallDiv.append(infoDiv);
infoDiv.append(counterDiv);
counterDiv.innerHTML += `Petals: ${count}`;

button.innerText = "🥀";
infoDiv.append(button);
button.addEventListener("click", () => {
  ++count;
  counterDiv.innerHTML = `Petals: ${count}`;
});

growthRate = 0;

setInterval(() => {
  ++count;
  counterDiv.innerHTML = `Petals: ${count}`;
}, growthRate);
