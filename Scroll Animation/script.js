const boxSlide = document.querySelectorAll(".box:nth-of-type(n+4)");
const mainBox = document.querySelector(".box");
const body = document.querySelector("body");

let triggerBox = window.innerHeight - boxSlide[0].offsetHeight;

window.addEventListener("resize", () => {
	triggerBox = window.innerHeight - boxSlide[0].offsetHeight;
});

window.addEventListener("scroll", () => {
	boxSlide.forEach((b, i) => {
		const boxTop = b.getBoundingClientRect().top;

		if (boxTop < triggerBox) {
			setTimeout(() => {
				b.classList.add("slide");
			}, i * 100);
		} else if (boxTop > triggerBox) {
			b.classList.remove("slide");
		}
	});
});
