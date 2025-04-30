const boxSlide = document.querySelectorAll(".box:nth-of-type(n+4)");
const mainBox = document.querySelector(".box");
const body = document.querySelector("body");

let triggerBox = 0;
const buffer = 30;

const setTriggerBox = () => {
	if (boxSlide.length > 0) {
		// triggerBox = (window.innerHeight / 5) * 4;
		triggerBox = window.innerHeight - boxSlide[0].offsetHeight;
		console.log("triggerBox: ", window.innerHeight);
	} else {
		triggerBox = (window.innerHeight / 5) * 4;
	}
};

setTriggerBox();

window.addEventListener("resize", () => {
	setTriggerBox();
});

let lastRun = 0;
const throttleDelay = 100;

window.addEventListener("scroll", () => {
	const now = Date.now();
	if (now - lastRun >= throttleDelay) {
		setTriggerBox();
		slideBoxes();
		lastRun = now;
	}
});

const slideBoxes = () => {
	requestAnimationFrame(() => {
		boxSlide.forEach((b, i) => {
			const boxTop = b.getBoundingClientRect().top;

			if (
				boxTop < triggerBox + buffer &&
				!b.classList.contains("slide")
			) {
				b.classList.add("slide");
			} else if (
				boxTop > triggerBox - buffer &&
				b.classList.contains("slide")
			) {
				b.classList.remove("slide");
			}
		});
	});
};
