const boxSlide = document.querySelectorAll(".box:nth-of-type(n+4)");
const mainBox = document.querySelector(".box");
const body = document.querySelector("body");

let triggerBox = window.innerHeight - boxSlide[0].offsetHeight;

window.addEventListener("resize", () => {
	triggerBox = window.innerHeight - boxSlide[0].offsetHeight;
});

let lastRun = 0;
const throttleDelay = 50;

window.addEventListener("scroll", () => {
	const now = Date.now();
	if (now - lastRun >= throttleDelay) {
		slideBoxes();
		lastRun = now;
	}
});

const slideBoxes = () => {
	requestAnimationFrame(() => {
		boxSlide.forEach((b, i) => {
			const boxTop = b.getBoundingClientRect().top;

			if (boxTop < triggerBox && !b.classList.contains("slide")) {
				b.classList.add("slide");
			} else if (boxTop > triggerBox && b.classList.contains("slide")) {
				b.classList.remove("slide");
			}
		});
	});
};
