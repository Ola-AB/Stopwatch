const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopWatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const infoBtn = document.querySelector(".fa-question");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

const colorBtn = document.querySelector(".fa-palette");
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector(".one");
const colorTwo = document.querySelector(".two");
const colorThree = document.querySelector(".three");

let root = document.documentElement;
let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopWatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopWatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			seconds++;
			stopWatch.textContent = `${minutes}:00`;
		}
	}, 1000);
};

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopWatch.textContent}`;

	if (stopWatch.textContent !== "0:00") {
		time.style.visibility = "visible";
		timesArr.push(stopWatch.textContent);
		console.log(timesArr);
	}

	clearStaff();
};

const handlePause = () => {
	clearInterval(countTime);
};
const handleReset = () => {
	time.style.visibility = "hidden";
	let timesArr = [];
	clearStaff();
};

const clearStaff = () => {
	clearInterval(countTime);
	stopWatch.textContent = "0:00";
	timeList.textContent = "";
	seconds = 0;
	minutes = 0;
};

const showHistory = () => {
	timeList.textContent = "";
	let num = 1;
	timesArr.forEach((time) => {
		const newTime = document.createElement("li");
		newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;

		timeList.appendChild(newTime);
		num++;
	});
};

const showModal = () => {
	if (!(modalShadow.style.display === "block")) {
		modalShadow.style.display = "block";
	} else {
		modalShadow.style.display = "none";
	}
	modalShadow.classList.toggle(".modal-animation");
};

const changeColor = () => {};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener("click", showHistory);

infoBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", showModal);
window.addEventListener("click", (e) =>
	e.target === modalShadow ? showModal() : false
);

colorBtn.addEventListener('click', () => {
	colorPanel.classList.toggle('show-color')
});

colorOne.addEventListener('click', () => {
	root.style.setProperty("--first-color", "rgb(47, 141, 212)");
	root.style.setProperty("--hover-color", "rgb(12, 126, 213)");
});
colorTwo.addEventListener('click', () => {
	root.style.setProperty("--first-color", "rgb(33, 188, 44)");
	root.style.setProperty("--hover-color", "rgb(5, 163, 16)");
});
colorThree.addEventListener('click', () => {
	root.style.setProperty("--first-color", "rgb(215, 215, 37)");
	root.style.setProperty("--hover-color", "rgb(191, 191, 7)");
});
