require('bootstrap');
var createEl = require('./domMethods');

$(document).ready( function() {
  // DOM manipulation code specific to each page.
  })

$(document).ready(function() {
  var purchaseBtn = document.getElementById("purchaseBtn");
  var purchaseEmail = document.getElementById("purchaseEmail");
  var modalEl = document.querySelector(".modal-content");
  var modalBodyEl = document.querySelector(".modal-body");
  var modalFooterEl = document.querySelector(".modal-footer");

  function purchaseTicket () {
    modalEl.removeChild(modalBodyEl)
    modalEl.removeChild(modalFooterEl)
    modalEl.append(createEl("div", {class: "modal-body"},
      createEl("h5", {class: "modal-title"}, 
      `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
      ),
    ))
  }
  purchaseBtn.addEventListener("click", purchaseTicket);
}); 

