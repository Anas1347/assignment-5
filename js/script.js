document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const noakhaliDonateValue = inputValue("noakhali-input");
    const myBalance = textField("my-balance");
    const noakhaliTotalDonate = textField("noakhali-total");
    if (
      isNaN(noakhaliDonateValue) ||
      noakhaliDonateValue <= 0 ||
      noakhaliDonateValue > myBalance
    ) {
      const modalInvalid = document.getElementById("show-modal-invalid");
      modalInvalid.showModal();
      document.getElementById("noakhali-input").value = "";
    } else {
      const noakhaliDonate = myBalance - noakhaliDonateValue;
      const noakhaliTotal = noakhaliTotalDonate + noakhaliDonateValue;

      document.getElementById("noakhali-total").innerText =
        noakhaliTotal.toFixed(2);
      document.getElementById("my-balance").innerText =
        noakhaliDonate.toFixed(2);
      document.getElementById("noakhali-input").value = "";

      const modal = document.getElementById("show-modal");
      modal.showModal();
      const historyList = document.createElement("div");
      historyList.className =
        "container mx-auto mt-5 bg-gray-50 rounded-lg border border-gray-300 shadow-md p-4 mb-4";
      historyList.innerHTML = `<p>${noakhaliDonateValue.toFixed(
        2
      )} Tk donated for Support Flood Relief  Noakhali, Bangladesh</p>
      <p> ${new Date().toLocaleString()}</p`;
      const historyContainer = document.getElementById("history-list");
      historyContainer.insertBefore(historyList, historyContainer.firstChild);
    }
  });
document.getElementById("feni-btn").addEventListener("click", function () {
  const feniDonateValue = inputValue("feni-input");
  const myBalance = textField("my-balance");
  const feniTotalDonate = textField("feni-total");
  if (
    isNaN(feniDonateValue) ||
    feniDonateValue <= 0 ||
    feniDonateValue > myBalance
  ) {
    const modalInvalid = document.getElementById("show-modal-invalid");
    modalInvalid.showModal();
    document.getElementById("feni-input").value = "";
  } else {
    const feniDonate = myBalance - feniDonateValue;
    const feniTotal = feniTotalDonate + feniDonateValue;

    document.getElementById("feni-total").innerText = feniTotal.toFixed(2);
    document.getElementById("my-balance").innerText = feniDonate.toFixed(2);
    document.getElementById("feni-input").value = "";

    const modal = document.getElementById("show-modal");
    modal.showModal();
    const historyList = document.createElement("div");
    historyList.className =
      "container mx-auto mt-5 bg-gray-50 rounded-lg border border-gray-300 shadow-md p-4 mb-4";
    historyList.innerHTML = `<p>${feniDonateValue.toFixed(
      2
    )} Tk donated for Flood Relief in Feni, Bangladesh</p>
    <p>${new Date().toLocaleString()}</p>`;
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyList, historyContainer.firstChild);
  }
});
document.getElementById("quota-btn").addEventListener("click", function () {
  const quotaDonateValue = inputValue("quota-input");
  const myBalance = textField("my-balance");
  const quotaTotalDonate = textField("quota-total");
  if (
    isNaN(quotaDonateValue) ||
    quotaDonateValue <= 0 ||
    quotaDonateValue > myBalance
  ) {
    const modalInvalid = document.getElementById("show-modal-invalid");
    modalInvalid.showModal();
    document.getElementById("quota-input").value = "";
  } else {
    const quotaDonate = myBalance - quotaDonateValue;
    const quotaTotal = quotaTotalDonate + quotaDonateValue;

    document.getElementById("quota-total").innerText = quotaTotal.toFixed(2);
    document.getElementById("my-balance").innerText = quotaDonate.toFixed(2);
    document.getElementById("quota-input").value = "";

    const modal = document.getElementById("show-modal");
    modal.showModal();
    const historyList = document.createElement("div");
    historyList.className =
      "container mx-auto mt-5 bg-gray-50 rounded-lg border border-gray-300 shadow-md p-4 mb-4";
    historyList.innerHTML = `<p>${quotaDonateValue.toFixed(
      2
    )} Tk donated on Aid for Injured in the Quota Movement, Bangladesh</p>
    <p>${new Date().toLocaleString()}</p>`;
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyList, historyContainer.firstChild);
  }
});

const history = document.getElementById("history-btn");
const donation = document.getElementById("donation-btn");
history.addEventListener("click", function () {
  history.classList.add("btn-success", "text-white", "font-bold");
  history.classList.remove("bg-white");
  donation.classList.remove("btn-success", "text-white", "font-bold");
  donation.classList.add("bg-white");

  const historyEvent = document.getElementById("history-click-event");
  historyEvent.classList.add("hidden");
  document.getElementById("history-hide").classList.remove("hidden");
});
donation.addEventListener("click", function () {
  history.classList.remove("btn-success", "text-white", "font-bold");
  history.classList.add("bg-white");
  donation.classList.add("btn-success", "text-white", "font-bold");
  donation.classList.remove("bg-white");

  const historyEvent = document.getElementById("history-click-event");
  historyEvent.classList.remove("hidden");
  document.getElementById("history-hide").classList.add("hidden");
});
