// selected element
const readMBtns = document.querySelectorAll("#read-More-Btns");
const shdowOverlay = document.getElementsByClassName("shdow-Overlay")[0];
const cardBox = document.getElementsByClassName("card-Box")[0];

// gelobal varibales

// functions
const openCard = () => {
  cardBox.classList.remove("active");
  shdowOverlay.classList.remove("active");
};

// event linsters
readMBtns.forEach((readBtn) => {
  readBtn.addEventListener("click", () => {
    openCard();
  });
});
