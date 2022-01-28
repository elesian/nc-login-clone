/** @format */

const tick = '&#10004';
const cross = '&#10060';
let toggle = false;
let validEmail = false;
let validPassword = false;

const emailInput = document.getElementById('email-id');
const passInput = document.getElementById('password-id');

passInput.oninvalid = (event) => {
  event.target.setCustomValidity(
    `Password must: \n\n •Start with a capital letter \n •Be at least eight characters long\n •Contain one upper case character \n •Contain one lower case character \n •Contain one special character`
  );
};

passInput.oninput = (event) => {
  event.target.setCustomValidity('');
};

const form = document.getElementById('to-landing-page');
form.addEventListener('submit', isValid);

function isValid(event) {
  console.log(event);
  console.log(validEmail, validPassword);
  if (validEmail === true && validPassword === true) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

function darkModeToggle() {
  if (toggle === false) {
    toggle = true;
    document.getElementById('login').style.color = 'white';
    document.body.style.backgroundColor = 'black';
    document.getElementById('email-label').style.color = 'white';
    document.getElementById('password-label').style.color = 'white';
    return;
  } else {
  }
  toggle = false;
  document.getElementById('login').style.color = 'black';
  document.body.style.backgroundColor = 'white';
  document.getElementById('email-label').style.color = 'black';
  document.getElementById('password-label').style.color = 'black';
  return;
}

const emailValidate = (event) => {
  const emailInput = event.target.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(emailInput) === true) {
    validEmail = true;
    document.getElementById('email-valid').innerText =
      'Please provide a valid email address ✔';
    document.getElementById('email-valid').style.color = 'green';
    return;
  } else {
    validEmail = false;
    document.getElementById('email-valid').innerText =
      'Please provide a valid email address ✘';
    document.getElementById('email-valid').style.color = 'red';
    return;
  }
};

emailInput.addEventListener('change', emailValidate);

const passwordValidate = (event) => {
  const passwordInput = event.target.value;
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.test(passwordInput) === true) {
    validPassword = true;

    document.getElementById('password-valid').innerText =
      'Please provide a valid password ✔';
    document.getElementById('password-valid').style.color = 'green';
    return;
  } else {
    validPassword = false;
    document.getElementById('password-valid').innerText =
      'Please provide a valid password ✘';
    document.getElementById('password-valid').style.color = 'red';
    return;
  }
};

passInput.addEventListener('change', passwordValidate);
