//  MENU
const menu = document.querySelector('.menu');
const btn = menu.querySelector('.nav-tgl');
btn.addEventListener('click', evt => {
  if (menu.className.indexOf('active') === -1) {
		menu.classList.add('active');
  } else {
		menu.classList.remove('active');
  }
})