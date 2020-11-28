// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 151; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  newDiv.appendChild(newImg);
  newDiv.appendChild(label);
  container.appendChild(newDiv);
}
