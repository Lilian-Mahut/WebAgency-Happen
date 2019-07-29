// LOCALSTORAGE + CHANGE TEMPLATE
const inputToggle = document.getElementById('emerci');

window.addEventListener("load", (e) =>{
  if (localStorage.getItem('theme') == 'dark') {
    document.body.classList.add('dark');
    inputToggle.checked = true;
  }
  inputToggle.addEventListener('click', (e) => {
    if (document.body.classList == 'dark') {
      localStorage.setItem('theme', 'light');
      document.body.classList.toggle('dark');
    }
    else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.toggle('dark');
    }
  })
});