const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-link');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});
};

const darkmode = () => {
	const darkModeButton = document.querySelector('.darkModeButton');
	const background = document.querySelector('body');

	darkModeButton.addEventListener('click', () => {
		background.classList.toggle('darkmode');
	});
};

const app = () => {
	navSlide();
	darkmode();
};

app();
