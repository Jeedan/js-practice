const boxSlide = document.querySelectorAll(".box:nth-of-type(n+4)");
const mainBox = document.querySelector(".box");
const body = document.querySelector("body");

let triggerBox = window.innerHeight - boxSlide[0].offsetHeight;

window.addEventListener("resize", () => {
	triggerBox = window.innerHeight - boxSlide[0].offsetHeight;
});

window.addEventListener("scroll", () => {
	boxSlide.forEach((b) => {
		const boxTop = b.getBoundingClientRect().top;

		if (boxTop < triggerBox) {
			b.classList.add("slide");
		} else if (boxTop > triggerBox) {
			b.classList.remove("slide");
		}
	});
});
