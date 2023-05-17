function call() {
  var receiver = document.querySelector("input[name=tel]").value;
  var amount = document.querySelector("input[name=number]").value;
  localStorage.setItem("receiver", receiver);
  localStorage.setItem("amount", amount);

  if (!receiver || !amount) {
    return;
  }

  var ussd = `tel:*126*9*${receiver}*${amount}%23`;

  window.location.href = ussd;
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
  



