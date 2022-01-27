/** @format */

const tick = '&#10004';
const cross = '&#10060';
let toggle = false;

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
