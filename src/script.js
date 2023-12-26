// selected element
const readMBtns = document.querySelectorAll("#read-More-Btns");

// gelobal varibales

// functions
const openCard = (readBtn, index, unknown1) => {
  console.log("button element: ", readBtn);
  console.log("index: ", index);
  console.log("nodelist :", unknown1);
};

// event linsters
readMBtns.forEach((readBtn, index, unknown1) => {
  readBtn.addEventListener("click", () => {
    openCard(readBtn, index, unknown1);
  });
});
