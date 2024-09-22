document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const noakhaliDonateValue = inputValue("noakhali-input");
    const myBalance = parseFloat(
      document.getElementById("my-balance").innerText
    );
    const noakhaliTotalDonate = parseFloat(
      document.getElementById("noakhali-total").innerText
    );
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

      document.getElementById("noakhali-total").innerText = noakhaliTotal;
      document.getElementById("my-balance").innerText = noakhaliDonate;
      document.getElementById("noakhali-input").value = "";

      const modal = document.getElementById("show-modal");
      modal.showModal();
    }
  });
document
  .getElementById("feni-btn")
  .addEventListener("click", function () {
    const feniDonateValue = inputValue("feni-input");
    const myBalance = parseFloat(
      document.getElementById("my-balance").innerText
    );
    const feniTotalDonate = parseFloat(
      document.getElementById("feni-total").innerText
    );
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

      document.getElementById("feni-total").innerText = feniTotal;
      document.getElementById("my-balance").innerText = feniDonate;
      document.getElementById("feni-input").value = "";

      const modal = document.getElementById("show-modal");
      modal.showModal();
    }
  });
document
  .getElementById("quota-btn")
  .addEventListener("click", function () {
    const quotaDonateValue = inputValue("quota-input");
    const myBalance = parseFloat(
      document.getElementById("my-balance").innerText
    );
    const quotaTotalDonate = parseFloat(
      document.getElementById("quota-total").innerText
    );
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

      document.getElementById("quota-total").innerText = quotaTotal;
      document.getElementById("my-balance").innerText = quotaDonate;
      document.getElementById("quota-input").value = "";

      const modal = document.getElementById("show-modal");
      modal.showModal();
    }
  });
