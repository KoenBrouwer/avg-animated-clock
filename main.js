$(document).ready(() => {

	const $hourLine = $("g.hours line.hour");
	for(let i = 0; i < 12; i++){
		let hourLine = $hourLine.clone().appendTo("svg.clock g.hours");
		setTimeout(() => {
			hourLine.get(0).classList.add("hour-" + i);
		}, 0);
	}
	$hourLine.remove();

	const $minLine = $("g.mins line.min");
	console.log($minLine);
	for(let i = 0; i < 60; i++){
		let minLine = $minLine.clone().appendTo("svg.clock g.mins");
		setTimeout(() => {
			minLine.get(0).classList.add("min-" + i);
		}, 0);
	}
	$minLine.remove();

	const $secondsDial = $("line.dial.second, circle.dial-seconds");
	const $minutesDial = $("line.dial.minute");
	const $hoursDial = $("line.dial.hour");

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