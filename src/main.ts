import "./style.css";

const counterDiv: HTMLDivElement = document.createElement("div");
const button: HTMLButtonElement = document.createElement("button");
let count: number = 0;

document.body.append(counterDiv);
counterDiv.innerHTML += `Petals: ${count}`;

button.innerText = "🥀";
document.body.append(button);
button.addEventListener("click", (e) => {
  ++count;
  counterDiv.innerHTML = `Petals: ${count}`;
});
