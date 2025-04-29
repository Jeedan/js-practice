const progress = document.querySelector("#progress");
const loadContainer = document.querySelector(".loading");
const blurryImage = document.querySelector("#blurry-image");

let currentPercentage = parseInt(progress.innerHTML);
const loadingInterval = 100; // milliseconds
const maxBlur = 30;
const blurMultiplier = 1.5;
blurryImage.style.filter = `blur(${maxBlur}px)`;

const calcPercentage = (current, value = 1, multiplier = 1) => {
	return value * Math.min(1 - (current * multiplier) / 100, 1);
};

let currentBlur = setInterval(() => {
	if (currentPercentage < 100) {
		currentPercentage++;
		progress.innerHTML = currentPercentage;

		let formula = calcPercentage(
			currentPercentage,
			maxBlur,
			blurMultiplier
		);

		loadContainer.style.opacity = calcPercentage(currentPercentage);
		blurryImage.style.filter = `blur(${formula}px)`;
	} else {
		clearInterval(currentBlur);
		loadContainer.addEventListener("transitioned", () => {
			loadContainer.style.display = "none";
		});
		// triggers the CSS transition
		loadContainer.style.opacity = 0;
	}
}, loadingInterval);
