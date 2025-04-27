// get all elements with class Card
// add eventListener onClick to all of them
const allCards = document.querySelectorAll(".card");

const onClickHandler = (e) => {
	const card = e.currentTarget;
	allCards.forEach((c) => {
		c.classList.remove("active");
	});
	card.classList.add("active");
};

allCards.forEach((card) => {
	card.addEventListener("click", onClickHandler);
});
