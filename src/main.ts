import "./style.css";

const counterDiv: HTMLDivElement = document.createElement("div");
const button: HTMLButtonElement = document.createElement("button");
let count: number = 0;
let growthRate: number = 0;

document.body.append(counterDiv);
counterDiv.innerHTML += `Petals: ${count}`;

button.innerText = "🥀";
document.body.append(button);
button.addEventListener("click", () => {
  ++count;
  counterDiv.innerHTML = `Petals: ${count}`;
});

growthRate = 0;

setInterval(() => {
  ++count;
  counterDiv.innerHTML = `Petals: ${count}`;
}, growthRate);
