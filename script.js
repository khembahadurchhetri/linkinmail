function openGift(box) {
  document.getElementById("giftMessage").innerText = "🎉 You got a Teddy! 🧸";
  let boxes = document.querySelectorAll(".box");
  boxes.forEach(b => b.style.pointerEvents = "none"); // disable other boxes
  document.getElementById("nextBtn").classList.remove("hidden");
}

function yesValentine() {
  document.getElementById("yesPage").classList.remove("hidden");
}

function noValentine() {
  // reload same page (loop back)
  location.href = 'valentine.html';
}