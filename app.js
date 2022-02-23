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

// Sourced from W3Schools
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	myFunction();
};

// Get the navbar
var navbar = document.getElementsByClassName('navbar')[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}
