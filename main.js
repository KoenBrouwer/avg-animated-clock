$(document).ready(() => {

	const $hourLine = $("line.hourline");
	for(let i = 0; i < 12; i++){
		let hourLine = $hourLine.clone().appendTo("svg.clock");
		setTimeout(() => {
			hourLine.get(0).classList.add("hour-" + i);
		}, 0);
	}

	const $secondsDial = $(".dial.second");
	const $minutesDial = $(".dial.minute");
	const $hoursDial = $(".dial.hour");

	const updateClock = () => {
		const time = new Date();

		const seconds = time.getSeconds();
		const minutes = time.getMinutes();
		const hours = time.getHours();

		const secondsDeg = ((360 / 60) * seconds) + (360 * minutes);
		const minutesDeg = (360 / 60) * minutes;
		const hoursDeg = (360 / 60) * hours;

		$secondsDial.css({transform: `rotate(${secondsDeg}deg)`});
		$minutesDial.css({transform: `rotate(${minutesDeg}deg)`});
		$hoursDial.css({transform: `rotate(${hoursDeg}deg)`});
	};

	setInterval(updateClock, 100);
	updateClock();

});