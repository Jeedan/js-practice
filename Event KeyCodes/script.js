const info = document.querySelector("#info");
const eventKeyContainer = document.querySelector("#eventKey");
const eventKeyCodeContainer = document.querySelector("#eventKeyCode");
const eventCodeContainer = document.querySelector("#eventCode");
const eventKey = document.querySelector("#eventKey h3");
const eventKeyCode = document.querySelector("#eventKeyCode h3");
const eventCode = document.querySelector("#eventCode h3");

addEventListener("keydown", (e) => {
	e.preventDefault();
	info.classList.add("hide");

	eventKeyContainer.classList.remove("hide");
	eventKeyCodeContainer.classList.remove("hide");
	eventCodeContainer.classList.remove("hide");

	eventKey.textContent = e.code === "Space" ? "(blank space)" : e.key;
	eventKeyCode.textContent = e.keyCode;
	eventCode.textContent = e.code;

	console.log(
		`event.key: ${e.key}, event.KeyCode: ${e.keyCode}, event.Code: ${e.code}`
	);
});
