const progress = document.querySelector("#progress");
const loadContainer = document.querySelector(".loading");
const blurryImage = document.querySelector("#blurry-image");

let currentPercentage = parseInt(progress.innerHTML);
const loadingInterval = 100; // milliseconds
const maxBlur = 30;
const blurMultiplier = 1.5;
blurryImage.style.filter = `blur(${maxBlur}px)`;

let currentBlur = setInterval(() => {
	if (currentPercentage < 100) {
		currentPercentage++;
		progress.innerHTML = currentPercentage;

		let formula =
			maxBlur *
			Math.min(1 - (currentPercentage * blurMultiplier) / 100, 1);
		loadContainer.style.opacity = Math.min(
			1 - (currentPercentage * 0.98) / 100,
			1
		);
		blurryImage.style.filter = `blur(${formula}px)`;
		console.log("opactiy", loadContainer.style.opacity);
	}
}, loadingInterval);
