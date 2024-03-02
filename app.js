const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

noBtn.addEventListener("mouseover", function () {
  function getRandomNumber() {
    return Math.floor(Math.random() * 301);
  }

  noBtn.style.left = getRandomNumber() + "px";
  noBtn.style.right = getRandomNumber() + "px";
  noBtn.style.top = getRandomNumber() + "px";
  noBtn.style.bottom = getRandomNumber() + "px";
});

yesBtn.addEventListener("click", function () {
  Toastify({
    text: "HASHA you're my ss now 🤪",
    className: "info",
    position: "center",
    style: {
      background: "linear-gradient(to right, #ff3ea5, #FFB5DA)",
    },
  }).showToast();
});
