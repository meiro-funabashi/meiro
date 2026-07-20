const navLinks = document.querySelectorAll(".right-side__list a");

const sections = ["#hero", "#about", "#trouble", "#activities", "#message", "#participation", "#qa", "#company"]
	.map((id) => document.querySelector(id))
	.filter(Boolean);

function setCurrent(id) {
	navLinks.forEach((link) => {
		link.classList.toggle("is-current", link.hash === `#${id}`);
	});
}

function updateCurrent() {
	if (window.scrollY <= 80) {
		setCurrent("hero");
		return;
	}

	let current = sections[0];
	const trigger = window.innerHeight * 0.5;

	sections.forEach((section) => {
		const top = section.getBoundingClientRect().top;

		if (top <= trigger) {
			current = section;
		}
	});

	setCurrent(current.id);
}

let ticking = false;
window.addEventListener("scroll", () => {
	if (!ticking) {
		requestAnimationFrame(() => {
			updateCurrent();
			ticking = false;
		});
		ticking = true;
	}
});

updateCurrent();
