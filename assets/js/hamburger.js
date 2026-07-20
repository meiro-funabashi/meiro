const hamburger = document.querySelector("#hamburger");
const drawer = document.querySelector(".drawer");
const drawerLinks = document.querySelectorAll(".drawer__list a");

let scrollY = 0;
function open() {
	scrollY = window.scrollY;
	document.body.style.position = "fixed";
	document.body.style.top = `-${scrollY}px`;
	document.body.style.left = "0";
	document.body.style.width = "100%";
}
function close() {
	document.body.style.position = "";
	document.body.style.top = "";
	document.body.style.left = "";
	document.body.style.width = "";
	window.scrollTo(0, scrollY);
}

function closeMenu() {
	drawer.classList.remove("is-open");
	hamburger.classList.remove("is-open");
	close();
}

hamburger.addEventListener("click", () => {
	const isOpen = drawer.classList.contains("is-open");
	hamburger.setAttribute("aria-expanded", String(!isOpen));
	if (drawer.classList.contains("is-open")) {
		closeMenu();
	} else {
		drawer.classList.add("is-open");
		hamburger.classList.add("is-open");
		open();
	}
});

drawerLinks.forEach((link) => {
	link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && drawer.classList.contains("is-open")) {
		closeMenu();
	}
});
