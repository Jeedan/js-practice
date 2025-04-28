const btn = document.querySelector("#expandBtn");
const searchInput = document.querySelector("#search");
const wrapper = document.querySelector(".wrapper");

// slide button on X axis
// we want the button to slide to the edge of the input
// need to know the width of the input when expanded.
// take half of the input size (if 200/2)
// then move the btn by the difference of its width
// (sliderWidth/2)-(btnWidth/2)
// use that result to translate the button
//(80px in this case)
const firstVersion = () => {
	searchInput.classList.toggle("expand");
	btn.classList.toggle("slideX");
	if (wrapper.classList.contains("expand")) {
		searchInput.focus();
	}
};

btn.addEventListener("click", () => {
	wrapper.classList.toggle("expand");
	searchInput.focus();
});
