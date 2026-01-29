// Surprise gift logic (used in surprise.html)
function openGift(box) {
  const surprises = [
    { img: "images/teddy.png", text: "You got a Teddy 🧸!" },
    { img: "images/chocolate.png", text: "You got Chocolate 🍫!" },
    { img: "images/bouquet.png", text: "You got a Bouquet 🎁!" },
    { img: "images/balloons.png", text: "You got Balloons 🎈!" },
    { img: "images/gift kit.png", text: "You got a Surprise Kit 🎉!" }
  ];

  const randomIndex = Math.floor(Math.random() * surprises.length);
  const chosen = surprises[randomIndex];

  box.innerHTML = `
    <img src="${chosen.img}" alt="Surprise" style="width:150px;"><br>
    <span>${chosen.text}</span>
  `;

  let boxes = document.querySelectorAll(".box");
  boxes.forEach(b => b.style.pointerEvents = "none");

  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.classList.remove("hidden");
  }
}

// Valentine page logic
function yesValentine() {
  // go to yes.html
  location.href = 'yes.html';
}

function noValentine() {
  // reload same question page
  location.href = 'valentine.html';
}

