/** @format */

const tick = '&#10004';
const cross = '&#10060';
let toggle = false;
let validEmail = false;
let validPassword = false;

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

let emailInput = document.getElementById('email-id');

const emailValidate = (event, validEmail) => {
  console.log(event.target.value);
  const emailInput = event.target.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(emailInput) === true) {
    validEmail = true;
    document.getElementById('email-valid').innerText =
      'Please provide a valid email address ✔';
    document.getElementById('email-valid').style.color = 'green';
  } else {
    validPassword = false;
    document.getElementById('email-valid').innerText =
      'Please provide a valid email address ✘';
    document.getElementById('email-valid').style.color = 'red';
  }
};

emailInput.addEventListener('change', emailValidate);

let passInput = document.getElementById('password-id');

const passwordValidate = (event, validPassword) => {
  const passwordInput = event.target.value;
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.test(passwordInput) === true) {
    validPassword = true;
    document.getElementById('password-valid').innerText =
      'Please provide a valid password ✔';
    document.getElementById('password-valid').style.color = 'green';
  } else {
    validPassword = false;
    document.getElementById('password-valid').innerText =
      'Please provide a valid password ✘';
    document.getElementById('password-valid').style.color = 'red';
    console.log('false');
  }
};

passInput.addEventListener('change', passwordValidate);

//   const regex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (input.value.match(regex) === true) {
//     console.log('match');
//     return;
//   } else {
//     console.log('no match');
//     return;s
