// selected element
const readMBtns = document.querySelectorAll("#read-More-Btns");
const shdowOverlay = document.getElementsByClassName("shdow-Overlay")[0];
const cardBox = document.getElementsByClassName("card-Box")[0];
const closeCardBtn = document.getElementsByClassName("close-Card-Btn")[0];
const shadowOverlayClicker = document.getElementsByClassName(
  "shadow-Overlay-Clicker"
)[0];

// gelobal varibales

// functions

// open card function
const openCard = () => {
  cardBox.classList.remove("active");
  shdowOverlay.classList.remove("active");
  shadowOverlayClicker.classList.add("active");
};

// close card function
const closeCard = () => {
  cardBox.classList.add("active");
  shdowOverlay.classList.add("active");
  shadowOverlayClicker.classList.remove("active");
};

// event linsters
readMBtns.forEach((readBtn) => {
  readBtn.addEventListener("click", () => {
    openCard();
  });
});
closeCardBtn.addEventListener("click", closeCard);
addEventListener("keydown", (e) => {
  let closeKey = e.key;
  if (closeKey === "Escape") {
    closeCard();
  }
});
shadowOverlayClicker.addEventListener("click", () => {
  closeCard();
  console.log("added");
});
