const btns = document.querySelectorAll(".faq-toggle");
const faqContainers = document.querySelectorAll(".faq");

const faq = document.querySelector(".faq");
const toggle = document.querySelector(".faq-toggle");

btns.forEach((b, idx) => {
	b.addEventListener("click", () => {
		faqContainers[idx].classList.toggle("collapse");
	});
});
