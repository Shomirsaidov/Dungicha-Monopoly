// bismillohirrahmanirrahim

let bozor = {
	manage: '0', 
}

let etazh = {
	manage: '0', 
}

let rahimi = {
	manage: '0', 
}

let police = {
	manage: '0', 
}

let bolnisa = {
	manage: '0', 
}

let etazh_2 = {
	manage: '0', 
}

let mersedes = {
	manage: '0', 
}

let bank = {
	manage: '0', 
}

let restoran = {
	manage: '0', 
}

let xona = {
	manage: '0', 
}


var player_1pro = 0;
var player_2pro = 0;
var player_3pro = 0;


let locate_1 = 1;
let locate_2 = 1;
let locate_3 = 1;

document.querySelector('.name_1').style.color = 'red';
document.querySelector('.name_2').style.color = 'green';
document.querySelector('.name_3').style.color = 'blue';

document.body.style.overflowX = "hidden";
document.body.classList.toggle('scroll-lock');

function example(classn, loc) {
	if (locate_1 == loc) {
		document.querySelector(classn).style.borderTop = "8px red solid"
	} else if (locate_3 == loc) {
		document.querySelector(classn).style.borderTop = "8px blue solid"
	}
}

function exa2(classn, loc) {
	if (locate_1 == loc) {
		document.querySelector(classn).style.borderTop = "8px red solid"
	} else if (locate_2 == loc) {
		document.querySelector(classn).style.borderTop = "8px #2bf52b solid"
	}
}

var n1 = '.bapesh';
var n2 = '.bozor';
var n3 = '.etazh';
var n4 = '.shtraf';
var n5 = '.rahimi';
var n6 = '.tuhfa';
var n7 = '.turma';
var n8 = '.police';
var n9 = '.nimi_pul';
var n10 = '.bolnisa';
var n11 = '.bankrot';
var n12 = '.bomba';
var n13 = '.etazh_2';
var n14 = '.avtomat'
var n15 = '.bomba_2';
var n16 = '.mersedes';
var n17 = '.lotoreya';
var n18 = '.najot';
var n19 = '.bank';
var n20 = '.two_x';
var n21 = '.bashkun';
var n22 = '.restoran';
var n23 = '.xona'

var l1 = 1;
var l2 = 2;
var l3 = 3;
var l4 = 4;
var l5 = 5;
var l6 = 6;
var l7 = 7;
var l8 = 9;
var l9 = 9;
var l10 = 10;
var l11 = 11;
var l12 = 12;
var l13 = 13;
var l14 = 14;
var l15 = 15;
var l16 = 16;
var l17 = 17;
var l18 = 18;
var l19 = 19;
var l20 = 20;
var l21 = 21;
var l22 = 22;
var l23 = 23;

let p2 = '.bozor_pro';
let p3 = '.etazh_pro';
let p5 = '.rahimi_pro';
let p8 = '.police_pro';
let p10 = '.bolnisa_pro';
let p13 = '.etazh_2_pro';
let p16 = '.mersedes_pro';
let p19 = '.bank_pro';
let p22 = '.restoran_pro';
let p23 = '.xona_pro';


example(n1, l1);

let turn_1 = 'nach';
let turn_2 = 'nach';
let turn_3 = 'nach';

let reserve1 ;
let reserve2 ;
let reserve3 ;

var money1 = 0;
var money3 = 0;
var money2 = 30000;

var player_1;
var player_2;
var player_3;

function purchase2( price, manage, profit, property) {
	if (money2 > price) {
		if (manage == '0') {
			manage = '2';
			document.querySelector(property).textContent = player_2;

			money2 -= price;
			player_2pro += profit;

			document.querySelector('.money2').textContent = money2;
		} else {
			alert('Mutaasifona injoro alakai digar kas xaridaast!');	
		}
	} else {
		alert('Bubakhshed pulaton baroi xaridani in jo namerasad!');
	}
}

play.onclick = function() {
	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.enter').style.display = "none";
	player_1 = document.getElementById('player1').value;
	player_2 = document.getElementById('player2').value;
	player_3 = document.getElementById('player3').value;

	document.querySelector('.player_name1').textContent = player_1;
	document.querySelector('.player_name2').textContent = player_3;
	document.querySelector('.player_name3').textContent = player_2;

	document.getElementById('turn').textContent = `Xodi: ${player_1}`
}



