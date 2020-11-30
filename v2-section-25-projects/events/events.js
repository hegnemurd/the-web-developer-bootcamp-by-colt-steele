const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("You clicked the button.");
};

function mouseEntered() {
  console.log("You hovered over me.");
}

btn.onmouseenter = mouseEntered;

document.querySelector("h1").onclick = () => {
  alert("You clicked the h1.");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("mouseup", function () {
  console.log("You clicked button 3!!!");
});

function twist() {
  console.log("Twist");
}

function shout() {
  console.log("Shout");
}

const tasButton = document.querySelector("#twistAShout");

// tasButton.onclick = twist;
// tasButton.onclick = shout;

// tasButton.addEventListener("click", () => { ...code... })

tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);
