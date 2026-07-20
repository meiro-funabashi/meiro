const loading = document.querySelector(".loading");
const lines = document.querySelectorAll(".loading__line");

const duration = 1200;

function animateLine(element) {
	const start = performance.now();
	function animate(now) {
		const progress = Math.min((now - start) / duration, 1);
		element.style.clipPath = `inset(0 ${100 - progress * 100}% 0 0)`;
		if (progress < 1) {
			requestAnimationFrame(animate);
		}
	}
	requestAnimationFrame(animate);
}

document.body.style.position = "fixed";
document.body.style.top = "0";
document.body.style.left = "0";
document.body.style.width = "100%";

window.addEventListener("load", () => {
	loading.classList.add("is-load");
	lines.forEach((line, i) => {
		setTimeout(() => animateLine(line), i * (duration + 200));
	});
	setTimeout(
		() => {
			loading.classList.add("is-loaded");
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.left = "";
			document.body.style.width = "";
			document.querySelectorAll(".hero__catch, .hero__stream").forEach((el) => {
				el.classList.add("is-visible");
			});
		},
		duration * 2 + 700,
	);
});
