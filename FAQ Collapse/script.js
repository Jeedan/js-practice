const btns = document.querySelectorAll(".btn");
const faqContainers = document.querySelectorAll(".faq-container");
const faqOpens = document.querySelectorAll("#open");
const faqCloses = document.querySelectorAll("#close");
const collapseContainers = document.querySelectorAll("#collapse-container");

btns.forEach((b, idx) => {
	b.addEventListener("click", () => {
		faqContainers[idx].classList.toggle("collapse");
		collapseContainers[idx].classList.toggle("collapse");
		faqOpens[idx].classList.toggle("collapse");
		faqCloses[idx].classList.toggle("collapse");
	});
});
