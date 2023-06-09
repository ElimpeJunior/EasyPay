function call() {
  var receiver = document.querySelector("input[name=tel]").value;
  var amount = document.querySelector("input[name=number]").value;
  localStorage.setItem("receiver", receiver);
  localStorage.setItem("amount", amount);

if (!receiver || !amount) {
    return;
}
localStorage.setItem("receiver", receiver);
localStorage.setItem("amount", amount);

var ussd = `*126*9*${receiver}*${amount}%23`;

window.open(`tel:${ussd}`);
}

function initialize() {
  document.querySelector("#pay-btn").addEventListener("click", call);

  var storedAmount = localStorage.getItem("amount");
  document.getElementById("amount").value = storedAmount;

  var storedReceiver = localStorage.getItem("receiver");
  document.getElementById("receiver").value = storedReceiver;

  var storedMerchant = localStorage.getItem("merchant");
  document.getElementById("merchant").value = storedMerchant;
}
  



