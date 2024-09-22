function id(id) {
  return document.getElementById(id);
}

const cardContainer = id("cardContainer");
const donateHistory = id("donateHistory");

const donateBtn1 = id("donateBtn1");
const donateBtn2 = id("donateBtn2");
const donateBtn3 = id("donateBtn3");

const donateTitle1 = id("donateTitle1");
const donateTitle2 = id("donateTitle2");
const donateTitle3 = id("donateTitle3");

const balance = id("balance");

const donationButton = id("donationButton");
const historyButton = id("historyButton");

donationButton.addEventListener("click", function () {
  donateHistory.classList.add("hidden");
  cardContainer.classList.remove("hidden");

  historyButton.classList.remove(
    "bg-primaryColor",
    "hover:bg-primaryHoverColor"
  );
  historyButton.classList.add("btn-outline");

  donationButton.classList.remove("btn-outline");
  donationButton.classList.add("bg-primaryColor", "hover:bg-primaryHoverColor");
});

historyButton.addEventListener("click", function () {
  donateHistory.classList.remove("hidden");
  cardContainer.classList.add("hidden");

  donationButton.classList.remove(
    "bg-primaryColor",
    "hover:bg-primaryHoverColor"
  );
  donationButton.classList.add("btn-outline");

  historyButton.classList.remove("btn-outline");
  historyButton.classList.add("bg-primaryColor", "hover:bg-primaryHoverColor");
});
