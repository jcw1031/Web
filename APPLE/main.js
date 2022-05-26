const toggle=document.querySelector('.navbar_toggle');
const menu=document.querySelector('.navbar_menu');
const icons=document.querySelector('.navbar_icons');
const toggle_off=document.querySelector('.navbar_toggle_off');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle_off.classList.toggle('active');
});
toggle_off.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle_off.classList.toggle('active');
});