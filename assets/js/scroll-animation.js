const animations = [
	{
		selector: ".about__intro, .about__content",
		threshold: 0.3,
	},
	{
		selector: ".trouble__item",
		threshold: 0.8,
	},
	{
		selector: ".activities__item",
		threshold: 0.3,
	},
	{
		selector: ".message__content",
		threshold: 0.3,
	},
	{
		selector: ".participation__item",
		threshold: 0.3,
	},
	{
		selector: ".qa__item",
		threshold: 0.3,
	},
];

if (!("IntersectionObserver" in window)) {
	document.querySelectorAll(".about__intro, .about__content, .trouble__item, ...").forEach((el) => el.classList.add("is-visible"));
} else {
	animations.forEach(({ selector, threshold }) => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;

					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				});
			},
			{ threshold },
		);

		document.querySelectorAll(selector).forEach((el) => {
			observer.observe(el);
		});
	});
}
