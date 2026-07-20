const smoothLinks = document.querySelectorAll(".right-side__list a, .footer__list a");

smoothLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		if (!link.hash) return;

		const target = document.querySelector(link.hash);
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
			});
		}
	});
});
