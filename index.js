const feedbackLevels = document.querySelectorAll(".feedback-level");
const selectedRating = document.querySelector(".selected-rating")

for (let i = 0; i < 5; i++) {
  const level = feedbackLevels[i];

  level.addEventListener("click", (event) => {
    feedbackLevels.forEach(level => level.classList.remove("selected"));
    level.classList.add("selected");
    selectedRating.innerText = level.innerText;
  });
}

function submit() {
  if (!selectedRating.innerText.length) {
    alert("You need to select a rating first!");
    return;
  }
  const thanksContainer = document.querySelector(".thank-you-container");
  const feedbackContainer = document.querySelector(".feedback-container");

  thanksContainer.style.display = "block";
  feedbackContainer.style.display = "none";
}