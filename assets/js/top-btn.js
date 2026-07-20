const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", () => {
	if (window.scrollY > 200) {
		topBtn.classList.add("is-show");
	} else {
		topBtn.classList.remove("is-show");
	}
});

topBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
