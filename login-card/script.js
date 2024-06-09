const loginBtn = document.querySelector('[data-login]');
const closeBtn = document.querySelector('[data-close]');

loginBtn.addEventListener('click', () => {
  document.body.classList.add('state-login');
});

closeBtn.addEventListener('click', () => {
  document.body.classList.remove('state-login');
});
