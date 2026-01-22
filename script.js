const happyBtn = document.querySelector("#happy-btn");
const confusedBtn = document.querySelector("#confused-btn");
const sadBtn = document.querySelector("#sad-btn");
const lovingBtn = document.querySelector("#loving-btn");


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

confusedBtn.addEventListener("click", () => {
    updateCount(confusedBtn);
});

sadBtn.addEventListener("click", () => {
    updateCount(sadBtn);
});

lovingBtn.addEventListener("click", () => {
    updateCount(lovingBtn);
});



