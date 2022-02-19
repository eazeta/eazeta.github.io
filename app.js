const toggleMenu = document.getElementsByClassName('toggle-menu')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleMenu.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});

const darkModeButton = document.querySelector('.darkModeButton');
const background = document.querySelector('body');

darkModeButton.addEventListener('click', () => {
	background.classList.toggle('darkmode');
});
