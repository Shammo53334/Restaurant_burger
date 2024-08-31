// nav bar hamburger
const hamburger = document.getElementById('hamburger');
const navmenu = document.getElementById('navmenu');
const navClose = document.getElementById('navClose');
const navLink = document.querySelectorAll('.navLink');

navLink.forEach((link) =>
	link.addEventListener('click', () => {
		navmenu.classList.remove('block');
		navmenu.classList.add('hidden');
	})
);

hamburger.addEventListener('click', () => {
	navmenu.classList.remove('hidden');
	navmenu.classList.add('block');
});

navClose.addEventListener('click', () => {
	navmenu.classList.remove('block');
	navmenu.classList.add('hidden');
});

// menu tabs selection

const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const beverages = document.querySelectorAll('.beverage');
const snacks = document.querySelectorAll('.snack');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		tabs.forEach((tab) => {
			tab.classList.remove('active');
		});
		tab.classList.add('active');
		const tabval = tab.getAttribute('data-tabs');

		all.forEach((item) => {
			item.classList.add('hidden');
			item.classList.remove('block');
		});
		if (tabval == 'food') {
			foods.forEach((item) => {
				item.classList.add('block');
				item.classList.remove('hidden');
			});
		} else if (tabval == 'snack') {
			snacks.forEach((item) => {
				item.classList.add('block');
				item.classList.remove('hidden');
			});
		} else if (tabval == 'beverage') {
			beverages.forEach((item) => {
				item.classList.add('block');
				item.classList.remove('hidden');
			});
		} else {
			all.forEach((item) => {
				item.classList.add('block');
				item.classList.remove('hidden');
			});
		}
	});
});

// Dark light theme

const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', (e) => {
	if (localStorage.getItem('mode') == 'light') {
		darkMode();
	} else {
		lightMode();
	}
});

function darkMode() {
	html.classList.add('dark');
	themeIcon.classList.remove('fa-regular', 'fa-moon');
	localStorage.setItem('mode', 'dark');
}
function lightMode() {
	html.classList.remove('dark');
	themeIcon.classList.replace('fa-sun', 'fa-moon');
	localStorage.setItem('mode', 'light');
}
