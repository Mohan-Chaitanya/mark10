let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let checkButton = document.querySelector("#check-btn");
let message = document.querySelector("#err-message");
let noOfNotes = document.querySelectorAll("#no-of-notes");
let balanceAmount = document.querySelector("#return-amount");
let resetBtn = document.querySelector("#reset");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

resetBtn.addEventListener("click", refresh);
checkButton.addEventListener("click", function validateBillAmount() {
  //Hide the error Message initially
  hideMessage();
  //Validate for the bill amount to be greater than zero
  if (billAmount.value > 0) {
    if (cashGiven.value - billAmount.value < 0) {
      console.log(cashGiven.value);
      console.log(billAmount.value);
      //Error Message for minimum bill amount
      showMessage("Minimum cash given should be equal to bill amount");
    } else {
      let amountToBeReturned = cashGiven.value - billAmount.value;
      balanceAmount.innerText = "Balance Amount is : ₹" + amountToBeReturned;
      calculateChange(amountToBeReturned);
    }
  } else {
    //Error Message for negative bill amount
    showMessage("Bill amount should be more than zero");
  }
});

//Loopin through the array of notes availabel for the bill amount
function calculateChange(returnAmount) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
    returnAmount %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

//Show error message
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

//Hide error message
function hideMessage() {
  message.style.display = "none";
}

//Page Refresh Function
function refresh() {
  window.location.reload();
}
