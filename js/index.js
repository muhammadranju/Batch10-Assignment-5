// Get Element by ID
function id(id) {
  return document.getElementById(id);
}
// All Cards Section and Donate History Section
const cardContainer = id("cardContainer");
const donateHistory = id("donateHistory");

// Donate Buttons
const donateBtn1 = id("donateBtn1");
const donateBtn2 = id("donateBtn2");
const donateBtn3 = id("donateBtn3");

// Donate Titles
const donateTitle1 = id("donateTitle1");
const donateTitle2 = id("donateTitle2");
const donateTitle3 = id("donateTitle3");

// Balance
const balance = id("balance");

// Donation and History Buttons
const donationButton = id("donationButton");
const historyButton = id("historyButton");

// Donation Button
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

// History Button
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

// Add Donate Button 1
donateBtn1.addEventListener("click", function () {
  const inputAmount1 = parseFloat(id("inputAmount1").value);
  const displayDonateAmount1 = parseFloat(id("displayDonateAmount1").innerText);

  if (isNaN(inputAmount1)) {
    alert("Please Enter Valid Amount");
    return;
  }
  if (inputAmount1 <= 0) {
    alert("Please Enter positive Amount");
    return;
  }
  const newBalance = balance.innerText - inputAmount1;
  if (newBalance < 0) {
    alert("Insufficient Balance you can't donate");
    return;
  }
  id("displayDonateAmount1").innerHTML = displayDonateAmount1 + inputAmount1;
  balance.innerText = newBalance;

  donateHistory.innerHTML += donateHistoryShow(
    inputAmount1,
    donateTitle1,
    showDate()
  );

  successModal.showModal();
  id("inputAmount1").value = "";
});
// Add Donate Button 2
donateBtn2.addEventListener("click", function () {
  const inputAmount2 = parseFloat(id("inputAmount2").value);
  const displayDonateAmount2 = parseFloat(id("displayDonateAmount2").innerText);

  if (isNaN(inputAmount2)) {
    alert("Please Enter Valid Amount");
    return;
  }
  if (inputAmount2 <= 0) {
    alert("Please Enter positive Amount");
    return;
  }
  const newBalance = balance.innerText - inputAmount2;
  if (newBalance < 0) {
    alert("Insufficient Balance you can't donate");
    return;
  }
  id("displayDonateAmount2").innerHTML = displayDonateAmount2 + inputAmount2;
  balance.innerText = newBalance;

  donateHistory.innerHTML += donateHistoryShow(
    inputAmount2,
    donateTitle2,
    showDate()
  );

  successModal.showModal();
  id("inputAmount2").value = "";
});
// Add Donate Button 3
donateBtn3.addEventListener("click", function () {
  const inputAmount3 = parseFloat(id("inputAmount3").value);
  const displayDonateAmount3 = parseFloat(id("displayDonateAmount3").innerText);

  if (isNaN(inputAmount3)) {
    alert("Please Enter Valid Amount");
    return;
  }
  if (inputAmount3 <= 0) {
    alert("Please Enter positive Amount");
    return;
  }
  const newBalance = balance.innerText - inputAmount3;
  if (newBalance < 0) {
    alert("Insufficient Balance you can't donate");
    return;
  }
  id("displayDonateAmount3").innerHTML = displayDonateAmount3 + inputAmount3;
  balance.innerText = newBalance;

  donateHistory.innerHTML += donateHistoryShow(
    inputAmount3,
    donateTitle3,
    showDate()
  );

  successModal.showModal();
  id("inputAmount3").value = "";
});