xod_kun.onclick = function() {

	document.querySelector('.name_1').style.color = 'red';
	document.querySelector('.name_2').style.color = 'green';
	document.querySelector('.name_3').style.color = 'blue';


	let rand  = Math.floor(Math.random() * (7 - 1) + 1);
	document.getElementById('demo').textContent = rand;
	document.getElementById('demo').style.display = 'block';

	if (turn_1 == 'nach') {
		turn_1 = 'on';
		turn_2 = 'off';
		turn_3 = 'off';
	} else if (turn_1 == 'on') {
		turn_2 = 'on';
		turn_1 = 'off';
	} else if (turn_2 == 'on') {
		turn_3 = 'on';
		turn_2 = 'off';
	} else if (turn_3 == 'on') {
		turn_1 = 'on';
		turn_3 = 'off';
	}

	document.querySelector('.profit_1').textContent = player_1pro;
	document.querySelector('.profit_2').textContent = player_2pro;
	document.querySelector('.profit_3').textContent = player_3pro;

	// first turn___________________________________________________________________________________________________________________

	if (turn_1 == 'on') {

		money1 += player_1pro;
		document.querySelector('.money1').textContent = money1;

		document.querySelector('.profit_1').textContent = player_1pro;

		document.getElementById('turn').textContent = `Xodi: ${player_2}`;

		if (locate_1 == 1) {
			document.querySelector('.bapesh').style.border = "6px black solid";
			if (locate_2 == 1) {
				document.querySelector('.bapesh').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 1) {
				document.querySelector('.bapesh').style.border = "8px blue solid";
			} else {
				document.querySelector('.bapesh').style.border = "6 black solid";
			}
		} else if (locate_1 == 2) {
			document.querySelector('.bozor').style.border = "6px black solid";
			if (locate_2 == 2) {
				document.querySelector('.bozor').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 2) {
				document.querySelector('.bozor').style.border = "8px blue solid";
			} else {
				document.querySelector('.bozor').style.border = "6 black solid";
			}
		} else if (locate_1 == 3) {
			document.querySelector('.etazh').style.border = "6px black solid";
			if (locate_2 == 3) {
				document.querySelector('.etazh').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 3) {
				document.querySelector('.etazh').style.border = "8px blue solid";
			} else {
				document.querySelector('.etazh').style.border = "6 black solid";
			}
		} else if (locate_1 == 4) {
			document.querySelector('.shtraf').style.border = "6px black solid";
			if (locate_2 == 4) {
				document.querySelector('.shtraf').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 4) {
				document.querySelector('.shtraf').style.border = "8px blue solid";
			} else {
				document.querySelector('.shtraf').style.border = "6 black solid";
			}
		} else if (locate_1 == 5) {
			document.querySelector('.rahimi').style.border = "6px black solid";
			if (locate_2 == 5) {
				document.querySelector('.rahimi').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 5) {
				document.querySelector('.rahimi').style.border = "8px blue solid";
			} else {
				document.querySelector('.rahimi').style.border = "6 black solid";
			}
		} else if (locate_1 == 6) {
			document.querySelector('.tuhfa').style.border = "6px black solid";
			if (locate_2 == 6) {
				document.querySelector('.tuhfa').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 6) {
				document.querySelector('.tuhfa').style.border = "8px blue solid";
			} else {
				document.querySelector('.tuhfa').style.border = "6 black solid";
			}
		} else if (locate_1 == 7) {
			document.querySelector('.turma').style.border = "6px black solid";
			if (locate_2 == 7) {
				document.querySelector('.turma').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 7) {
				document.querySelector('.turma').style.border = "8px blue solid";
			} else {
				document.querySelector('.turma').style.border = "6 black solid";
			}
		} else if (locate_1 == 8) {
			document.querySelector('.police').style.border = "6px black solid";
			if (locate_2 == 8) {
				document.querySelector('.police').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 8) {
				document.querySelector('.police').style.border = "8px blue solid";
			} else {
				document.querySelector('.police').style.border = "6 black solid";
			}
		} else if (locate_1 == 9) {
			document.querySelector('.nimi_pul').style.border = "6px black solid";
			if (locate_2 == 9) {
				document.querySelector('.nimi_pul').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 9) {
				document.querySelector('.nimi_pul').style.border = "8px blue solid";
			} else {
				document.querySelector('.nimi_pul').style.border = "6 black solid";
			}
		} else if (locate_1 == 10) {
			document.querySelector('.bolnisa').style.border = "6px black solid";
			if (locate_2 == 10) {
				document.querySelector('.bolnisa').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 10) {
				document.querySelector('.bolnisa').style.border = "8px blue solid";
			} else {
				document.querySelector('.bolnisa').style.border = "6 black solid";
			}
		} else if (locate_1 == 11) {
			document.querySelector('.bankrot').style.border = "6px black solid";
			if (locate_2 == 11) {
				document.querySelector('.bankrot').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 11) {
				document.querySelector('.bankrot').style.border = "8px blue solid";
			} else {
				document.querySelector('.bankrot').style.border = "6 black solid";
			}
		} else if (locate_1 == 12) {
			document.querySelector('.bomba').style.border = "6px black solid";
			if (locate_2 == 12) {
				document.querySelector('.bomba').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 12) {
				document.querySelector('.bomba').style.border = "8px blue solid";
			} else {
				document.querySelector('.bomba').style.border = "6 black solid";
			}
		} else if (locate_1 == 13) {
			document.querySelector('.etazh_2').style.border = "6px black solid";
			if (locate_2 == 13) {
				document.querySelector('.etazh_2').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 13) {
				document.querySelector('.etazh_2').style.border = "8px blue solid";
			} else {
				document.querySelector('.etazh_2').style.border = "6 black solid";
			}
		} else if (locate_1 == 14) {
			document.querySelector('.avtomat').style.border = "6px black solid";
			if (locate_2 == 14) {
				document.querySelector('.avtomat').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 14) {
				document.querySelector('.avtomat').style.border = "8px blue solid";
			} else {
				document.querySelector('.avtomat').style.border = "6 black solid";
			}
		} else if (locate_1 == 15) {
			document.querySelector('.bomba_2').style.border = "6px black solid";
			if (locate_2 == 15) {
				document.querySelector('.bomba_2').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 15) {
				document.querySelector('.bomba_2').style.border = "8px blue solid";
			} else {
				document.querySelector('.bomba_2').style.border = "6 black solid";
			}
		} else if (locate_1 == 16) {
			document.querySelector('.mersedes').style.border = "6px black solid";
			if (locate_2 == 16) {
				document.querySelector('.mersedes').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 16) {
				document.querySelector('.mersedes').style.border = "8px blue solid";
			} else {
				document.querySelector('.mersedes').style.border = "6 black solid";
			}
		} else if (locate_1 == 17) {
			document.querySelector('.lotoreya').style.border = "6px black solid";
			if (locate_2 == 17) {
				document.querySelector('.lotoreya').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 17) {
				document.querySelector('.lotoreya').style.border = "8px blue solid";
			} else {
				document.querySelector('.lotoreya').style.border = "6 black solid";
			}
		} else if (locate_1 == 18) {
			document.querySelector('.najot').style.border = "6px black solid";
			if (locate_2 == 18) {
				document.querySelector('.najot').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 18) {
				document.querySelector('.najot').style.border = "8px blue solid";
			} else {
				document.querySelector('.najot').style.border = "6 black solid";
			}
		} else if (locate_1 == 19) {
			document.querySelector('.bank').style.border = "6px black solid";
			if (locate_2 == 19) {
				document.querySelector('.bank').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 19) {
				document.querySelector('.bank').style.border = "8px blue solid";
			} else {
				document.querySelector('.bank').style.border = "6 black solid";
			}
		} else if (locate_1 == 20) {
			document.querySelector('.two_x').style.border = "6px black solid";
			if (locate_2 == 20) {
				document.querySelector('.two_x').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 20) {
				document.querySelector('.two_x').style.border = "8px blue solid";
			} else {
				document.querySelector('.two_x').style.border = "6 black solid";
			}
		} else if (locate_1 == 21) {
			document.querySelector('.bashkun').style.border = "6px black solid";
			if (locate_2 == 21) {
				document.querySelector('.bashkun').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 21) {
				document.querySelector('.bashkun').style.border = "8px blue solid";
			} else {
				document.querySelector('.bashkun').style.border = "6 black solid";
			}
		} else if (locate_1 == 22) {
			document.querySelector('.restoran').style.border = "6px black solid";
			if (locate_2 == 22) {
				document.querySelector('.restoran').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 22) {
				document.querySelector('.restoran').style.border = "8px blue solid";
			} else {
				document.querySelector('.restoran').style.border = "6 black solid";
			}
		} else if (locate_1 == 23) {
			document.querySelector('.xona').style.border = "6px black solid";
			if (locate_2 == 23) {
				document.querySelector('.xona').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 23) {
				document.querySelector('.xona').style.border = "8px blue solid";
			} else {
				document.querySelector('.xona').style.border = "6 black solid";
			}
		}

		locate_1 += rand;
		
		document.getElementById('demo').style.color = "red";
		document.getElementById('xod_kun').style.color = "red";


		if (locate_1 > 23) {
			money1 += 1000;
			document.querySelector('.money1').textContent = money1;

			var f_rest = locate_1 - 23; 
			locate_1 = 0;

			locate_1 = f_rest;
		}

		
		if (locate_1 == 1) {
			document.querySelector('.bapesh').style.border = "8px red solid";
			if (locate_2 == 1 ) {
				document.querySelector('.bapesh').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 1) {
				document.querySelector('.bapesh').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 2) {
			document.querySelector('.bozor').style.border = "8px red solid";
			if (locate_2 == 2 ) {
				document.querySelector('.bozor').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 2) {
				document.querySelector('.bozor').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 3) {
			document.querySelector('.etazh').style.border = "8px red solid";
			if (locate_2 == 3 ) {
				document.querySelector('.etazh').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 3) {
				document.querySelector('.etazh').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 4) {
			document.querySelector('.shtraf').style.border = "8px red solid";
			if (locate_2 == 4 ) {
				document.querySelector('.shtraf').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 4) {
				document.querySelector('.shtraf').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 5) {
			document.querySelector('.rahimi').style.border = "8px red solid";
			if (locate_2 == 5 ) {
				document.querySelector('.rahimi').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 5) {
				document.querySelector('.rahimi').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 6) {
			document.querySelector('.tuhfa').style.border = "8px red solid";
			if (locate_2 == 6 ) {
				document.querySelector('.tuhfa').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 6) {
				document.querySelector('.tuhfa').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 7) {
			document.querySelector('.turma').style.border = "8px red solid";
			if (locate_2 == 7 ) {
				document.querySelector('.turma').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 7) {
				document.querySelector('.turma').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 8) {
			document.querySelector('.police').style.border = "8px red solid";
			if (locate_2 == 8 ) {
				document.querySelector('.police').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 8) {
				document.querySelector('.police').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 9) {
			document.querySelector('.nimi_pul').style.border = "8px red solid";
			if (locate_2 == 9 ) {
				document.querySelector('.nimi_pul').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 9) {
				document.querySelector('.nimi_pul').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 10) {
			document.querySelector('.bolnisa').style.border = "8px red solid";
			if (locate_2 == 10 ) {
				document.querySelector('.bolnisa').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 10) {
				document.querySelector('.bolnisa').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 11) {
			document.querySelector('.bankrot').style.border = "8px red solid";
			if (locate_2 == 11 ) {
				document.querySelector('.bankrot').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 11) {
				document.querySelector('.bankrot').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 12) {
			document.querySelector('.bomba').style.border = "8px red solid";
			if (locate_2 == 12 ) {
				document.querySelector('.bomba').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 12) {
				document.querySelector('.bomba').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 13) {
			document.querySelector('.etazh_2').style.border = "8px red solid";
			if (locate_2 == 13 ) {
				document.querySelector('.etazh_2').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 13) {
				document.querySelector('.etazh_2').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 14) {
			document.querySelector('.avtomat').style.border = "8px red solid";
			if (locate_2 == 14 ) {
				document.querySelector('.avtomat').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 14) {
				document.querySelector('.avtomat').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 15) {
			document.querySelector('.bomba_2').style.border = "8px red solid";
			if (locate_2 == 15 ) {
				document.querySelector('.bomba_2').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 15) {
				document.querySelector('.bomba_2').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 16) {
			document.querySelector('.mersedes').style.border = "8px red solid";
			if (locate_2 == 16 ) {
				document.querySelector('.mersedes').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 16) {
				document.querySelector('.mersedes').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 17) {
			document.querySelector('.lotoreya').style.border = "8px red solid";
			if (locate_2 == 17 ) {
				document.querySelector('.lotoreya').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 17) {
				document.querySelector('.lotoreya').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 18) {
			document.querySelector('.najot').style.border = "8px red solid";
			if (locate_2 == 18 ) {
				document.querySelector('.najot').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 18) {
				document.querySelector('.najot').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 19) {
			document.querySelector('.bank').style.border = "8px red solid";
			if (locate_2 == 19 ) {
				document.querySelector('.bank').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 19) {
				document.querySelector('.bank').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 20) {
			document.querySelector('.two_x').style.border = "8px red solid";
			if (locate_2 == 20 ) {
				document.querySelector('.two_x').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 20) {
				document.querySelector('.two_x').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 21) {
			document.querySelector('.bashkun').style.border = "8px red solid";
			if (locate_2 == 21 ) {
				document.querySelector('.bashkun').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 21) {
				document.querySelector('.bashkun').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 22) {
			document.querySelector('.restoran').style.border = "8px red solid";
			if (locate_2 == 22 ) {
				document.querySelector('.restoran').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 22) {
				document.querySelector('.restoran').style.borderTop = "8px blue solid "
			}
		} else if (locate_1 == 23) {
			document.querySelector('.xona').style.border = "8px red solid";
			if (locate_2 == 23 ) {
				document.querySelector('.xona').style.borderTop = "8px #2bf52b solid";
			} else if (locate_3 == 23) {
				document.querySelector('.xona').style.borderTop = "8px blue solid "
			}
		}

		

	// second turn_________________________________________________________________________________________________________________	

	} else if (turn_2 == 'on') {

		money2 += player_2pro;
		document.querySelector('.money2').textContent = money2;

		document.querySelector('.profit_2').textContent = player_2pro;

		document.getElementById('turn').textContent = `Xodi: ${player_3}`;

		if (locate_2 == 1) {
			document.querySelector('.bapesh').style.border = "6px black solid";
			if (locate_1 == 1) {
				document.querySelector('.bapesh').style.border = "8px red solid";
			} else if (locate_3 == 1) {
				document.querySelector('.bapesh').style.border = "8px blue solid";
			}
		} else if (locate_2 == 2) {
			document.querySelector('.bozor').style.border = "6px black solid";
			if (locate_1 == 2) {
				document.querySelector('.bozor').style.border = "8px red solid";
			} else if (locate_3 == 2) {
				document.querySelector('.bozor').style.border = "8px blue solid";
			}
		} else if (locate_2 == 3) {
			document.querySelector('.etazh').style.border = "6px black solid";
			if (locate_1 == 3) {
				document.querySelector('.etazh').style.border = "8px red solid";
			} else if (locate_3 == 3) {
				document.querySelector('.etazh').style.border = "8px blue solid";
			}
		} else if (locate_2 == 4) {
			document.querySelector('.shtraf').style.border = "6px black solid";
			if (locate_1 == 4) {
				document.querySelector('.shtraf').style.border = "8px red solid";
			} else if (locate_3 == 4) {
				document.querySelector('.shtraf').style.border = "8px blue solid";
			}
		} else if (locate_2 == 5) {
			document.querySelector('.rahimi').style.border = "6px black solid";
			if (locate_1 == 5) {
				document.querySelector('.rahimi').style.border = "8px red solid";
			} else if (locate_3 == 5) {
				document.querySelector('.rahimi').style.border = "8px blue solid";
			}
		} else if (locate_2 == 6) {
			document.querySelector('.tuhfa').style.border = "6px black solid";
			if (locate_1 == 6) {
				document.querySelector('.tuhfa').style.border = "8px red solid";
			} else if (locate_3 == 6) {
				document.querySelector('.tuhfa').style.border = "8px blue solid";
			}
		} else if (locate_2 == 7) {
			document.querySelector('.turma').style.border = "6px black solid";
			if (locate_1 == 7) {
				document.querySelector('.turma').style.border = "8px red solid";
			} else if (locate_3 == 7) {
				document.querySelector('.turma').style.border = "8px blue solid";
			}
		} else if (locate_2 == 8) {
			document.querySelector('.police').style.border = "6px black solid";
			if (locate_1 == 8) {
				document.querySelector('.police').style.border = "8px red solid";
			} else if (locate_3 == 8) {
				document.querySelector('.police').style.border = "8px blue solid";
			}
		} else if (locate_2 == 9) {
			document.querySelector('.nimi_pul').style.border = "6px black solid";
			if (locate_1 == 9) {
				document.querySelector('.nimi_pul').style.border = "8px red solid";
			} else if (locate_3 == 9) {
				document.querySelector('.nimi_pul').style.border = "8px blue solid";
			}
		} else if (locate_2 == 10) {
			document.querySelector('.bolnisa').style.border = "6px black solid";
			if (locate_1 == 10) {
				document.querySelector('.bolnisa').style.border = "8px red solid";
			} else if (locate_3 == 10) {
				document.querySelector('.bolnisa').style.border = "8px blue solid";
			}
		} else if (locate_2 == 11) {
			document.querySelector('.bankrot').style.border = "6px black solid";
			if (locate_1 == 11) {
				document.querySelector('.bankrot').style.border = "8px red solid";
			} else if (locate_3 == 11) {
				document.querySelector('.bankrot').style.border = "8px blue solid";
			}
		} else if (locate_2 == 12) {
			document.querySelector('.bomba').style.border = "6px black solid";
			if (locate_1 == 12) {
				document.querySelector('.bomba').style.border = "8px red solid";
			} else if (locate_3 == 12) {
				document.querySelector('.bomba').style.border = "8px blue solid";
			}
		} else if (locate_2 == 13) {
			document.querySelector('.etazh_2').style.border = "6px black solid";
			if (locate_1 == 13) {
				document.querySelector('.etazh_2').style.border = "8px red solid";
			} else if (locate_3 == 13) {
				document.querySelector('.etazh_2').style.border = "8px blue solid";
			}
		} else if (locate_2 == 14) {
			document.querySelector('.avtomat').style.border = "6px black solid";
			if (locate_1 == 14) {
				document.querySelector('.avtomat').style.border = "8px red solid";
			} else if (locate_3 == 14) {
				document.querySelector('.avtomat').style.border = "8px blue solid";
			}
		} else if (locate_2 == 15) {
			document.querySelector('.bomba_2').style.border = "6px black solid";
			if (locate_1 == 15) {
				document.querySelector('.bomba_2').style.border = "8px red solid";
			} else if (locate_3 == 15) {
				document.querySelector('.bomba_2').style.border = "8px blue solid";
			}
		} else if (locate_2 == 16) {
			document.querySelector('.mersedes').style.border = "6px black solid";
			if (locate_1 == 16) {
				document.querySelector('.mersedes').style.border = "8px red solid";
			} else if (locate_3 == 16) {
				document.querySelector('.mersedes').style.border = "8px blue solid";
			}
		} else if (locate_2 == 17) {
			document.querySelector('.lotoreya').style.border = "6px black solid";
			if (locate_1 == 17) {
				document.querySelector('.lotoreya').style.border = "8px red solid";
			} else if (locate_3 == 17) {
				document.querySelector('.lotoreya').style.border = "8px blue solid";
			}
		} else if (locate_2 == 18) {
			document.querySelector('.najot').style.border = "6px black solid";
			if (locate_1 == 18) {
				document.querySelector('.najot').style.border = "8px red solid";
			} else if (locate_3 == 18) {
				document.querySelector('.najot').style.border = "8px blue solid";
			}
		} else if (locate_2 == 19) {
			document.querySelector('.bank').style.border = "6px black solid";
			if (locate_1 == 19) {
				document.querySelector('.bank').style.border = "8px red solid";
			} else if (locate_3 == 19) {
				document.querySelector('.bank').style.border = "8px blue solid";
			}
		} else if (locate_2 == 20) {
			document.querySelector('.two_x').style.border = "6px black solid";
			if (locate_1 == 20) {
				document.querySelector('.two_x').style.border = "8px red solid";
			} else if (locate_3 == 20) {
				document.querySelector('.two_x').style.border = "8px blue solid";
			}
		} else if (locate_2 == 21) {
			document.querySelector('.bashkun').style.border = "6px black solid";
			if (locate_1 == 21) {
				document.querySelector('.bashkun').style.border = "8px red solid";
			} else if (locate_3 == 21) {
				document.querySelector('.bashkun').style.border = "8px blue solid";
			}
		} else if (locate_2 == 22) {
			document.querySelector('.restoran').style.border = "6px black solid";
			if (locate_1 == 22) {
				document.querySelector('.restoran').style.border = "8px red solid";
			} else if (locate_3 == 22) {
				document.querySelector('.restoran').style.border = "8px blue solid";
			}
		} else if (locate_2 == 23) {
			document.querySelector('.xona').style.border = "6px black solid";
			if (locate_1 == 23) {
				document.querySelector('.xona').style.border = "8px red solid";
			} else if (locate_3 == 23) {
				document.querySelector('.xona').style.border = "8px blue solid";
			}
		}


		locate_2 += rand;


		document.getElementById('demo').style.color = "#13cc07";
		document.getElementById('xod_kun').style.color = "#13cc07";
	

		if (locate_2 > 23) {
			money2+= 1000;
			document.querySelector('.money2').textContent = money2;

			var s_rest = locate_2 - 23; 
			locate_2 = 0;

			locate_2 = s_rest;
		}

		
		
		if (locate_2 == 1) {
			document.querySelector('.bapesh').style.border = "8px #2bf52b solid";
			if (locate_1 == 1 ) {
				document.querySelector('.bapesh').style.borderTop = "8px red solid";
			} else if (locate_3 == 1) {
				document.querySelector('.bapesh').style.borderTop = "8px blue solid "
			}
		} else if (locate_2 == 2) {
			document.querySelector('.bozor').style.border = "8px #2bf52b solid";
			if (locate_1 == 2 ) {
				document.querySelector('.bozor').style.borderTop = "8px red solid";
			} else if (locate_3 == 2) {
				document.querySelector('.bozor').style.borderTop = "8px blue solid "
			}
		} else if (locate_2 == 3) {
			document.querySelector('.etazh').style.border = "8px #2bf52b solid";
			if (locate_1 == 3 ) {
				document.querySelector('.etazh').style.borderTop = "8px red solid";
			} else if (locate_3 == 3) {
				document.querySelector('.etazh').style.borderTop = "8px blue solid "
			}
		} else if (locate_2 == 4) {
			document.querySelector('.shtraf').style.border = "8px #2bf52b solid";
			if (locate_1 == 4 ) {
				document.querySelector('.shtraf').style.borderTop = "8px red solid";
			} else if (locate_3 == 4) {
				document.querySelector('.shtraf').style.borderTop = "8px blue solid "
			}
		} else if (locate_2 == 5) {
			document.querySelector('.rahimi').style.border = "8px #2bf52b solid";
			if (locate_1 == 5 ) {
				document.querySelector('.rahimi').style.borderTop = "8px red solid";
			} else if (locate_3 == 5) {
				document.querySelector('.rahimi').style.borderTop = "8px blue solid "
			}
		} else if (locate_2 == 6) {
			document.querySelector('.tuhfa').style.border = "8px #2bf52b solid";
			example(n6, l6);
		} else if (locate_2 == 7) {
			document.querySelector('.turma').style.border = "8px #2bf52b solid";
			example(n7, l7);
		} else if (locate_2 == 8) {
			document.querySelector('.police').style.border = "8px #2bf52b solid";
			example(n8, l8);
		} else if (locate_2 == 9) {
			document.querySelector('.nimi_pul').style.border = "8px #2bf52b solid";
			example(n9, l9);
		} else if (locate_2 == 10) {
			document.querySelector('.bolnisa').style.border = "8px #2bf52b solid";
			example(n10, l10);
		} else if (locate_2 == 11) {
			document.querySelector('.bankrot').style.border = "8px #2bf52b solid";
			example(n11, l11);
		} else if (locate_2 == 12) {
			document.querySelector('.bomba').style.border = "8px #2bf52b solid";
			example(n12, l12);
		} else if (locate_2 == 13) {
			document.querySelector('.etazh_2').style.border = "8px #2bf52b solid";
			example(n13, l13);
		} else if (locate_2 == 14) {
			document.querySelector('.avtomat').style.border = "8px #2bf52b solid";
			example(n14, l14);
		} else if (locate_2 == 15) {
			document.querySelector('.bomba_2').style.border = "8px #2bf52b solid";
			example(n15, l15);
		} else if (locate_2 == 16) {
			document.querySelector('.mersedes').style.border = "8px #2bf52b solid";
			example(n16, l16);
		} else if (locate_2 == 17) {
			document.querySelector('.lotoreya').style.border = "8px #2bf52b solid";
			example(n17, l17);
		} else if (locate_2 == 18) {
			document.querySelector('.najot').style.border = "8px #2bf52b solid";
			example(n18, l18);
		} else if (locate_2 == 19) {
			document.querySelector('.bank').style.border = "8px #2bf52b solid";
			example(n19, l19);
		} else if (locate_2 == 20) {
			document.querySelector('.two_x').style.border = "8px #2bf52b solid";
			example(n20, l20);
		} else if (locate_2 == 21) {
			document.querySelector('.bashkun').style.border = "8px #2bf52b solid";
			example(n21, l21);
		} else if (locate_2 == 22) {
			document.querySelector('.restoran').style.border = "8px #2bf52b solid";
			example(n22, l22);
		} else if (locate_2 == 23) {
			document.querySelector('.xona').style.border = "8px #2bf52b solid";
			example(n23, l23);
		}
	//  third turn_________________________________________________________________________________________________________________	

	} else if (turn_3 == 'on') {


		money3 += player_3pro;
		document.querySelector('.money3').textContent = money3;

		document.querySelector('.profit_3').textContent = player_3pro;

		document.getElementById('turn').textContent = `Xodi: ${player_1}`;


		if (locate_3 == 1) {
			document.querySelector('.bapesh').style.border = "6px black solid";
			if (locate_1 == 1) {
				document.querySelector('.bapesh').style.border = "8px red solid";
			} else if (locate_2 == 1) {
				document.querySelector('.bapesh').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 2) {
			document.querySelector('.bozor').style.border = "6px black solid";
			if (locate_1 == 2) {
				document.querySelector('.bozor').style.border = "8px red solid";
			} else if (locate_2 == 2) {
				document.querySelector('.bozor').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 3) {
			document.querySelector('.etazh').style.border = "6px black solid";
			if (locate_1 == 3) {
				document.querySelector('.etazh').style.border = "8px red solid";
			} else if (locate_2 == 3) {
				document.querySelector('.etazh').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 4) {
			document.querySelector('.shtraf').style.border = "6px black solid";
			if (locate_1 == 4) {
				document.querySelector('.shtraf').style.border = "8px red solid";
			} else if (locate_2 == 4) {
				document.querySelector('.shtraf').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 5) {
			document.querySelector('.rahimi').style.border = "6px black solid";
			if (locate_1 == 5) {
				document.querySelector('.rahimi').style.border = "8px red solid";
			} else if (locate_2 == 5) {
				document.querySelector('.rahimi').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 6) {
			document.querySelector('.tuhfa').style.border = "6px black solid";
			if (locate_1 == 6) {
				document.querySelector('.tuhfa').style.border = "8px red solid";
			} else if (locate_2 == 6) {
				document.querySelector('.tuhfa').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 7) {
			document.querySelector('.turma').style.border = "6px black solid";
			if (locate_1 == 7) {
				document.querySelector('.turma').style.border = "8px red solid";
			} else if (locate_2 == 7) {
				document.querySelector('.turma').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 8) {
			document.querySelector('.police').style.border = "6px black solid";
			if (locate_1 == 8) {
				document.querySelector('.police').style.border = "8px red solid";
			} else if (locate_2 == 8) {
				document.querySelector('.police').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 9) {
			document.querySelector('.nimi_pul').style.border = "6px black solid";
			if (locate_1 == 9) {
				document.querySelector('.nimi_pul').style.border = "8px red solid";
			} else if (locate_2 == 9) {
				document.querySelector('.nimi_pul').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 10) {
			document.querySelector('.bolnisa').style.border = "6px black solid";
			if (locate_1 == 10) {
				document.querySelector('.bolnisa').style.border = "8px red solid";
			} else if (locate_2 == 10) {
				document.querySelector('.bolnisa').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 11) {
			document.querySelector('.bankrot').style.border = "6px black solid";
			if (locate_1 == 11) {
				document.querySelector('.bankrot').style.border = "8px red solid";
			} else if (locate_2 == 11) {
				document.querySelector('.bankrot').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 12) {
			document.querySelector('.bomba').style.border = "6px black solid";
			if (locate_1 == 12) {
				document.querySelector('.bomba').style.border = "8px red solid";
			} else if (locate_2 == 12) {
				document.querySelector('.bomba').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 13) {
			document.querySelector('.etazh_2').style.border = "6px black solid";
			if (locate_1 == 13) {
				document.querySelector('.etazh_2').style.border = "8px red solid";
			} else if (locate_2 == 13) {
				document.querySelector('.etazh_2').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 14) {
			document.querySelector('.avtomat').style.border = "6px black solid";
			if (locate_1 == 14) {
				document.querySelector('.avtomat').style.border = "8px red solid";
			} else if (locate_2 == 14) {
				document.querySelector('.avtomat').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 15) {
			document.querySelector('.bomba_2').style.border = "6px black solid";
			if (locate_1 == 15) {
				document.querySelector('.bomba_2').style.border = "8px red solid";
			} else if (locate_2 == 15) {
				document.querySelector('.bomba_2').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 16) {
			document.querySelector('.mersedes').style.border = "6px black solid";
			if (locate_1 == 16) {
				document.querySelector('.mersedes').style.border = "8px red solid";
			} else if (locate_2 == 16) {
				document.querySelector('.mersedes').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 17) {
			document.querySelector('.lotoreya').style.border = "6px black solid";
			if (locate_1 == 17) {
				document.querySelector('.lotoreya').style.border = "8px red solid";
			} else if (locate_2 == 17) {
				document.querySelector('.lotoreya').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 18) {
			document.querySelector('.najot').style.border = "6px black solid";
			if (locate_1 == 18) {
				document.querySelector('.najot').style.border = "8px red solid";
			} else if (locate_2 == 18) {
				document.querySelector('.najot').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 19) {
			document.querySelector('.bank').style.border = "6px black solid";
			if (locate_1 == 19) {
				document.querySelector('.bank').style.border = "8px red solid";
			} else if (locate_2 == 19) {
				document.querySelector('.bank').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 20) {
			document.querySelector('.two_x').style.border = "6px black solid";
			if (locate_1 == 20) {
				document.querySelector('.two_x').style.border = "8px red solid";
			} else if (locate_2 == 20) {
				document.querySelector('.two_x').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 21) {
			document.querySelector('.bashkun').style.border = "6px black solid";
			if (locate_1 == 21) {
				document.querySelector('.bashkun').style.border = "8px red solid";
			} else if (locate_2 == 21) {
				document.querySelector('.bashkun').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 22) {
			document.querySelector('.restoran').style.border = "6px black solid";
			if (locate_1 == 22) {
				document.querySelector('.restoran').style.border = "8px red solid";
			} else if (locate_2 == 22) {
				document.querySelector('.restoran').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 23) {
			document.querySelector('.xona').style.border = "6px black solid";
			if (locate_1 == 23) {
				document.querySelector('.xona').style.border = "8px red solid";
			} else if (locate_2 == 23) {
				document.querySelector('.xona').style.border = "8px #2bf52b solid";
			}
		}


		locate_3 += rand;


		document.getElementById('demo').style.color = "blue";
		document.getElementById('xod_kun').style.color = "blue";

		if (locate_3 > 23) {
			money3 += 1000;
			document.querySelector('.money3').textContent = money3;

			var t_rest = locate_3 - 23; 
			locate_3 = 0;

			locate_3 = t_rest;
		}


		

		if (locate_3 == 1) {
			document.querySelector('.bapesh').style.border = "8px blue solid";
			exa2(n1, l1);
		} else if (locate_3 == 2) {
			document.querySelector('.bozor').style.border = "8px blue solid";
			exa2(n2, l2);
		} else if (locate_3 == 3) {
			document.querySelector('.etazh').style.border = "8px blue solid";
			exa2(n3, l3);
		} else if (locate_3 == 4) {
			document.querySelector('.shtraf').style.border = "8px blue solid";
			exa2(n1, l4);
		} else if (locate_3 == 5) {
			document.querySelector('.rahimi').style.border = "8px blue solid";
			exa2(n5, l5);
		} else if (locate_3 == 6) {
			document.querySelector('.tuhfa').style.border = "8px blue solid";
			exa2(n6, l6);
		} else if (locate_3 == 7) {
			document.querySelector('.turma').style.border = "8px blue solid";
			exa2(n7, l7);
		} else if (locate_3 == 8) {
			document.querySelector('.police').style.border = "8px blue solid";
			exa2(n8, l8);
		} else if (locate_3 == 9) {
			document.querySelector('.nimi_pul').style.border = "8px blue solid";
			exa2(n9, l9);
		} else if (locate_3 == 10) {
			document.querySelector('.bolnisa').style.border = "8px blue solid";
			exa2(n10, l10);
		} else if (locate_3 == 11) {
			document.querySelector('.bankrot').style.border = "8px blue solid";
			exa2(n11, l11);
		} else if (locate_3 == 12) {
			document.querySelector('.bomba').style.border = "8px blue solid";
			exa2(n12, l12);
		} else if (locate_3 == 13) {
			document.querySelector('.etazh_2').style.border = "8px blue solid";
			exa2(n13, l13);
		} else if (locate_3 == 14) {
			document.querySelector('.avtomat').style.border = "8px blue solid";
			exa2(n14, l14);
		} else if (locate_3 == 15) {
			document.querySelector('.bomba_2').style.border = "8px blue solid";
			exa2(n15, l15);
		} else if (locate_3 == 16) {
			document.querySelector('.mersedes').style.border = "8px blue solid";
			exa2(n16, l16);
		} else if (locate_3 == 17) {
			document.querySelector('.lotoreya').style.border = "8px blue solid";
			exa2(n17, l17);
		} else if (locate_3 == 18) {
			document.querySelector('.najot').style.border = "8px blue solid";
			exa2(n18, l18);
		} else if (locate_3 == 19) {
			document.querySelector('.bank').style.border = "8px blue solid";
			exa2(n19, l19);
		} else if (locate_3 == 20) {
			document.querySelector('.two_x').style.border = "8px blue solid";
			exa2(n20, l20);
		} else if (locate_3 == 21) {
			document.querySelector('.bashkun').style.border = "8px blue solid";
			exa2(n21, l21);
		} else if (locate_3 == 22) {
			document.querySelector('.restoran').style.border = "8px blue solid";
			exa2(n22, l22);
		} else if (locate_3 == 23) {
			document.querySelector('.xona').style.border = "8px blue solid";
			exa2(n23, l23);
		}
	}
}

// turns have finished!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

manage.onclick = function() {
	console.log('hello ');
	if (turn_1 == 'on') {
		if (locate_1 == 2) {
			if (money1 > 2200) {
				if (bozor.manage == '0') {
					bozor.manage = '1';
					document.querySelector('.bozor_pro').textContent = player_1;

					money1 -= 2200;
					player_1pro += 250;

					document.querySelector('.money1').textContent = money1;
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 3) {
			if (money1 > 1700) {
				if (etazh.manage == '0') {
					etazh.manage = '1';
					document.querySelector('.etazh_pro').textContent = player_1;

					money1 -= 1700;
					player_1pro += 200;

					document.querySelector('.money1').textContent = money1;
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 5) {
			if (money1 > 1200) {
				if (rahimi.manage == '0') {
					rahimi.manage = '1';
					document.querySelector('.rahimi_pro').textContent = player_1;

					money1 -= 1200;
					player_1pro += 150;

					document.querySelector('.money1').textContent = money1;
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 8) {
			if (money1 > 3000) {
				if (police.manage == '0') {
					police.manage = '1';
					document.querySelector('.police_pro').textContent = player_1;

					money1 -= 3000;
					player_1pro += 300;

					document.querySelector('.money1').textContent = money1;
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 10) {
			if (money1 > 2700) {
				if (bolnisa.manage == '0') {
					bolnisa.manage = '1';
					document.querySelector('.bolnisa_pro').textContent = player_1;

					money1 -= 2700;
					player_1pro += 250;

					document.querySelector('.money1').textContent = money1;
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 13) {
			if (money1 > 2000) {
				if (etazh_2.manage == '0') {
					etazh_2.manage = '1';
					document.querySelector('.etazh_2_pro').textContent = player_1;

					money1 -= 2000;
					player_1pro += 200;

					document.querySelector('.money1').textContent = money1;
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 16) {
			if (money1 > 2000) {
				if (mersedes.manage == '0') {
					mersedes.manage = '1';
					document.querySelector('.mersedes_pro').textContent = player_1;

					money1 -= 2000;

					document.querySelector('.money1').textContent = money1;
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 19) {
			if (money1 > 4000) {
				if (bank.manage == '0') {
					bank.manage = '1';
					document.querySelector('.bank_pro').textContent = player_1;

					money1 -= 4000;
					player_1pro += 300;

					document.querySelector('.money1').textContent = money1;
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 22) {
			if (money1 > 1800) {
				if (restoran.manage == '0') {
					restoran.manage = '1';
					document.querySelector('.restoran_pro').textContent = player_1;

					money1 -= 1800;
					player_1pro += 150;

					document.querySelector('.money1').textContent = money1;
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 23) {
			if (money1 > 2500) {
				if (xona.manage == '0') {
					xona.manage = '1';
					document.querySelector('.xona_pro').textContent = player_1;

					money1 -= 2500;
					player_1pro += 200;

					document.querySelector('.money1').textContent = money1;
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} 
	} else if (turn_2 == 'on') {
		if (locate_2 == 2) {
			if (money2 > 2500) {
				if (bozor.manage == '0') {
					bozor.manage = '2';
					document.querySelector('.bozor_pro').textContent = player_2;

					money2 -= 2500;
					player_2pro += 200;

					document.querySelector('.money2').textContent = money2;
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_2 == 3) {

		} else if (locate_2 == 5) {

		} else if (locate_2 == 8) {
			
		} else if (locate_2 == 10) {
			
		} else if (locate_2 == 13) {
			
		} else if (locate_2 == 16) {
			
		} else if (locate_2 == 19) {
			
		} else if (locate_2 == 22) {
			
		} else if (locate_2 == 23) {
			
		} 
	}

	document.querySelector('.profit_1').textContent = player_1pro;
	document.querySelector('.profit_2').textContent = player_2pro;
	document.querySelector('.profit_3').textContent = player_3pro;		
}







