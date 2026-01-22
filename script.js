const happyBtn = document.querySelector("#happy-btn");


function updateCount(btnElement) {
    let countEl = btnElement.querySelector(".count");
    let countText = countEl.textContent;
    let currCount = Number(countText.split("/")[0]);
    if (currCount < 10)
        countEl.textContent = `${(currCount + 1)}/10`;
};

happyBtn.addEventListener("click", () => {
    updateCount(happyBtn);
});

