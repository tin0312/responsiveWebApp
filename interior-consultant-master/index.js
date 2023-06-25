// Objectives 

// when users click on the hamburger icon, the close icon should appear instead of the hamburger icon
//the menu should apppear  in a form of dropdown menu list that 
// has Home-Collections-About-Contact
// the menu should disappear when users click on the close icon, the dropdown menu list should disappear
// the hamburger icon should appear instead of the close icon
// index.js
const menuList = document.querySelector('.menu-list');
const menuIconOpen = document.querySelector('.menu-icon');
const menuIconClose = document.querySelector('.close-icon');
const logo = document.querySelector('.logo');
const mainContainer = document.querySelector('.main-container');
const footer = document.querySelector('.footer');
const headerContainer = document.querySelector('.header-container');

menuIconOpen.addEventListener('click', () => {
    menuList.classList.toggle('show');// menu appear
    menuIconOpen.classList.toggle('hidden');// menu-icon gone
    menuIconClose.classList.toggle('show');// close-icon appear
    logo.classList.toggle('hidden')// logo gone
    mainContainer.classList.toggle('hidden')// main-container gone
    footer.classList.toggle('hidden')// footer gone
    headerContainer.classList.toggle('new')// header-container gone
    
})
menuIconClose.addEventListener('click', () => {
    menuList.classList.remove('show');// menu gone 
    menuIconOpen.classList.remove('hidden');//menu-icon appear 
    menuIconClose.classList.remove('show'); //close-icon gone
    logo.classList.remove('hidden')// logo appear
    mainContainer.classList.remove('hidden')// main-container appear
    footer.classList.remove('hidden')// footer appear
    headerContainer.classList.remove('new')// header-container appear
})
