function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");
const firstName = document.querySelector('#first');
const form = document.querySelector('form');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
close.forEach((span) => span.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form submit function for firstName
function firstNameValidator () {
  const divParent = firstName.parentNode
  if (firstName.value.length<2) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Message Erreur')
    return false
  } else {
    return true
  }
};

function formSubmit(e) {
  e.preventDefault()
  firstNameValidator()
};

// form submit
form.addEventListener("submit", formSubmit);














