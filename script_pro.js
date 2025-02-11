// bismillohirrahmanirrahim

let locate_1 = '1';
let locate_2 = '1';
let locate_3 = '1';

let turn_1 = 'on';
let turn_2 = 'off';
let turn_3 = 'off';

document.querySelector('.bapesh').nextElementSibling.style.border = "6px red solid";

xod_kun.onclick = function() {
	let rand  = Math.floor(Math.random() * (7 - 1) + 1);
	document.getElementById('demo').textContent = rand;
	document.getElementById('demo').style.display = 'block';

	if (turn_1 == 'on') {
		locate_1 += rand;
	}
}

		document.querySelector('.bapesh').style.border = "6px black solid";
		document.querySelector('.bozor').style.border = "6px black solid";
		document.querySelector('.etazh').style.border = "6px black solid";
		document.querySelector('.shtraf').style.border = "6px black solid";
		document.querySelector('.rahimi').style.border = "6px black solid";
		document.querySelector('.tuhfa').style.border = "6px black solid";
		document.querySelector('.turma').style.border = "6px black solid";
		document.querySelector('.police').style.border = "6px black solid";
		document.querySelector('.nimi_pul').style.border = "6px black solid";
		document.querySelector('.bolnisa').style.border = "6px black solid";
		document.querySelector('.bankrot').style.border = "6px black solid";
		document.querySelector('.bomba').style.border = "6px black solid";
		document.querySelector('.etazh_2').style.border = "6px black solid";
		document.querySelector('.avtomat').style.border = "6px black solid";
		document.querySelector('.bomba_2').style.border = "6px black solid";
		document.querySelector('.mersedes').style.border = "6px black solid";
		document.querySelector('.lotoreya').style.border = "6px black solid";
		document.querySelector('.najot').style.border = "6px black solid";
		document.querySelector('.bank').style.border = "6px black solid";
		document.querySelector('.two_x').style.border = "6px black solid";
		document.querySelector('.bashkun').style.border = "6px black solid";
		document.querySelector('.restoran').style.border = "6px black solid";
		document.querySelector('.xona').style.border = "6px black solid";

		var excludeParam1 = 0;

		if(locate_1 == 1) {
			excludeParam1 = document.querySelector('.bapesh');
		} else if (locate_1 == 2) {
			excludeParam1 = document.querySelector('.bozor');
		} else if (locate_1 == 3) {
			excludeParam1 = document.querySelector('.etazh');
		} else if (locate_1 == 4) {
			excludeParam1 = document.querySelector('.shtraf');
		} else if (locate_1 == 5) {
			excludeParam1 = document.querySelector('.rahimi');
		} else if (locate_1 == 6) {
			excludeParam1 = document.querySelector('.tuhfa');
		} else if (locate_1 == 7) {
			excludeParam1 = document.querySelector('.turma');
		} else if (locate_1 == 8) {
			excludeParam1 = document.querySelector('.police');
		} else if (locate_1 == 9) {
			excludeParam1 = document.querySelector('.nimi_pul');
		} else if (locate_1 == 10) {
			excludeParam1 = document.querySelector('.bolnisa');
		} else if (locate_1 == 11) {
			excludeParam1 = document.querySelector('.bankrot');
		} else if (locate_1 == 12) {
			excludeParam1 = document.querySelector('.bomba');
		} else if (locate_1 == 13) {
			excludeParam1 = document.querySelector('.etazh_2');
		} else if (locate_1 == 14) {
			excludeParam1 = document.querySelector('.avtomat');
		} else if (locate_1 == 15) {
			excludeParam1 = document.querySelector('.bomba_2');
		} else if (locate_1 == 16) {
			excludeParam1 = document.querySelector('.mersedes');
		} else if (locate_1 == 17) {
			excludeParam1 = document.querySelector('.lotoreya');
		} else if (locate_1 == 18) {
			excludeParam1 = document.querySelector('.najot');
		} else if (locate_1 == 19) {
			excludeParam1 = document.querySelector('.bank');
		} else if (locate_1 == 20) {
			excludeParam1 = document.querySelector('.two_x');
		} else if (locate_1 == 21) {
			excludeParam1 = document.querySelector('.bashkun');
		} else if (locate_1 == 22) {
			excludeParam1 = document.querySelector('.restoran');
		} else if (locate_1 == 23) {
			excludeParam1 = document.querySelector('.xona');
		}
