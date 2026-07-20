document.querySelectorAll(".text-scroll__block").forEach((block) => {
	const items = [...block.children];

	items.forEach((item) => {
		const clone = item.cloneNode(true);
		clone.setAttribute("aria-hidden", "true");
		block.appendChild(clone);
	});
});
