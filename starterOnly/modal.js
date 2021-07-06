
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
const birthDay = document.getElementById('birthdate');
const quantity = document.querySelector('#quantity');
const locationList = document.getElementsByName('location');
const agreeBox = document.querySelector('#checkbox1');



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

// ******* form submit *******
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  const submit = document.querySelectorAll('.btn-submit');
  e.preventDefault()
  const isValid = firstNameValidator() && lastNameValidator() && emailValidator() && checkDate() && checkNumber() && checkRadio() && checkTerms()
  if (isValid) {
    modalbg.style.display = "block";
  };
};

// ******* form submit function for firstName ******* //
function firstNameValidator() {
  const divParent = firstName.parentNode
  if (firstName.value.length < 2) { // Minimum de 2 caractères
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer votre prénom')
    return false
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true
  }
};

// ******* form submit function for lastName ******* //
function lastNameValidator() {
  const divParent = lastName.parentNode
  if (lastName.value.length < 2) { // Minimum de 2 caractères
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer votre nom')
    return false
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true
  }
};

// ******* form submit function for email ******* //
function emailValidator() {
  const divParent = email.parentNode
  const emailReg = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g') // Expression régulière à respecter
  if (!emailReg.test(email.value)) { // On teste l'email sur la base de la RegExp
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer votre email')
    return false
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true
  }
};

// ******* form submit function for birthDate ******* //
const today = new Date().toISOString().split('T')[0]; // Date d'aujourd'hui au format jj/mm/aaaa

const birthDate = () => {
  let day = new Date(today); // On part de la date du jour
  day.setDate(day.getDate() - 1); // Initialisation de la date à J-1
  let birth = day.toISOString().split('T')[0]; // Conversion au format jj/mm/aaaa
  birthDay.value = birth;
};
birthDate();

function checkDate() {
  const divParent = birthDay.parentNode

  if (birthDate < today) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer une date de naissance valide')
    return false
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true
  }
};

// ******* Form submit function checking number ******* //
function checkNumber() {
  const divParent = quantity.parentNode
  const quantityReg = new RegExp('^[0-9]+$'); // valeur entre 0 et 9 à entrer
  if (!quantityReg.test(quantity)) { // On teste la valeur sur la base de la RegExp
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer un chiffre')
    return false;
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true
  }
};

// ******* Form submit function radio button validation ******* //
function checkRadio() {
  const divParent = locationList.parentNode
  let hasChecked = false;
  for (let i = 0; i < locationList.length; i++) {
    if (locationList[i].checked == true) { // si une des cases est cochée
      hasChecked = true;
      divParent.setAttribute('data-error-visible', 'false')
    } else {
      hasChecked = false;
      divParent.setAttribute('data-error-visible', 'true')
      divParent.setAttribute('data-error', 'Veuillez choisir une ville')
    }
  }
  return hasChecked;
};

// ******* Form submit function for terms and conditions validation *******
function checkTerms() {
  const divParent = agreeBox.parentNode
  if (!agreeBox.checked) { // si la case n'est pas cochée
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.')
    return false;
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true;
  }
};













