const email = document.querySelector(".label-email");
const emailSpans = document.querySelectorAll(".label-email span");
const password = document.querySelector(".label-password");
const passsordSpans = document.querySelectorAll(".label-password span");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

emailInput.addEventListener("focus", () => {
	emailSpans.forEach((es, idx) => {
		es.classList.add("active");
		es.style.transitionDelay = `${idx * 50}ms`;
	});

	passsordSpans.forEach((ps, idx) => {
		ps.classList.remove("active");
	});
});

passwordInput.addEventListener("focus", () => {
	passsordSpans.forEach((ps, idx) => {
		ps.classList.add("active");
		ps.style.transitionDelay = `${idx * 50}ms`;
	});

	emailSpans.forEach((es) => {
		es.classList.remove("active");
	});
});

emailInput.addEventListener("blur", () => {
	removeClasses();
});

passwordInput.addEventListener("blur", () => {
	removeClasses();
});

const removeClasses = () => {
	passsordSpans.forEach((ps, idx) => {
		ps.classList.remove("active");
	});
	emailSpans.forEach((es) => {
		es.classList.remove("active");
	});
};

//const offsetY = -25;
// const createSpanforEachLetter = () => {
// 	for (l in label) {
// 		if (email.childElementCount >= label.length) {
// 			return;
// 		}
// 		const span = document.createElement("span");
// 		span.innerText = label[l];
// 		span.classList.add("active");
// 		email.appendChild(span);
// 		// email.innerHTML += `<span class="active">${label[l]}</span>`;
// 	}
// };
