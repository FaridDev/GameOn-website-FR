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
const form = document.querySelector('form');
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');


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

// form submit
form.addEventListener("submit", formSubmit);

// form submit function for firstName
function firstNameValidator() {
  const divParent = firstName.parentNode
  if (firstName.value.length < 2) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Veuillez taper votre prénom')
    return false
  } else {
    return true
  }
};

function formSubmit(e) {
  e.preventDefault()
  firstNameValidator()
};


// form submit function for lastName
function lastNameValidator() {
  const divParent = lastName.parentNode
  if (lastName.value.length < 2) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Veuillez taper votre nom')
    return false
  } else {
    return true
  }
};

function formSubmit(e) {
  e.preventDefault()
  lastNameValidator()
};

// form submit function for email
function emailValidator() {
  const divParent = email.parentNode
  if (email.value.length = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g')) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Veuillez taper votre email')
    return false
  } else {
    return true
  }
};

function formSubmit(e) {
  e.preventDefault()
  emailValidator()
};

// form submit function for birthDate
const birthDate = document.querySelector('#birthdate');
const today = new Date().toISOString().split('T')[0];

const validDate = () => {
  let day = new Date(today);
  day.setDate(day.getDate() - 1);
  let birthday = day.toISOString().split('T')[0];
  birthDate.value = birthday;
  birthDate.max = birthday;
}
validDate();
console.log(birthDate);











