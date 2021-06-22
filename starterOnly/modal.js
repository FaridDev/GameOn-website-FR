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
const firstInput = document.querySelector('input');

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

// ckeck input validity
firstInput.addEventListener('input', () => {
  firstInput.setCustomValidity(' ');
  firstInput.checkValidity();
});

// invalid event with error message
firstInput.addEventListener('invalid', () => {
  if(firstInput.value === '') {
    firstInput.setCustomValidity('Veuillez saisir votre prénom !');
  } else {
    firstInput.setCustomValidity('Votre prénom ne doit contenir que des lettres');
  }
});










