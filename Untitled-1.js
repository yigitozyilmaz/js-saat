let name = prompt("Adınızı giriniz");
let myName = document.querySelector("#myName");

myName.innerHTML = `${name}`;

var week = [
	"pazar",
	"pazartesi",
	"salı",
	"çarşamba",
	"perşembe",
	"cuma",
	"cumartesi",
];

function updateTime() {
	var date = new Date();
	var time =
		makeTwoDigit(date.getHours()) +
		":" +
		makeTwoDigit(date.getMinutes()) +
		":" +
		makeTwoDigit(date.getSeconds());
	var tarihh =
		date.getFullYear() +
		"-" +
		makeTwoDigit(date.getMonth() + 1) +
		"-" +
		makeTwoDigit(date.getDate()) +
		" " +
		week[date.getDay()];
	document.getElementById("date").innerHTML = tarihh;
	document.getElementById("time").innerHTML = time;
	setTimeout(updateTime, 1000);
}

function makeTwoDigit(num) {
	return num < 10 ? "0" + num : num;
}
updateTime();
