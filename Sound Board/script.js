const buttons = document.querySelectorAll(".btn");
const audioClips = document.querySelectorAll("audio");

let isPlaying = false;

buttons.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		if (isPlaying) stopAudio();
		if (audioClips.length > 0 && !isPlaying) playAudio(idx);
	});
});

const playAudio = (idx) => {
	console.log(audioClips[idx].innerText, " clip playing");
	isPlaying = true;
	audioClips[idx].play();
};

// pause and reset the audio clip
const stopAudio = () => {
	audioClips.forEach((clip) => {
		clip.pause();
		clip.currentTime = 0;
		isPlaying = false;
	});
};

//set is playing to false if a clip ends on its own
audioClips.forEach((clip) => {
	clip.onended = () => {
		isPlaying = false;
		console.log(clip.innerText, " clip ended");
	};
});
