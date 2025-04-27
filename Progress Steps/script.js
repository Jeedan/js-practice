const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progressBars = document.querySelectorAll(".progress");
const steps = document.querySelectorAll(".step");

let currentStep = 1;

next.disabled = false;
prev.disabled = true;

prev.addEventListener("click", (e) => {
	if (currentStep > 1) {
		currentStep--;
		updateProgress();
	}
	next.disabled = false;
	if (currentStep === 1) prev.disabled = true;
});

next.addEventListener("click", (e) => {
	if (currentStep < 4) {
		currentStep++;
		updateProgress();
		console.log("next disabled");
	}
	prev.disabled = false;
	if (currentStep === 4) next.disabled = true;
});

const updateProgress = () => {
	progressBars.forEach((bar, index) => {
		if (index < currentStep - 1) {
			bar.style.width = "100%";
		} else {
			bar.style.width = "0%";
		}
	});

	steps.forEach((step, index) => {
		if (index < currentStep) {
			step.style.borderColor = "rgb(2, 178, 237)";
		} else {
			step.style.borderColor = "lightgray";
		}
	});
};
