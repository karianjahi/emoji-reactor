const happyBtn = document.querySelector("#happy-btn");

happyBtn.addEventListener("click", () => {
  let countEl = happyBtn.querySelector(".count");
  let countText = countEl.textContent;
  let currCount = Number(countText.split("/")[0]);
  if (currCount < 10) {
    countEl.textContent = `${(currCount + 1)}/10`;
  }

});


