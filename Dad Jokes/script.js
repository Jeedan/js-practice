const btn = document.querySelector(".btn");
const jokeText = document.querySelector(".joke");

const url = "https://icanhazdadjoke.com/";
const generateJoke = async () => {
	try {
		const config = {
			method: "GET",
			mode: "cors",
			"Access-Control-Allow-Origin": "https://icanhazdadjoke.com/",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"User-Agent": "My repo (https://github.com/Jeedan/js-practice)",
			},
		};

		const basicConfig = {
			headers: {
				Accept: "application/json",
			},
		};
		const response = await fetch(url, basicConfig);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();
		console.log(data.joke);
		return data.joke;
	} catch (error) {
		console.log(error.message);
	}
};

const showJoke = async () => {
	jokeText.innerText = "Fetching Joke...";

	const j = await generateJoke();
	jokeText.innerText = j;
};

btn.addEventListener("click", async () => {
	showJoke();
	console.log("clicked");
});

showJoke();
