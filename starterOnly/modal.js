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

function formSubmit(e) {
  const submit = document.querySelectorAll('.btn-submit');
  e.preventDefault()
  // const isValid = firstNameValidator() && lastNameValidator() && emailValidator() && checkDate() && checkNumber() && checkRadio() && checkTerms()
  const isValid = checkDate()
  if (isValid) {
    modalbg.style.display = "block";
  };
};

// form submit function for firstName
function firstNameValidator() {
  const divParent = firstName.parentNode
  if (firstName.value.length < 2) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer votre prénom')
    return false
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true 
  }
};

// form submit function for lastName
function lastNameValidator() {
  const divParent = lastName.parentNode
  if (lastName.value.length < 2) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer votre nom')
    return false
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true
  }
};

// form submit function for email
function emailValidator() {
  const divParent = email.parentNode
  const emailReg = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g')
  if (!emailReg.test(email.value)) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer votre email')
    return false
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true
  }
};

// form submit function for birthDate
function checkDate() {
  const divParent = birthDay.parentNode
  const birthDay = document.querySelector('#birthdate').value;
  const today = new Date(); // Today date
  const birthDate = new Date(birthDay).value;
  if (birthDate > today) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer une date de naissance valide')
    return false
  } else {
    divParent.setAttribute('data-error-visible', 'false')
    return true
  }
};

// Form submit function checking number
function checkNumber() {
  const quantity = document.querySelector('#quantity').value;
  const quantityReg = new RegExp('^[0-9]+$'); // valeur entre 0 et 9 à entrer
  if (!quantityReg.test(quantity)) {
    divParent.setAttribute('data-error-visible', 'true')
    divParent.setAttribute('data-error', 'Vous devez entrer un chiffre')
    return false;
  }
  return true;
};

// Form submit function radio button validation
function checkRadio() {
  const locationList = document.getElementsByName('location');
  let hasChecked = false;
  for(let i=0; i < locationList.length; i++) {
    if (locationList[i].checked == true) {
      hasChecked = true;
    }
  }
  return hasChecked;
};

// Form submit function checking terms and conditions if valid
function checkTerms () {
  const agreeBox = document.querySelector('#checkbox1'); 
  console.log(agreeBox.checked)
  if (!agreeBox.checked) { //if the box is checked
      alert("Veuillez accepter les termes et conditions !");
      return false;
  }
  return true;
};













