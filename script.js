function updateCount(btnElement) {
    let countEl = btnElement.querySelector(".count");
    let countText = countEl.textContent;
    let currCount = Number(countText.split("/")[0]);
    if (currCount < 10)
        countEl.textContent = `${(currCount + 1)}/10`;
};




// we can catch all emoji buttons at once
const btns = document.querySelectorAll(".emoji-btn");
btns.forEach(btn => {
   btn.addEventListener("click", () => {
    updateCount(btn);
   });
});