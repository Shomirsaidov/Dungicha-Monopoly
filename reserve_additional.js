// bismillohirrahmanirrahim

console.log('bismillohirrahmanirrahim');
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

console.log(10 / 6);


var player_1pro = 0;
var player_2pro = 0;
var player_3pro = 0;


let locate_1 = 1;
let locate_2 = 1;
let locate_3 = 1;

let turma1 = {
	in: 'off',
	rest: 999,
}

let turma2 = {
	in: 'off',
	rest: 999,
}

let turma3 = {
	in: 'off',
	rest: 999,
}




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

function alert2_700() {
	document.querySelector('.alert_rent_txt').textContent = player_2 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 700 $ пули арендаро супоред!'
	document.querySelector('.alert_rent').style.display = 'block';
	document.getElementById('ok').style.display = 'block';
	document.getElementById('no').style.display = 'block';
}

function alert2_500() {
	document.querySelector('.alert_rent_txt').textContent = player_2 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 500 $ пули арендаро супоред!'
	document.querySelector('.alert_rent').style.display = 'block';
	document.getElementById('ok').style.display = 'block';
	document.getElementById('no').style.display = 'block';
}

function alert2_600() {
	document.querySelector('.alert_rent_txt').textContent = player_2 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 600 $ пули арендаро супоред!'
	document.querySelector('.alert_rent').style.display = 'block';
	document.getElementById('ok').style.display = 'block';
	document.getElementById('no').style.display = 'block';
}

function alert2_800() {
	document.querySelector('.alert_rent_txt').textContent = player_2 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 800 $ пули арендаро супоред!'
	document.querySelector('.alert_rent').style.display = 'block';
	document.getElementById('ok').style.display = 'block';
	document.getElementById('no').style.display = 'block';
}



function alert3_700() {
	document.querySelector('.alert_rent_txt').textContent = player_3 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 700 $ пули арендаро супоред!'
	document.querySelector('.alert_rent').style.display = 'block';
	document.getElementById('ok').style.display = 'block';
	document.getElementById('no').style.display = 'block';
}

function alert3_500() {
	document.querySelector('.alert_rent_txt').textContent = player_3 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 500 $ пули арендаро супоред!'
	document.querySelector('.alert_rent').style.display = 'block';
	document.getElementById('ok').style.display = 'block';
	document.getElementById('no').style.display = 'block';
}

function alert3_600() {
	document.querySelector('.alert_rent_txt').textContent = player_3 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 600 $ пули арендаро супоред!'
	document.querySelector('.alert_rent').style.display = 'block';
	document.getElementById('ok').style.display = 'block';
	document.getElementById('no').style.display = 'block';
}

function alert3_800() {
	document.querySelector('.alert_rent_txt').textContent = player_3 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 800 $ пули арендаро супоред!'
	document.querySelector('.alert_rent').style.display = 'block';
	document.getElementById('ok').style.display = 'block';
	document.getElementById('no').style.display = 'block';
}

function rentCheck1() {
	if (money1 < 1) {
		

		
		if (locate_1 == 2) {
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
		} else if (locate_1 == 5) {
			document.querySelector('.rahimi').style.border = "6px black solid";
			if (locate_2 == 5) {
				document.querySelector('.rahimi').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 5) {
				document.querySelector('.rahimi').style.border = "8px blue solid";
			} else {
				document.querySelector('.rahimi').style.border = "6 black solid";
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

		locate_1 = 7;
		turma1.in = 'on';
		turma1.rest = 10;

		document.getElementById('turma_time1').textContent = turma1.rest / 2 + 'x турма';

		let rentCheck1 = 1; 
		return rentCheck1;
	}
}

function rentCheck2() {
	if (money2 < 1) {


				
		if (locate_2 == 2) {
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
		} else if (locate_2 == 5) {
			document.querySelector('.rahimi').style.border = "6px black solid";
			if (locate_1 == 5) {
				document.querySelector('.rahimi').style.border = "8px red solid";
			} else if (locate_3 == 5) {
				document.querySelector('.rahimi').style.border = "8px blue solid";
			}
		} else if (locate_2 == 13) {
			document.querySelector('.etazh_2').style.border = "6px black solid";
			if (locate_1 == 13) {
				document.querySelector('.etazh_2').style.border = "8px red solid";
			} else if (locate_3 == 13) {
				document.querySelector('.etazh_2').style.border = "8px blue solid";
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


		locate_2 = 7;
		turma2.in = 'on';
		turma2.rest = 10;

		document.getElementById('turma_time2').textContent = turma2.rest / 2 + 'x турма';


		let not_enough2 = 1;
		return not_enough2;
	}
}

function rentCheck3() {
	if (money3 < 1) {


				
		if (locate_3 == 2) {
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
		} else if (locate_3 == 5) {
			document.querySelector('.rahimi').style.border = "6px black solid";
			if (locate_1 == 5) {
				document.querySelector('.rahimi').style.border = "8px red solid";
			} else if (locate_2 == 5) {
				document.querySelector('.rahimi').style.border = "8px #2bf52b solid";
			}
		} else if (locate_3 == 13) {
			document.querySelector('.etazh_2').style.border = "6px black solid";
			if (locate_1 == 13) {
				document.querySelector('.etazh_2').style.border = "8px red solid";
			} else if (locate_2 == 13) {
				document.querySelector('.etazh_2').style.border = "8px #2bf52b solid";
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



		locate_3 = 7;
		turma3.in = 'on';
		turma3.rest = 10;

		document.getElementById('turma_time3').textContent = turma3.rest / 2 + 'x турма';

		let not_enough3 = 1;

		return not_enough3
	}
}

function check1() {
	if (money1 < 1) {
		let tc = true;
		return tc;
	}
}

function check2() {
	if (money2 < 1) {
		let tc = true;
		return tc;
	}
}

function check3() {
	if (money3 < 1) {
		let tc = true;
		return tc;
	}
}



function checkUp1() {
	if (money1 < 1) {
		alert(player1 + 'пулатон адо шуд. Акнун бояд интихоб кунед: ё  бози мебароед ё  банк карз мегиред?');
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

let karz_t1 = 3;
let karz_t2 = 3;
let karz_t3 = 3;

let karz_obor = {
	rest1: 0,
	rest2: 0,
	rest3: 0,
}

let in_karz = {
	f: 'off',
	s: 'off',
	t: 'off',
}    

example(n1, l1);

let turn_1 = 'nach';
let turn_2 = 'nach';
let turn_3 = 'nach';

let reserve1 ;
let reserve2 ;
let reserve3 ;

var money1 = 1500;
var money2 = 1500;
var money3 = 1500;

var hp1 = 100;
var hp2 = 100;
var hp3 = 100; 

var player_1;
var player_2;
var player_3;

let turma_turn1 = 'nach';
let turma_turn2 = 'off';
let turma_turn3 = 'off';

let in_game = {
	first: 'on',
	second: 'on',
	third: 'on',
}

var same1_2 = 'off';
var same1_3 ='off';
var same2_3 = 'off';

function myAlert() {
	alert('Мутаасифона инчоро алакай дигар кас харидааст!');	
}

function purchase2( price, profit, property) {
	if (money2 > price) {
		if (10 == 10) {
			
			document.querySelector(property).textContent = player_2;

			money2 -= price;
			player_2pro += profit;

			document.querySelector('.money2').textContent = money2;
		} else if (manage == '1' || manage == '2' || manage == '3') {
			myAlert();
		}
	} else {
		alert('Bubakhshed pulaton baroi xaridani in jo namerasad!');
	}
}

function hp_check1() {
	if (hp1 < 0 || hp1 == 0) {
		document.querySelector('.hp_end_txt').textContent = player_1 + ' чони шумо aдо шуд бояд фавран лечение кунед (нархаш: 800), набошад аз бози бароед!';
		document.querySelector('.hp_end').style.display = 'block';
		document.querySelector('.hp1').textContent = 'Мурд';
		document.getElementById('percent1').style.display = 'none';
		document.getElementById('percent1').style.display = 'none';
	}
}

function hp_check2() {
	if (hp2 < 0 || hp2 == 0) {
		document.querySelector('.hp_end_txt').textContent = player_2 + ' чони шумо aдо шуд бояд фавран лечение кунед (нархаш: 800), набошад аз бози бароед!';
		document.querySelector('.hp_end').style.display = 'block';
		document.querySelector('.hp2').textContent = 'Мурд';
		document.getElementById('percent3').style.display = 'none';
	}
}

function hp_check3() {
	if (hp3 < 0 || hp3 == 0) {
		document.querySelector('.hp_end_txt').textContent = player_3 + ' чони шумо aдо шуд бояд фавран лечение кунед (нархаш: 800), набошад аз бози бароед!';
		document.querySelector('.hp_end').style.display = 'block';
		document.querySelector('.hp3').textContent = 'Мурд';
		document.getElementById('percent2').style.display = 'none';
	}
}

function setScrollIntoViewOptions(top) {
	let lessonSelected = document.querySelector('.mersedes');

	lessonSelected.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	})

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

	document.getElementById('turn').textContent = 'Ходи: ' + player_1;


}



xod_kun.onclick = function() {

	if (in_karz.f == 'off') {
		document.querySelector('.karz_obor1').style.display = 'none';
	}

	if (in_karz.s == 'off') {
		document.querySelector('.karz_obor2').style.display = 'none';
	}

	if (in_karz.t == 'off') {
		document.querySelector('.karz_obor3').style.display = 'none';
	}



	if (turma1.in == 'on' && in_game.first == 'on' && turma2.in == 'on' && in_game.second == 'on' && in_game.third == 'off' ) {
		if (turma1.rest > turma2.rest) {
			turma1.in = 'off';
			turma1.rest = 999;
		} else if (turma2.rest > turma1.rest) {
			turma2.in = 'off';
			turma2.rest = 999;
		}
	} else if (turma1.in == 'on' && in_game.first == 'on' && turma3.in == 'on' && in_game.third == 'on' && in_game.second == 'off') {
		if (turma1.rest > turma3.rest) {
			turma1.in = 'off';
			turma1.rest = 999;
		} else if (turma3.rest > turma1.rest) {
			turma3.in = 'off';
			turma3.rest = 999;
		}
	} else if (turma2.in == 'on' && in_game.second == 'on' && turma3.in == 'on' && in_game.third == 'on' && in_game.first == 'off') {
		if (turma3.rest > turma2.rest) {
			turma3.in = 'off';
			turma3.rest = 999;
		} else if (turma2.rest > turma3.rest) {
			turma2.in = 'off';
			turma2.rest = 999;
		}
	}


	if (in_game.first == 'on') {
		document.getElementById('percent1').style.display = 'block';
	}

	if (in_game.second == 'on') {
		document.getElementById('percent3').style.display = 'block';
	}

	if (in_game.third == 'on') {
		document.getElementById('percent2').style.display = 'block';
	}




	if (turma1.in == 'off') {
		document.getElementById('turma_time1').style.display = 'none';
	}

	if (turma2.in == 'off') {
		document.getElementById('turma_time2').style.display = 'none';
	}

	if (turma3.in == 'off') {
		document.getElementById('turma_time3').style.display = 'none';
	}

	if (document.getElementById('moshin').style.display == 'block') {
		document.getElementById('moshin').style.display == 'none';
	}



	let rand  = Math.floor(Math.random() * (7 - 1) + 1);

	if (turma_turn1 == 'nach') {
		turma_turn1 = 'on';
	} else if (turma_turn1 == 'on') {
		turma_turn2 = 'on';
		turma_turn1 = 'off';
		
	} else if (turma_turn2 == 'on') {
		turma_turn2 = 'off';
		turma_turn3 = 'on';
		
	} else if (turma_turn3 == 'on') {
		turma_turn3 = 'off';
		turma_turn1 = 'on';
		
	}



	if (turma1.in == 'on') {
		if (turma_turn1 == 'on') {
			turma1.rest -= 1;
			if (in_karz.f == 'on') {
				karz_obor.rest1 -= 1;
				document.querySelector('.karz_obor1').textContent = karz_obor.rest1 + 'x то карз';


				if (karz_obor.rest1 == 0) {
					document.querySelector('.karza_te').style.display = 'block';
					document.querySelector('.karza_te_txt').textContent = player_1 + ' , вакти додани карз омад , пули карзро пардохт кунед набошад аз бози бароед!';
					document.querySelector('.karz_obor1').textContent = 'Вакт омад';
				}

			} 


			if (turma1.rest == 0) {
				turma1.in = 'off';
				
			}
		}
	}

	if (turma2.in == 'on') {
		if (turma_turn2 == 'on') {
			turma2.rest -= 1;
			if (turma2.rest == 0) {
				turma2.in = 'off';
				
			}
		}
	}

	if (turma3.in == 'on') {
		if (turma_turn3 == 'on') {
			turma3.rest -= 1;
			if (turma3.rest == 0) {
				turma3.in = 'off';
				
			}
		}
	}

	if (turma1.rest !== -1) { 
		document.getElementById('turma_time1').textContent = turma1.rest + 'x турма';
		if (turma1.rest == 1) {
			document.getElementById('turma_time1').textContent = 'Озод';
		} else if (turma1.rest == 0) {
			document.getElementById('turma_time1').textContent = 'Озод';
		}
		if (turma1.rest == 999) {
			document.getElementById('turma_time1').style.display = 'none';
		}
	} else if (turma1.rest == -1)  {
		document.getElementById('turma_time1').style.display = 'none';
		alert(player_1 + ' табрик шумо аз турма начот ёфтед!');
	}



	if (turma2.rest !== -1) {
		document.getElementById('turma_time2').textContent = turma2.rest + 'x турма';
		if (turma2.rest == 1) {
			document.getElementById('turma_time2').textContent = 'Озод';
		} else if (turma2.rest == 0) {
			document.getElementById('turma_time2').textContent = 'Озод';
		}
		if (turma2.rest == 999) {
			document.getElementById('turma_time2').style.display = 'none';
		}
	} else if (turma2.rest == -1) {
		document.getElementById('turma_time2').style.display = 'none';
		alert(player_2 + ' табрик шумо аз турма начот ёфтед!');
	}


	
	if (turma3.rest !== -1) {	
		document.getElementById('turma_time3').textContent = turma3.rest + 'x турма';
		if (turma3.rest == 1) {
			document.getElementById('turma_time3').textContent = 'Озод';
		} else if (turma3.rest == 0) {
			document.getElementById('turma_time3').textContent = 'Озод';
		}
		if (turma3.rest == 999) {
			document.getElementById('turma_time3').style.display = 'none';
		}
	} else if (turma3.rest == -1) {
		document.getElementById('turma_time3').style.display = 'none';
		alert(player_3 + ' табрик шумо аз турма начот ёфтед!');
	}

	if (turma1.rest == -1) {
		turma1.rest = 999;
	}

	if (turma2.rest == -1) {
		turma2.rest = 999;
	}

	if (turma3.rest == -1) {
		turma3.rest = 999;
	}



	if (turma1.rest !== 5) {
		document.getElementById('amn').style.display = 'none';
	}	

	if (turma2.rest !== 5) {
		document.getElementById('amn').style.display = 'none';
	}	

	if (turma3.rest !== 5) {
		document.getElementById('amn').style.display = 'none';
	}	



	if (turn_1 == 'nach') {
		turn_1 = 'on';
		turn_2 = 'off';
		turn_3 = 'off';
	} else if (turn_1 == 'on' && turma2.in == 'off') {
		turn_2 = 'on';
		turn_1 = 'off';
	} else if (turn_1 == 'on' && turma2.in == 'on' && turma3.in == 'off') {
		turn_3 = 'on';
		turn_1 = 'off';
	} else if (turn_1 == 'on' && turma2.in == 'on' && turma3.in == 'on' && turma1.in == 'off') {
		turn_1 = 'on';
		//perelom
	} else if (turn_3 == 'on' && turma1.in == 'on' && turma2.in == 'on' && turma3.in == 'on') {
		if (in_game.first == 'on') {
			turn_3 = 'off';
			turn_1 = 'on';
			turma1.in = 'off';
			turma1.rest = 999;
			document.querySelector('#turma_time1').textContent = 'Озод';
		} else if (in_game.second == 'on') {
			turn_3 = 'off';
			turn_2 = 'on';
			turma2.in = 'off';
			turma2.rest = 999;
			document.querySelector('#turma_time2').textContent = 'Озод';
		} 
	} else if (turn_2 == 'on' && turma3.in == 'off') {
		turn_3 = 'on';
		turn_2 = 'off';
	} else if (turn_2 == 'on' && turma3.in == 'on' && turma1.in == 'off') {
		turn_2 = 'off';
		turn_1 = 'on';
	} else if (turn_2 == 'on' && turma3.in == 'on' && turma1.in == 'on' && turma2.in == 'off') {
		turn_2 = 'on';
		//perelom
	} else if (turn_3 == 'on' && turma1.in == 'on' && turma2.in == 'on' && turma3.in == 'on') {
		if (in_game.first == 'on') {
			turn_3 = 'off';
			turn_1 = 'on';
			turma1.in = 'off';
			turma1.rest = 999;
			document.querySelector('#turma_time1').textContent = 'Озод';
		} else if (in_game.second == 'on') {
			turn_3 = 'off';
			turn_2 = 'on';
			turma2.in = 'off';
			turma2.rest = 999;
			document.querySelector('#turma_time2').textContent = 'Озод';
		} 
	} else if (turn_3 == 'on' && turma1.in == 'off') {
		turn_3 = 'off';
		turn_1 = 'on';
	} else if (turn_3 == 'on' && turma1.in == 'on' && turma2.in == 'off') {
		turn_3 == 'off';
		turn_2 = 'on';
	} else if (turn_3 == 'on' && turma1.in == 'on' && turma2.in == 'on' && turma3.in == 'off') {
		turn_3 = 'on';
	} else if (turn_3 == 'on' && turma1.in == 'on' && turma2.in == 'on' && turma3.in == 'on') {
		if (in_game.first == 'on') {
			turn_3 = 'off';
			turn_1 = 'on';
			turma1.in = 'off';
			turma1.rest = 999;
			document.querySelector('#turma_time1').textContent = 'Озод';
		} else if (in_game.second == 'on') {
			turn_3 = 'off';
			turn_2 = 'on';
			turma2.in = 'off';
			turma2.rest = 999;
			document.querySelector('#turma_time2').textContent = 'Озод';
		} 
	}



	if (turn_1 == 'on') {
		if (turma2.in == 'off') {
			document.getElementById('turn').textContent = 'Ходи: ' + player_2;
		} else if (turma_turn1 == 'on' && turma2.rest == 1) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_2;
		} else if (turma2.in == 'on' && turma2.rest !== 1 && turma3.in == 'off') {
			document.getElementById('turn').textContent = 'Ходи: ' + player_3;
		} else if (turma2.in == 'on'  && turma_turn1 == 'on' && turma2.rest == 1) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_2;
		} else if (turma2.in == 'on' && turma2.rest !== 1 && turma3.in == 'on' && turma_turn2 == 'on' && turma3.rest == 1) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_3;
		} else if (turma2.in == 'on' && turma2.rest !== 1 && turma3.in == 'on' && turma3.rest !== 0) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_1;
		} else if(turma2.in == 'on' && turma2.rest == 1 && turma_turn1 !== 'on' && turma3.in == 'off') {
			document.getElementById('turn').textContent = 'Ходи: ' + player_3;
		}
	} else if (turn_2 == 'on') {
		if (turma3.in == 'off') {
			document.getElementById('turn').textContent = 'Ходи: ' + player_3;
		} else if (turma_turn2 == 'on' && turma3.rest == 1) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_3;
		} else if (turma3.in == 'on' && turma3.rest !== 1 && turma1.in == 'off') {
			document.getElementById('turn').textContent = 'Ходи: ' + player_1;
		} else if (turma3.in == 'on' && turma_turn2 == 'on' && turma3.rest == 1) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_3;
		} else if (turma3.in == 'on' && turma3.rest !== 1 && turma1.in == 'on' && turma_turn3 == 'on' && turma1.rest == 1) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_1;
		} else if (turma3.in == 'on' && turma3.rest !== 1 && turma1.in == 'on' && turma1.rest !== 0) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_2;
		} else if (turma3.in == 'on' && turma3.rest == 1 && turma_turn2 !== 'on' && turma1.in == 'off') {
			document.getElementById('turn').textContent = 'Ходи: ' + player_1;
		}
	} else if (turn_3 == 'on') {
		if (turma1.in == 'off' ) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_1;
		} else if (turma_turn3 == 'on' && turma1.rest == 1) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_1;
		} else if (turma1.in == 'on' && turma1.rest !== 1 && turma2.in == 'off') {
			document.getElementById('turn').textContent = 'Ходи: ' + player_2;
		} else if (turma1.in == 'on' && turma_turn3 == 'on' && turma1.rest == 1) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_1;
		} else if (turma1.in == 'on' && turma1.rest !== 1 && turma2.in == 'on' && turma_turn1 == 'on' && turma2.rest == 1) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_2;
		} else if (turma1.in == 'on' && turma1.rest !== 1 && turma2.in == 'on' && turma2.rest !== 0) {
			document.getElementById('turn').textContent = 'Ходи: ' + player_3;
		} else if (turma1.in == 'on' && turma1.rest == 1 && turma_turn3 !== 'on' && turma2.in == 'off') {
			document.getElementById('turn').textContent = 'Ходи: ' + player_2;	
		}
	}



	


	
	if (turma1.in == 'off') {
		document.getElementById('demo').textContent = rand;
		document.getElementById('demo').style.display = 'block';
	}

	if (turma2.in == 'off') {
		document.getElementById('demo').textContent = rand;
		document.getElementById('demo').style.display = 'block';
	}

	if (turma3.in == 'off') {
		document.getElementById('demo').textContent = rand;
		document.getElementById('demo').style.display = 'block';
	}



	
	document.querySelector('.profit_1').textContent = player_1pro;
	document.querySelector('.profit_2').textContent = player_2pro;
	document.querySelector('.profit_3').textContent = player_3pro;

	document.querySelector('#moshin').style.display = 'none';




	// first turn___________________________________________________________________________________________________________________




	if (turn_1 == 'on') {

		if (in_karz.f == 'on') {
			karz_obor.rest1 -= 1;
			document.querySelector('.karz_obor1').textContent = karz_obor.rest1 + 'x то карз';


			if (karz_obor.rest1 == 0) {
				document.querySelector('.karza_te').style.display = 'block';
				document.querySelector('.karza_te_txt').textContent = player_1 + ' , вакти додани карз омад , пули карзро пардохт кунед набошад аз бози бароед!';
				document.querySelector('.karz_obor1').textContent = 'Вакт омад';
				document.querySelector('#karz_select').style.display = 'none';
				document.querySelector('#yes_select').style.display = 'none';
				document.querySelector('#yes_te').style.display = 'block';
				document.querySelector('#no_te').style.display = 'block';
			}

		} 


		if (turma1.in == 'off') {
			money1 += player_1pro;
			document.querySelector('.money1').textContent = money1;

			document.querySelector('.profit_1').textContent = player_1pro;



			// previous locs corrections;

			if (locate_1 == 1) {
				document.querySelector('.bapesh').style.border = "6px black solid";
				if (locate_2 == 1 && in_game.second == 'on') {
					document.querySelector('.bapesh').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 1 && in_game.third == 'on') {
					document.querySelector('.bapesh').style.border = "8px blue solid";
				} else {
					document.querySelector('.bapesh').style.border = "6 black solid";
				}
			} else if (locate_1 == 2) {
				document.querySelector('.bozor').style.border = "6px black solid";
				if (locate_2 == 2 && in_game.second == 'on') {
					document.querySelector('.bozor').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 2 && in_game.third == 'on') {
					document.querySelector('.bozor').style.border = "8px blue solid";
				} else {
					document.querySelector('.bozor').style.border = "6 black solid";
				}
			} else if (locate_1 == 3) {
				document.querySelector('.etazh').style.border = "6px black solid";
				if (locate_2 == 3 && in_game.second == 'on') {
					document.querySelector('.etazh').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 3 && in_game.third == 'on') {
					document.querySelector('.etazh').style.border = "8px blue solid";
				} else {
					document.querySelector('.etazh').style.border = "6 black solid";
				}
			} else if (locate_1 == 4) {
				document.querySelector('.shtraf').style.border = "6px black solid";
				if (locate_2 == 4 && in_game.second == 'on') {
					document.querySelector('.shtraf').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 4 && in_game.third == 'on') {
					document.querySelector('.shtraf').style.border = "8px blue solid";
				} else {
					document.querySelector('.shtraf').style.border = "6 black solid";
				}
			} else if (locate_1 == 5) {
				document.querySelector('.rahimi').style.border = "6px black solid";
				if (locate_2 == 5 && in_game.second == 'on') {
					document.querySelector('.rahimi').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 5 && in_game.third == 'on') {
					document.querySelector('.rahimi').style.border = "8px blue solid";
				} else {
					document.querySelector('.rahimi').style.border = "6 black solid";
				}
			} else if (locate_1 == 6) {
				document.querySelector('.tuhfa').style.border = "6px black solid";
				if (locate_2 == 6 && in_game.second == 'on') {
					document.querySelector('.tuhfa').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 6 && in_game.third == 'on') {
					document.querySelector('.tuhfa').style.border = "8px blue solid";
				} else {
					document.querySelector('.tuhfa').style.border = "6 black solid";
				}
			} else if (locate_1 == 7) {


				if (turma1.in == 'off') {
					document.querySelector('.turma').style.border = '6px black solid'
				}

				if (locate_2 == 7 && in_game.second == 'on') {
					document.querySelector('.turma').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 7 && in_game.third == 'on') {
					document.querySelector('.turma').style.border = "8px blue solid";
				} 
			} else if (locate_1 == 8) {
				document.querySelector('.police').style.border = "6px black solid";
				if (locate_2 == 8 && in_game.second == 'on') {
					document.querySelector('.police').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 8 && in_game.third == 'on') {
					document.querySelector('.police').style.border = "8px blue solid";
				} else {
					document.querySelector('.police').style.border = "6 black solid";
				}
			} else if (locate_1 == 9) {
				document.querySelector('.nimi_pul').style.border = "6px black solid";
				if (locate_2 == 9 && in_game.second == 'on') {
					document.querySelector('.nimi_pul').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 9 && in_game.third == 'on') {
					document.querySelector('.nimi_pul').style.border = "8px blue solid";
				} else {
					document.querySelector('.nimi_pul').style.border = "6 black solid";
				}
			} else if (locate_1 == 10) {
				document.querySelector('.bolnisa').style.border = "6px black solid";
				if (locate_2 == 10 && in_game.second == 'on') {
					document.querySelector('.bolnisa').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 10 && in_game.third == 'on') {
					document.querySelector('.bolnisa').style.border = "8px blue solid";
				} else {
					document.querySelector('.bolnisa').style.border = "6 black solid";
				}
			} else if (locate_1 == 11) {
				document.querySelector('.bankrot').style.border = "6px black solid";
				if (locate_2 == 11 && in_game.second == 'on') {
					document.querySelector('.bankrot').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 11 && in_game.third == 'on') {
					document.querySelector('.bankrot').style.border = "8px blue solid";
				} else {
					document.querySelector('.bankrot').style.border = "6 black solid";
				}
			} else if (locate_1 == 12) {
				document.querySelector('.bomba').style.border = "6px black solid";
				if (locate_2 == 12 && in_game.second == 'on') {
					document.querySelector('.bomba').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 12 && in_game.third == 'on') {
					document.querySelector('.bomba').style.border = "8px blue solid";
				} else {
					document.querySelector('.bomba').style.border = "6 black solid";
				}
			} else if (locate_1 == 13) {
				document.querySelector('.etazh_2').style.border = "6px black solid";
				if (locate_2 == 13 && in_game.second == 'on') {
					document.querySelector('.etazh_2').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 13 && in_game.third == 'on') {
					document.querySelector('.etazh_2').style.border = "8px blue solid";
				} else {
					document.querySelector('.etazh_2').style.border = "6 black solid";
				}
			} else if (locate_1 == 14) {
				document.querySelector('.avtomat').style.border = "6px black solid";
				if (locate_2 == 14 && in_game.second == 'on') {
					document.querySelector('.avtomat').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 14 && in_game.third == 'on') {
					document.querySelector('.avtomat').style.border = "8px blue solid";
				} else {
					document.querySelector('.avtomat').style.border = "6 black solid";
				}
			} else if (locate_1 == 15) {
				document.querySelector('.bomba_2').style.border = "6px black solid";
				if (locate_2 == 15 && in_game.second == 'on') {
					document.querySelector('.bomba_2').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 15 && in_game.third == 'on') {
					document.querySelector('.bomba_2').style.border = "8px blue solid";
				} else {
					document.querySelector('.bomba_2').style.border = "6 black solid";
				}
			} else if (locate_1 == 16) {
				document.querySelector('.mersedes').style.border = "6px black solid";
				if (locate_2 == 16 && in_game.second == 'on') {
					document.querySelector('.mersedes').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 16 && in_game.third == 'on') {
					document.querySelector('.mersedes').style.border = "8px blue solid";
				} else {
					document.querySelector('.mersedes').style.border = "6 black solid";
				}
			} else if (locate_1 == 17) {
				document.querySelector('.lotoreya').style.border = "6px black solid";
				if (locate_2 == 17 && in_game.second == 'on') {
					document.querySelector('.lotoreya').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 17 && in_game.third == 'on') {
					document.querySelector('.lotoreya').style.border = "8px blue solid";
				} else {
					document.querySelector('.lotoreya').style.border = "6 black solid";
				}
			} else if (locate_1 == 18) {
				document.querySelector('.najot').style.border = "6px black solid";
				if (locate_2 == 18 && in_game.second == 'on') {
					document.querySelector('.najot').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 18 && in_game.third == 'on') {
					document.querySelector('.najot').style.border = "8px blue solid";
				} else {
					document.querySelector('.najot').style.border = "6 black solid";
				}
			} else if (locate_1 == 19) {
				document.querySelector('.bank').style.border = "6px black solid";
				if (locate_2 == 19 && in_game.second == 'on') {
					document.querySelector('.bank').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 19 && in_game.third == 'on') {
					document.querySelector('.bank').style.border = "8px blue solid";
				} else {
					document.querySelector('.bank').style.border = "6 black solid";
				}
			} else if (locate_1 == 20) {
				document.querySelector('.two_x').style.border = "6px black solid";
				if (locate_2 == 20 && in_game.second == 'on') {
					document.querySelector('.two_x').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 20 && in_game.third == 'on') {
					document.querySelector('.two_x').style.border = "8px blue solid";
				} else {
					document.querySelector('.two_x').style.border = "6 black solid";
				}
			} else if (locate_1 == 21) {
				document.querySelector('.bashkun').style.border = "6px black solid";
				if (locate_2 == 21 && in_game.second == 'on') {
					document.querySelector('.bashkun').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 21 && in_game.third == 'on') {
					document.querySelector('.bashkun').style.border = "8px blue solid";
				} else {
					document.querySelector('.bashkun').style.border = "6 black solid";
				}
			} else if (locate_1 == 22) {
				document.querySelector('.restoran').style.border = "6px black solid";
				if (locate_2 == 22 && in_game.second == 'on') {
					document.querySelector('.restoran').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 22 && in_game.third == 'on') {
					document.querySelector('.restoran').style.border = "8px blue solid";
				} else {
					document.querySelector('.restoran').style.border = "6 black solid";
				}
			} else if (locate_1 == 23) {
				document.querySelector('.xona').style.border = "6px black solid";
				if (locate_2 == 23 && in_game.second == 'on') {
					document.querySelector('.xona').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 23 && in_game.third == 'on') {
					document.querySelector('.xona').style.border = "8px blue solid";
				} else {
					document.querySelector('.xona').style.border = "6 black solid";
				}
			}

			// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

			if (turma1.in == 'off') {
				locate_1 += rand;
			}	
			
			if (turma1.in == 'off') {
				document.getElementById('demo').style.color = "red";
				document.getElementById('xod_kun').style.color = "red";
			}


			if (locate_1 > 23) {
				money1 += 1500;
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
				if (bozor.manage == '2') {
					money1 -= 700;
					if (check1()) {
						rentCheck1();
						money1 += 700;
						document.querySelector('.turma_rent_txt').textContent = player_1 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
						document.querySelector('.turma_rent').style.display = 'block';
					} else {

						money1 += 700;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 700 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money2').textContent = money2;
					} 
				} else if (bozor.manage == '3') {
					money1 -= 700;
					if (check1()) {
						rentCheck1();
						money1 += 700;
					} else {

						money1 += 700;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 700 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money3').textContent = money3;
						
					} 
				}

				if (locate_2 == 2 ) {
					document.querySelector('.bozor').style.borderTop = "8px #2bf52b solid";
				} else if (locate_3 == 2) {
					document.querySelector('.bozor').style.borderTop = "8px blue solid "
				}

			} else if (locate_1 == 3) {
				document.querySelector('.etazh').style.border = "8px red solid";
				if (etazh.manage == '2') {
					money1 -= 600;
					if (check1()) { 
						rentCheck1();
						money1 += 600;
					} else {

						money1 += 600;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 600 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money2').textContent = money2;
					}
						 
				} else if (etazh.manage == '3') {
					money1 -= 600;
					if (check1()) {
						rentCheck1();
						money1 += 600;
					} else {

						money1 += 600;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 600 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';					
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money3').textContent = money3;
					}
						
				}

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
				if (rahimi.manage == '2') {
					money1 -= 500;
					if (check1()) {
						rentCheck1();
						money1 += 500;
					} else {

						money1 += 500; 
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 500 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money2').textContent = money2;
					}
						 
				} else if (rahimi.manage == '3') {
					money1 -= 500;
					if (check1()) {
						rentCheck1();
						money1 += 500;
					} else {

						money1 += 500;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 500 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money3').textContent = money3;
					}
					
				}

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
				
				if (turma2.in == 'on'  && turma3.in == 'on') {
					document.querySelector('.turma_amn').style.display = 'block';
					document.querySelector('.turma_amn_txt').textContent = 'Бехтарин! Аз пушти он ки турма пур будааст шумо халос шудед!';
				} else {
					turma1.in = 'on';
					turma1.rest = 5;					
				}
				
				
				
				if (turma1.in == 'on') {
					document.getElementById('turma_time1').style.display = 'block';
					document.getElementById('turma_time1').textContent = turma1.rest + 'x турма';
				}

				if (turma1.rest == 5) {
					document.getElementById('amn').style.display = 'block';
				} else {
					document.getElementById('amn').style.display = 'none';
				}


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
				if (etazh_2.manage == '2') {
					money1 -= 700;
					if (check1()) {
						rentCheck1();
						money1 += 700;
					} else {

						money1 += 700;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 700 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money2').textContent = money2;
					}
					 
				} else if (etazh_2.manage == '3') {
					money1 -= 700;
					if (check1()) {
						rentCheck1();
						money1 += 700;
					} else {

						money1 += 700;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 700 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';					
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money3').textContent = money3;
					}
					
				}

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

				hp1 -= 70;

				if (hp1 < 0 || hp1 == 0) {
					console.log(' ');
				} else {
					document.querySelector('.turma_amn').style.display = 'block';
					document.querySelector('.turma_amn_txt').textContent = player_1 + ' шуморо бо автомат андохта 70 чонатонро гирифтанд , нагзаш бояд лечение кунед!';
				}
				
				document.querySelector('.hp1').textContent = hp1;

				hp_check1();

			} else if (locate_1 == 15) {
				document.querySelector('.bomba_2').style.border = "8px red solid";
				if (locate_2 == 15 ) {
					document.querySelector('.bomba_2').style.borderTop = "8px #2bf52b solid";
				} else if (locate_3 == 15) {
					document.querySelector('.bomba_2').style.borderTop = "8px blue solid "
				}

				

			} else if (locate_1 == 16) {
				document.querySelector('.mersedes').style.border = "8px red solid";

				if (mersedes.manage == '1') {
				document.getElementById('moshin').textContent = 'Бепул рафтан';
				}
				document.getElementById('moshin').style.display = 'block';
				if (mersedes.manage == '2' || mersedes.manage == '3') {
					document.getElementById('moshin').style.display = 'none';
				}


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

				hp1 -= 60;


				if (hp1 < 0 || hp1 == 0) {
					console.log(' ');
				} else {
					document.querySelector('.turma_amn').style.display = 'block';
					document.querySelector('.turma_amn_txt').textContent = player_1 + ' башкун шуморо зада 60 чонатонро гирифтанд , нагзаш бояд лечение кунед!';
				}

				document.querySelector('.hp1').textContent = hp1;

				hp_check1();

			} else if (locate_1 == 22) {
				document.querySelector('.restoran').style.border = "8px red solid";
				if (restoran.manage == '2') {
					money1 -= 800;
					if (check1()) {
						rentCheck1();
						money1 += 800;
					} else {

						money1 += 800;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 800 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';					
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money2').textContent = money2;
					}
					 
				} else if (restoran.manage == '3') {
					money1 -= 800;
					if (check1()) {
						rentCheck1();
						money1 += 800;
					} else {

						money1 += 800;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 800 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money3').textContent = money3;
					}
					
				}

				if (locate_2 == 22 ) {
					document.querySelector('.restoran').style.borderTop = "8px #2bf52b solid";
				} else if (locate_3 == 22) {
					document.querySelector('.restoran').style.borderTop = "8px blue solid "
				}
			} else if (locate_1 == 23) {
				document.querySelector('.xona').style.border = "8px red solid";
				if (xona.manage == '2') {
					money1 -= 800;
					if (check1()) {
						rentCheck1();
						money1 += 800;
					} else {

						money1 += 800;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 800 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';
						
						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money2').textContent = money2;
					}
					 
				} else if (xona.manage == '3') {
					money1 -= 800;
					if (check1()) {
						rentCheck1();
						money1 += 800;
					} else {

						money1 += 800;
						document.querySelector('.alert_rent_txt').textContent = player_1 + ' , шумо ба хонаи дигар кас омадед барои хамин шумо бояд 800 $ пули арендаро супоред!'
						document.querySelector('.alert_rent').style.display = 'block';
						document.getElementById('ok').style.display = 'block';
						document.getElementById('no').style.display = 'block';

						document.querySelector('.money1').textContent = money1;
						document.querySelector('.money3').textContent = money3;
					}
					
				}

				if (locate_2 == 23 ) {
					document.querySelector('.xona').style.borderTop = "8px #2bf52b solid";
				} else if (locate_3 == 23) {
					document.querySelector('.xona').style.borderTop = "8px blue solid "
				}

				


			}
		}
	

		

	// second turn_________________________________________________________________________________________________________________	

	} else if (turn_2 == 'on') {

		money2 += player_2pro;
		document.querySelector('.money2').textContent = money2;

		document.querySelector('.profit_2').textContent = player_2pro;

		

		// previous locks correcting

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

			if (turma2.in == 'off') {
				document.querySelector('.turma').style.border = '6px black solid'
			}

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

		//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


		locate_2 += rand;


		document.getElementById('demo').style.color = "#13cc07";
		document.getElementById('xod_kun').style.color = "#13cc07";
	

		if (locate_2 > 23) {
			money2+= 1500;
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
			if (bozor.manage == '1') {
				money2 -= 700;
				if (check2()) {
					rentCheck2();
					money2 += 700;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 700;
					alert2_700();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money2').textContent = money2;
				}
				 
			} else if (bozor.manage == '3') {
				money2 -= 700;
				if (check2()) {
					rentCheck2();
					money2 += 700;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 700;
					alert2_700();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			if (locate_1 == 2 ) {
				document.querySelector('.bozor').style.borderTop = "8px red solid";
			} else if (locate_3 == 2) {
				document.querySelector('.bozor').style.borderTop = "8px blue solid "
			}

		} else if (locate_2 == 3) {
			document.querySelector('.etazh').style.border = "8px #2bf52b solid";
			if (etazh.manage == '1') {
				money2 -= 600;
				if (check2()) {
					rentCheck2();
					money2 += 600;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 600;
					alert2_600();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money2').textContent = money2;
				}
				 
			} else if (etazh.manage == '3') {
				money2 -= 600;
				if (check2()) {
					rentCheck2();
					money2 += 600;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 600;
					alert2_600();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

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
			if (rahimi.manage == '1') {
				money2 -= 500;
				if (check2()) {
					rentCheck2();
					money2 += 500;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 500;
					alert2_500();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money2').textContent = money2;
				}
				 
			} else if (rahimi.manage == '3') {
				money2 -= 500;
				if (check2()) {
					rentCheck2();
					money2 += 500;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 500;
					alert2_500();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

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
			
			if (turma1.in == 'on' && turma3.in == 'on' ) {
				document.querySelector('.turma_amn').style.display = 'block';
				document.querySelector('.turma_amn_txt').textContent = 'Бехтарин! Аз пушти он ки турма пур будааст шумо халос шудед!';
			} else {
				turma2.in = 'on';
				turma2.rest = 5;				
			}
			
			
			if (turma2.in == 'on') {
				document.getElementById('turma_time2').style.display = 'block';
				document.getElementById('turma_time2').textContent = turma2.rest + 'x турма';
			}

			if (turma2.rest == 5) {
				document.getElementById('amn').style.display = 'block';
			} else {
				document.getElementById('amn').style.display = 'none';
			}

			


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
			if (etazh_2.manage == '1') {
				money2 -= 700;
				if (check2()) {
					rentCheck2();
					money2 += 700;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 700;
					alert2_700();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money2').textContent = money2;
				}
				 
			} else if (etazh_2.manage == '3') {
				money2 -= 700;
				if (check2()) {
					rentCheck2();
					money2 += 700;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 700;
					alert2_700();
				
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			example(n13, l13);
		} else if (locate_2 == 14) {
			document.querySelector('.avtomat').style.border = "8px #2bf52b solid";

			example(n14, l14);

			if (hp2 < 0 || hp2 == 0) {
				console.log(' ');
			} else {
				document.querySelector('.turma_amn').style.display = 'block';
				document.querySelector('.turma_amn_txt').textContent = player_2 + ' шуморо бо автомат андохта 70 чонатонро гирифтанд , нагзаш бояд лечение кунед!';
			}	
			hp2 -= 70;
			document.querySelector('.hp2').textContent = hp2;

			hp_check2();

		} else if (locate_2 == 15) {
			document.querySelector('.bomba_2').style.border = "8px #2bf52b solid";
			example(n15, l15);

			

		} else if (locate_2 == 16) {
			document.querySelector('.mersedes').style.border = "8px #2bf52b solid";
			if (mersedes.manage == '2') {
				document.getElementById('moshin').textContent = 'Бепул рафтан';
			}
			document.getElementById('moshin').style.display = 'block';
			if (mersedes.manage == '1' || mersedes.manage == '3') {
				document.getElementById('moshin').style.display = 'none';
			}


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

			if (hp2 < 0 || hp2 == 0) {
				console.log(' ');
			} else {
				document.querySelector('.turma_amn').style.display = 'block';
				document.querySelector('.turma_amn_txt').textContent = player_2 + ' башкун шуморо зада 60 чонатонро гирифтанд , нагзаш бояд лечение кунед!';
			}
			hp2 -= 60;
			document.querySelector('.hp2').textContent = hp2;

			hp_check2();

		} else if (locate_2 == 22) {
			document.querySelector('.restoran').style.border = "8px #2bf52b solid";
			if (restoran.manage == '1') {
				money2 -= 800;
				if (check2()) {
					rentCheck2();
					money2 += 800;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 800;
					alert2_800();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money2').textContent = money2;
				}
				 
			} else if (restoran.manage == '3') {
				money2 -= 800;
				if (check2()) {
					rentCheck2();
					money2 += 800;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 800;
					alert2_800();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			example(n22, l22);
		} else if (locate_2 == 23) {
			document.querySelector('.xona').style.border = "8px #2bf52b solid";
			if (xona.manage == '1') {
				money2 -= 800;
				if (check2()) {
					rentCheck2();
					money2 += 800;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 800;
					alert2_800();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money2').textContent = money2;
				}
				 
			} else if (xona.manage == '3') {
				money2 -= 800;
				if (check2()) {
					rentCheck2();
					money2 += 800;
					document.querySelector('.turma_rent_txt').textContent = player_2 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money2 += 800;
					alert2_800();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			example(n23, l23);
		}
	//  third turn_________________________________________________________________________________________________________________	

	} else if (turn_3 == 'on') {


		money3 += player_3pro;
		document.querySelector('.money3').textContent = money3;

		document.querySelector('.profit_3').textContent = player_3pro;


		// previous locks correcting

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
			if (turma3.in == 'off') {
				document.querySelector('.turma').style.border = '6px black solid'
			}

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

		//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


		locate_3 += rand;


		document.getElementById('demo').style.color = "blue";
		document.getElementById('xod_kun').style.color = "blue";

		if (locate_3 > 23) {
			money3 += 1500;
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
			if (bozor.manage == '1') {
				money3 -= 700;
				if (check3()) {
					rentCheck3();
					money3 += 700;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 700;
					alert3_700();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				 
			} else if (bozor.manage == '2') {
				money3 -= 700;
				if (check3()) {
					rentCheck3();
					money3 += 700;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 700;
					alert3_700();
					
					document.querySelector('.money2').textContent = money2;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			exa2(n2, l2);
		} else if (locate_3 == 3) {
			document.querySelector('.etazh').style.border = "8px blue solid";
			if (etazh.manage == '1') {
				money3 -= 600;
				if (check3()) {
					rentCheck3();
					money3 += 600;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 600;
					alert3_600();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				 
			} else if (etazh.manage == '2') {
				money3 -= 600;
				if (check3()) {
					rentCheck3();
					money3 += 600;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 600;
					alert3_600();
					
					document.querySelector('.money2').textContent = money2;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			exa2(n3, l3);
		} else if (locate_3 == 4) {
			document.querySelector('.shtraf').style.border = "8px blue solid";
			exa2(n1, l4);
		} else if (locate_3 == 5) {
			document.querySelector('.rahimi').style.border = "8px blue solid";
			if (rahimi.manage == '1') {
				money3 -= 500;
				if (check3()) {
					rentCheck3();
					money3 += 500;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 500;
					alert3_500();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				 
			} else if (rahimi.manage == '2') {
				money3 -= 500;
				if (check3()) {
					rentCheck3();
					money3 += 500;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 500;
					alert3_500();
					
					document.querySelector('.money2').textContent = money2;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			exa2(n5, l5);
		} else if (locate_3 == 6) {
			document.querySelector('.tuhfa').style.border = "8px blue solid";
			exa2(n6, l6);
		} else if (locate_3 == 7) {
			document.querySelector('.turma').style.border = "8px blue solid";

			if (turma1.in == 'on'  &&  turma2.in == 'on' ) {
				document.querySelector('.turma_amn').style.display = 'block';
				document.querySelector('.turma_amn_txt').textContent = 'Бехтарин! Аз пушти он ки турма пур будааст шумо халос шудед!';
			} else {
				turma3.in = 'on';
				turma3.rest = 5;				
			}
			
			
			if (turma3.in == 'on') {
				document.getElementById('turma_time3').style.display = 'block';
				document.getElementById('turma_time3').textContent = turma3.rest + 'x турма';
			}

			if (turma3.rest == 5) {
				document.getElementById('amn').style.display = 'block';
			} else {
				document.getElementById('amn').style.display = 'none';
			}

			


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
			if (etazh_2.manage == '1') {
				money3 -= 700;
				if (check3()) {
					rentCheck3();
					money3 += 700;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 700;
					alert3_700();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				 
			} else if (etazh_2.manage == '2') {
				money3 -= 700;
				if (check3()) {
					rentCheck3();
					money3 += 700;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 700;
					alert3_700();
					
					document.querySelector('.money2').textContent = money2;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			exa2(n13, l13);
		} else if (locate_3 == 14) {
			document.querySelector('.avtomat').style.border = "8px blue solid";
			exa2(n14, l14);

			if (hp3 < 0 || hp3 == 0) {
				console.log(' ');
			} else {
				document.querySelector('.turma_amn').style.display = 'block';
				document.querySelector('.turma_amn_txt').textContent = player_3 + ' шуморо бо автомат андохта 70 чонатонро гирифтанд , нагзаш бояд лечение кунед!';
			}	
			hp3 -= 70;
			document.querySelector('.hp3').textContent = hp3;

			hp_check3();

		} else if (locate_3 == 15) {
			document.querySelector('.bomba_2').style.border = "8px blue solid";
			exa2(n15, l15);

			

		} else if (locate_3 == 16) {
			document.querySelector('.mersedes').style.border = "8px blue solid";

			if (mersedes.manage == '3') {
				document.getElementById('moshin').textContent = 'Бепул рафтан';
			}
			document.getElementById('moshin').style.display = 'block';
			if (mersedes.manage == '1' || mersedes.manage == '2') {
				document.getElementById('moshin').style.display = 'none';
			}

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

			if (hp3 < 0 || hp3 == 0) {
				console.log(' ');
			} else {
				document.querySelector('.turma_amn').style.display = 'block';
				document.querySelector('.turma_amn_txt').textContent = player_3 + ' башкун шуморо зада 60 чонатонро гирифтанд , нагзаш бояд лечение кунед!';
			}
			hp3 -= 60;
			document.querySelector('.hp3').textContent = hp3;

			hp_check3();


		} else if (locate_3 == 22) {
			document.querySelector('.restoran').style.border = "8px blue solid";
			if (restoran.manage == '1') {
				money3 -= 800;
				if (check3()) {
					rentCheck3();
					money3 += 800;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 800;
					alert3_800();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				 
			} else if (restoran.manage == '2') {
				money3 -= 800;
				if (check3()) {
					rentCheck3();
					money3 += 800;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 800;
					alert3_800();
					
					document.querySelector('.money2').textContent = money2;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			exa2(n22, l22);
		} else if (locate_3 == 23) {
			document.querySelector('.xona').style.border = "8px blue solid";
			if (xona.manage == '1') {
				money3 -= 800;
				if (check3()) {
					rentCheck3();
					money3 += 800;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 800;
					alert3_800();
					
					document.querySelector('.money1').textContent = money1;
					document.querySelector('.money3').textContent = money3;
				}
				 
			} else if (xona.manage == '2') {
				money3 -= 800;
				if (check3()) {
					rentCheck3();
					money3 += 800;
					document.querySelector('.turma_rent_txt').textContent = player_3 + ' , шумо пули арендаро дода наметавонед барои хамин ба турма зада мешавед!';
					document.querySelector('.turma_rent').style.display = 'block';
				} else {

					money3 += 800;
					alert3_800();

					document.querySelector('.money2').textContent = money2;
					document.querySelector('.money3').textContent = money3;
				}
				
			}

			exa2(n23, l23);
		}
	}
}

// turns have finished!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

manage.onclick = function() {
	console.log('hello ');
	if (turn_1 == 'on') {
		if (locate_1 == 2) {
			if (money1 > 2500) {
				if (bozor.manage == '0') {
					bozor.manage = '1';
					document.querySelector('.bozor_pro').textContent = player_1;

					money1 -= 2500;
					player_1pro += 250;

					document.querySelector('.money1').textContent = money1;

					alert('BOZOR HARIDA SHUD!');
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 3) {
			if (money1 > 2200) {
				if (etazh.manage == '0') {
					etazh.manage = '1';
					document.querySelector('.etazh_pro').textContent = player_1;

					money1 -= 2200;
					player_1pro += 200;

					document.querySelector('.money1').textContent = money1;

					alert('ETAZH HARIDA SHUD!');
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

					alert('RAHIMI HARIDA SHUD!');
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 8) {
			if (money1 > 3500) {
				if (police.manage == '0') {
					police.manage = '1';
					document.querySelector('.police_pro').textContent = player_1;

					money1 -= 3500;
					player_1pro += 250;

					document.querySelector('.money1').textContent = money1;

					alert('POLICE HARIDA SHUD!');
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 10) {
			if (money1 > 3800) {
				if (bolnisa.manage == '0') {
					bolnisa.manage = '1';
					document.querySelector('.bolnisa_pro').textContent = player_1;

					money1 -= 3800;
					player_1pro += 250;

					document.querySelector('.money1').textContent = money1;

					alert('BOLNISA HARIDA SHUD!');
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 13) {
			if (money1 > 2500) {
				if (etazh_2.manage == '0') {
					etazh_2.manage = '1';
					document.querySelector('.etazh_2_pro').textContent = player_1;

					money1 -= 2500;
					player_1pro += 200;

					document.querySelector('.money1').textContent = money1;

					alert('ETAZH HARIDA SHUD!');
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

					alert('MERSEDES HARIDA SHUD!');
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

					alert('TABRIK, BANK HARIDA SHUD!');
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
					alert('RESTORAN HARIDA SHUD!');
				} else {
					alert('Mutaasifona injoro alakai digar kas xaridaast!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_1 == 23) {
			if (money1 > 2000) {
				if (xona.manage == '0') {
					xona.manage = '1';
					document.querySelector('.xona_pro').textContent = player_1;

					money1 -= 2000;
					player_1pro += 200;

					document.querySelector('.money1').textContent = money1;

					alert('XONA HARIDA SHUD!');
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} 

// second turn !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	} else if (turn_2 == 'on') {
		if (locate_2 == 2) {
			if (money2 > 2500) {
				if (bozor.manage == '0') {
					bozor.manage = '2';
					document.querySelector('.bozor_pro').textContent = player_2;

					money2 -= 2500;
					player_2pro += 250;

					document.querySelector('.money2').textContent = money2;

					alert('BOZOR HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_2 == 3) {
			if (money2 > 2200) {
				if (etazh.manage == '0') {
					etazh.manage = '2';
					document.querySelector('.etazh_pro').textContent = player_2;

					money2 -= 2200;
					player_2pro += 200;

					document.querySelector('.money2').textContent = money2;

					alert('ETAZH HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}		
		} else if (locate_2 == 5) {
			if (money2 > 1200) {
				if (rahimi.manage == '0') {
					rahimi.manage = '2';
					document.querySelector('.rahimi_pro').textContent = player_2;

					money2 -= 1200;
					player_2pro += 150;

					document.querySelector('.money2').textContent = money2;

					alert('RAHIMI HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_2 == 8) {
			if (money2 > 3500) {
				if (police.manage == '0') {
					police.manage = '2';
					document.querySelector('.police_pro').textContent = player_2;

					money2 -= 3500;
					player_2pro += 250;

					document.querySelector('.money2').textContent = money2;

					alert('POLICE HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}	
		} else if (locate_2 == 10) {
			if (money2 > 3800) {
				if (bolnisa.manage == '0') {
					bolnisa.manage = '2';
					document.querySelector('.bolnisa_pro').textContent = player_2;

					money2 -= 3800;
					player_2pro += 250;

					document.querySelector('.money2').textContent = money2;

					alert('BOLNISA HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_2 == 13) {
			if (money2 > 2500) {
				if (etazh_2.manage == '0') {
					etazh_2.manage = '2';
					document.querySelector('.etazh_2_pro').textContent = player_2;

					money2 -= 2500;
					player_2pro += 200;

					document.querySelector('.money2').textContent = money2;

					alert('ETAZH HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_2 == 16) {
			if (money2 > 2000) {
				if (mersedes.manage == '0') {
					mersedes.manage = '2';
					document.querySelector('.mersedes_pro').textContent = player_2;

					money2 -= 2000;
					player_2pro += 0;

					document.querySelector('.money2').textContent = money2;

					alert('MERSEDES HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_2 == 19) {
			if (money2 > 4000) {
				if (bank.manage == '0') {
					bank.manage = '2';
					document.querySelector('.bank_pro').textContent = player_2;

					money2 -= 4000;
					player_2pro += 300;

					document.querySelector('.money2').textContent = money2;

					alert('TABRIK BANK HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_2 == 22) {
			if (money2 > 1800) {
				if (restoran.manage == '0') {
					restoran.manage = '2';
					document.querySelector('.restoran_pro').textContent = player_2;

					money2 -= 1800;
					player_2pro += 150;

					document.querySelector('.money2').textContent = money2;

					alert('RESTORAN HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} else if (locate_2 == 23) {
			if (money2 > 2000) {
				if (xona.manage == '0') {
					xona.manage = '2';
					document.querySelector('.xona_pro').textContent = player_2;

					money2 -= 2000;
					player_2pro += 200;

					document.querySelector('.money2').textContent = money2;

					alert('XONA HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Bubakhshed, baroi xaridani in jo pulaton namerasad!');
			}
		} 
	}

	// third turn !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

	else if (turn_3 == 'on') {
		if (locate_3 == 2) {
			if (money3 > 2500) {
				if (bozor.manage == '0') {
					bozor.manage = '3';
					document.querySelector('.bozor_pro').textContent = player_3;

					money3 -= 2500;
					player_3pro += 250;

					document.querySelector('.money3').textContent = money3;

					alert('BOZOR HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} else if (locate_3 == 3) {
			if (money3 > 2200) {
				if (etazh.manage == '0') {
					etazh.manage = '3';
					document.querySelector('.etazh_pro').textContent = player_3;

					money3 -= 2200;
					player_3pro += 200;

					document.querySelector('.money3').textContent = money3;

					alert('ETAZH HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} else if (locate_3 == 5) {
			if (money3 > 1200) {
				if (rahimi.manage == '0') {
					rahimi.manage = '3';
					document.querySelector('.rahimi_pro').textContent = player_3;

					money3 -= 1200;
					player_3pro += 150;

					document.querySelector('.money3').textContent = money3;

					alert('RAHIMI HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} else if (locate_3 == 8) {
			if (money3 > 3500) {
				if (police.manage == '0') {
					police.manage = '3';
					document.querySelector('.police_pro').textContent = player_3;

					money3 -= 3500;
					player_3pro += 250;

					document.querySelector('.money3').textContent = money3;

					alert('POLICE HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} else if (locate_3 == 10) {
			if (money3 > 3800) {
				if (bolnisa.manage == '0') {
					bolnisa.manage = '3';
					document.querySelector('.bolnisa_pro').textContent = player_3;

					money3 -= 3800;
					player_3pro += 250;

					document.querySelector('.money3').textContent = money3;

					alert('BOLNISA HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} else if (locate_3 == 13) {
			if (money3 > 2500) {
				if (etazh_2.manage == '0') {
					etazh_2.manage = '3';
					document.querySelector('.etazh_2_pro').textContent = player_3;

					money3 -= 2500;
					player_3pro += 200;

					document.querySelector('.money3').textContent = money3;

					alert('ETAZH HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} else if (locate_3 == 16) {
			if (money3 > 2000) {
				if (mersedes.manage == '0') {
					mersedes.manage = '3';
					document.querySelector('.mersedes_pro').textContent = player_3;

					money3 -= 2000;
					player_3pro += 0;

					document.querySelector('.money3').textContent = money3;

					alert('MERSEDES HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} else if (locate_3 == 19) {
			if (money3 > 4000) {
				if (bank.manage == '0') {
					bank.manage = '3';
					document.querySelector('.bank_pro').textContent = player_3;

					money3 -= 4000;
					player_3pro += 300;

					document.querySelector('.money3').textContent = money3;

					alert('TABRIK BANK HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} else if (locate_3 == 22) {
			if (money3 > 1800) {
				if (restoran.manage == '0') {
					restoran.manage = '3';
					document.querySelector('.restoran_pro').textContent = player_3;

					money3 -= 1800;
					player_3pro += 150;

					document.querySelector('.money3').textContent = money3;

					alert('RESTORAN HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} else if (locate_3 == 23) {
			if (money3 > 2000) {
				if (xona.manage == '0') {
					xona.manage = '3';
					document.querySelector('.xona_pro').textContent = player_3;

					money3 -= 2000;
					player_3pro += 200;

					document.querySelector('.money3').textContent = money3;

					alert('XONA HARIDA SHUD!');
				} else {
					myAlert();
				}
			} else {
				alert('Бубахшед, барои харидани ин чо пулатон намерасад!');
			}
		} 
	}

	document.querySelector('.profit_1').textContent = player_1pro;
	document.querySelector('.profit_2').textContent = player_2pro;
	document.querySelector('.profit_3').textContent = player_3pro;		
}

ok.onclick = function() {
	if (turn_1 == 'on') {
		if (locate_1 == 2) {
			money1 -= 700;
			document.querySelector('.money1').textContent = money1;
			if (bozor.manage == '2') {
				money2 += 700;
				document.querySelector('.money2').textContent = money2;
			} else if (bozor.manage == '3') {
				money3 += 700;
				document.querySelector('.money3').textContent = money3;
			}
		} else if (locate_1 == 3) {
			money1 -= 600;
			document.querySelector('.money1').textContent = money1;
			if (etazh.manage == '2') {
				money2 += 600;
				document.querySelector('.money2').textContent = money2;
			} else if (etazh.manage == '3') {
				money3 += 600;
				document.querySelector('.money3').textContent = money3;
			}
		} else if (locate_1 == 5) {
			money1 -= 500;
			document.querySelector('.money1').textContent = money1;
			if (rahimi.manage == '2') {
				money2 += 500;
				document.querySelector('.money2').textContent = money2;
			} else if (rahimi.manage == '3') {
				money3 += 500;
				document.querySelector('.money3').textContent = money3;
			}
		} else if (locate_1 == 13) {
			money1 -= 700;
			document.querySelector('.money1').textContent = money1;
			if (etazh_2.manage == '2') {
				money2 += 700;
				document.querySelector('.money2').textContent = money2;
			} else if (etazh_2.manage == '3') {
				money3 += 700;
				document.querySelector('.money3').textContent = money3;
			}
		} else if (locate_1 == 22) {
			money1 -= 800;
			document.querySelector('.money1').textContent = money1;
			if (restoran.manage == '2') {
				money2 += 800;
				document.querySelector('.money2').textContent = money2;
			} else if (restoran.manage == '3') {
				money3 += 800;
				document.querySelector('.money3').textContent = money3;
			}
		} else if (locate_1 == 23) {
			money1 -= 800;
			document.querySelector('.money1').textContent = money1;
			if (xona.manage == '2') {
				money2 += 800;
				document.querySelector('.money2').textContent = money2;
			} else if (xona.manage == '3') {
				money3 += 800;
				document.querySelector('.money3').textContent = money3;
			}
		}




	} else if (turn_2 == 'on') {

		if (locate_2 == 2) {
			money2 -= 700;
			document.querySelector('.money2').textContent = money2;
			if (bozor.manage == '1') {
				money1 += 700;
				document.querySelector('.money1').textContent = money1;
			} else if (bozor.manage == '3') {
				money3 += 700;
				document.querySelector('.money3').textContent = money3; 
			}
		} else if (locate_2 == 3) {
			money2 -= 600;
			document.querySelector('.money2').textContent = money2;
			if (etazh.manage == '1') {
				money1 += 600;
				document.querySelector('.money1').textContent = money1;
			} else if (etazh.manage == '3') {
				money3 += 600;
				document.querySelector('.money3').textContent = money3; 
			}
		} else if (locate_2 == 5) {
			money2 -= 500;
			document.querySelector('.money2').textContent = money2;
			if (rahimi.manage == '1') {
				money1 += 500;
				document.querySelector('.money1').textContent = money1;
			} else if (rahimi.manage == '3') {
				money3 += 500;
				document.querySelector('.money3').textContent = money3; 
			}
		} else if (locate_2 == 13) {
			money2 -= 700;
			document.querySelector('.money2').textContent = money2;
			if (etazh_2.manage == '1') {
				money1 += 700;
				document.querySelector('.money1').textContent = money1;
			} else if (etazh_2.manage == '3') {
				money3 += 700;
				document.querySelector('.money3').textContent = money3; 
			}
		} else if (locate_2 == 22) {
			money2 -= 800;
			document.querySelector('.money2').textContent = money2;
			if (restoran.manage == '1') {
				money1 += 800;
				document.querySelector('.money1').textContent = money1;
			} else if (restoran.manage == '3') {
				money3 += 800;
				document.querySelector('.money3').textContent = money3; 
			}
		} else if (locate_2 == 23) {
			money2 -= 800;
			document.querySelector('.money2').textContent = money2;
			if (xona.manage == '1') {
				money1 += 800;
				document.querySelector('.money1').textContent = money1;
			} else if (xona.manage == '3') {
				money3 += 800;
				document.querySelector('.money3').textContent = money3; 
			}
		}


	} else if (turn_3 == 'on') {

		if (locate_3 == 2) {
			money3 -= 700;
			document.querySelector('.money3').textContent = money3;
			if (bozor.manage == '1') {
				money1 += 700;
				document.querySelector('.money1').textContent = money1;
			} else if (bozor.manage == '2') {
				money2 += 700;
				document.querySelector('.money2').textContent = money2; 
			}
		} else if (locate_3 == 3) {
			money3 -= 600;
			document.querySelector('.money3').textContent = money3;
			if (etazh.manage == '1') {
				money1 += 600;
				document.querySelector('.money1').textContent = money1;
			} else if (etazh.manage == '2') {
				money2 += 600;
				document.querySelector('.money2').textContent = money2; 
			}
		} else if (locate_3 == 5) {
			money3 -= 500;
			document.querySelector('.money3').textContent = money3;
			if (rahimi.manage == '1') {
				money1 += 500;
				document.querySelector('.money1').textContent = money1;
			} else if (rahimi.manage == '2') {
				money2 += 500;
				document.querySelector('.money2').textContent = money2; 
			}
		} else if (locate_3 == 13) {
			money3 -= 700;
			document.querySelector('.money3').textContent = money3;
			if (etazh_2.manage == '1') {
				money1 += 700;
				document.querySelector('.money1').textContent = money1;
			} else if (etazh_2.manage == '2') {
				money2 += 700;
				document.querySelector('.money2').textContent = money2; 
			}
		} else if (locate_3 == 22) {
			money3 -= 800;
			document.querySelector('.money3').textContent = money3;
			if (restoran.manage == '1') {
				money1 += 800;
				document.querySelector('.money1').textContent = money1;
			} else if (restoran.manage == '2') {
				money2 += 800;
				document.querySelector('.money2').textContent = money2; 
			}
		} else if (locate_3 == 22) {
			money3 -= 800;
			document.querySelector('.money3').textContent = money3;
			if (xona.manage == '1') {
				money1 += 800;
				document.querySelector('.money1').textContent = money1;
			} else if (xona.manage == '2') {
				money2 += 800;
				document.querySelector('.money2').textContent = money2; 
			}
		}

	}
	document.querySelector('.alert_rent').style.display = 'none';
}



no.onclick = function() {
	document.querySelector('.alert_rent').style.display = 'none';
	alert('Агар пули арендаро надихед ба турма зада мешавед!');

	
	if (turn_1 == 'on') {

		if (locate_1 == 2) {
			document.querySelector('.bozor').style.border = '6px black solid';
			if (locate_2 == 2) {
				document.querySelector('.bozor').style.borderTop = '8px #2bf52b solid';
			} else if (locate_3 == 2) {
				document.querySelector('.bozor').style.borderTop = '8px blue solid';
			}

			if (locate_2 == 2 && locate_3 == 2) {
				document.querySelector('.bozor').style.borderLeft = '8px #2bf52b solid';
				document.querySelector('.bozor').style.borderRight = '8px blue solid';
			} 
		} else if (locate_1 == 3) {
			document.querySelector('.etazh').style.border = '6px black solid';
			if (locate_2 == 3) {
				document.querySelector('.etazh').style.borderTop = '8px #2bf52b solid';
			} else if (locate_3 == 3) {
				document.querySelector('.etazh').style.borderTop = '8px blue solid';
			}

			if (locate_2 == 3 && locate_3 == 3) {
				document.querySelector('.etazh').style.borderLeft = '8px #2bf52b solid';
				document.querySelector('.etazh').style.borderRight = '8px blue solid';
			} 
		} else if (locate_1 == 5) {
			document.querySelector('.rahimi').style.border = '6px black solid';
			if (locate_2 == 5) {
				document.querySelector('.rahimi').style.borderTop = '8px #2bf52b solid';
			} else if (locate_3 == 5) {
				document.querySelector('.rahimi').style.borderTop = '8px blue solid';
			}

			if (locate_2 == 5 && locate_3 == 5) {
				document.querySelector('.rahimi').style.borderLeft = '8px #2bf52b solid';
				document.querySelector('.rahimi').style.borderRight = '8px blue solid';
			} 
		} else if (locate_1 == 13) {
			document.querySelector('.etazh_2').style.border = '6px black solid';
			if (locate_2 == 13) {
				document.querySelector('.etazh_2').style.borderTop = '8px #2bf52b solid';
			} else if (locate_3 == 13) {
				document.querySelector('.etazh_2').style.borderTop = '8px blue solid';
			}

			if (locate_2 == 13 && locate_3 == 13) {
				document.querySelector('.etazh_2').style.borderLeft = '8px #2bf52b solid';
				document.querySelector('.etazh_2').style.borderRight = '8px blue solid';
			} 
		} else if (locate_1 == 22) {
			document.querySelector('.restoran').style.border = '6px black solid';
			if (locate_2 == 22) {
				document.querySelector('.restoran').style.borderTop = '8px #2bf52b solid';
			} else if (locate_3 == 22) {
				document.querySelector('.restoran').style.borderTop = '8px blue solid';
			}

			if (locate_2 == 22 && locate_3 == 22) {
				document.querySelector('.restoran').style.borderLeft = '8px #2bf52b solid';
				document.querySelector('.restoran').style.borderRight = '8px blue solid';
			} 
		} else if (locate_1 == 23) {
			document.querySelector('.xona').style.border = '6px black solid';
			if (locate_2 == 23) {
				document.querySelector('.xona').style.borderTop = '8px #2bf52b solid';
			} else if (locate_3 == 23) {
				document.querySelector('.xona').style.borderTop = '8px blue solid';
			}

			if (locate_2 == 23 && locate_3 == 23) {
				document.querySelector('.xona').style.borderLeft = '8px #2bf52b solid';
				document.querySelector('.xona').style.borderRight = '8px blue solid';
			} 
		}

		locate_1 = 7;
		turma1.in = 'on';
		turma1.rest = 5;
		document.getElementById('turma_time1').textContent = '5x турма';
		document.getElementById('turma_time1').style.display = 'block';


		document.querySelector('.turma').style.border = '8px red solid';
		if (locate_2 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px #2bf52b solid';
		} else if (locate_3 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px blue solid';
		}

		 if (locate_2 == 7 && locate_3 == 7) {
		 	document.querySelector('.turma').style.borderLeft = '8px #2bf52b solid';
		 	document.querySelector('.turma').style.borderRight = '8px blue solid';
		 }

	} else if (turn_2 == 'on') {


		if (locate_2 == 2) {
			document.querySelector('.bozor').style.border = '6px black solid';
			if (locate_1 == 2) {
				document.querySelector('.bozor').style.borderTop = '8px red solid';
			} else if (locate_3 == 2) {
				document.querySelector('.bozor').style.borderTop = '8px blue solid';
			}

			if (locate_1 == 2 && locate_3 == 2) {
				document.querySelector('.bozor').style.borderLeft = '8px red solid';
				document.querySelector('.bozor').style.borderRight = '8px blue solid';
			} 
		} else if (locate_2 == 3) {
			document.querySelector('.etazh').style.border = '6px black solid';
			if (locate_1 == 3) {
				document.querySelector('.etazh').style.borderTop = '8px red solid';
			} else if (locate_3 == 3) {
				document.querySelector('.etazh').style.borderTop = '8px blue solid';
			}

			if (locate_1 == 3 && locate_3 == 3) {
				document.querySelector('.etazh').style.borderLeft = '8px red solid';
				document.querySelector('.etazh').style.borderRight = '8px blue solid';
			} 
		} else if (locate_2 == 5) {
			document.querySelector('.rahimi').style.border = '6px black solid';
			if (locate_1 == 5) {
				document.querySelector('.rahimi').style.borderTop = '8px red solid';
			} else if (locate_3 == 5) {
				document.querySelector('.rahimi').style.borderTop = '8px blue solid';
			}

			if (locate_1 == 5 && locate_3 == 5) {
				document.querySelector('.rahimi').style.borderLeft = '8px red solid';
				document.querySelector('.rahimi').style.borderRight = '8px blue solid';
			} 
		} else if (locate_2 == 13) {
			document.querySelector('.etazh_2').style.border = '6px black solid';
			if (locate_1 == 13) {
				document.querySelector('.etazh_2').style.borderTop = '8px red solid';
			} else if (locate_3 == 13) {
				document.querySelector('.etazh_2').style.borderTop = '8px blue solid';
			}

			if (locate_1 == 13 && locate_3 == 13) {
				document.querySelector('.etazh_2').style.borderLeft = '8px red solid';
				document.querySelector('.etazh_2').style.borderRight = '8px blue solid';
			} 
		} else if (locate_2 == 22) {
			document.querySelector('.restoran').style.border = '6px black solid';
			if (locate_1 == 22) {
				document.querySelector('.restoran').style.borderTop = '8px red solid';
			} else if (locate_3 == 22) {
				document.querySelector('.restoran').style.borderTop = '8px blue solid';
			}

			if (locate_1 == 22 && locate_3 == 22) {
				document.querySelector('.restoran').style.borderLeft = '8px red solid';
				document.querySelector('.restoran').style.borderRight = '8px blue solid';
			} 
		} else if (locate_2 == 23) {
			document.querySelector('.xona').style.border = '6px black solid';
			if (locate_1 == 23) {
				document.querySelector('.xona').style.borderTop = '8px red solid';
			} else if (locate_3 == 23) {
				document.querySelector('.xona').style.borderTop = '8px blue solid';
			}

			if (locate_1 == 23 && locate_3 == 23) {
				document.querySelector('.xona').style.borderLeft = '8px red solid';
				document.querySelector('.xona').style.borderRight = '8px blue solid';
			} 
		}


		locate_2 = 7;
		turma2.in = 'on';
		turma2.rest = 5;
		document.getElementById('turma_time2').textContent = '5x турма';
		document.getElementById('turma_time2').style.display = 'block';


		document.querySelector('.turma').style.border = '8px #2bf52b solid';
		if (locate_1 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px red solid';
		} else if (locate_3 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px blue solid';
		}

		if (locate_1 == 7 && locate_3 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px red solid';
		 	document.querySelector('.turma').style.borderRight = '8px blue solid';
		}

	} else if ( turn_3 == 'on') {


		if (locate_3 == 2) {
			document.querySelector('.bozor').style.border = '6px black solid';
			if (locate_1 == 2) {
				document.querySelector('.bozor').style.borderTop = '8px red solid';
			} else if (locate_2 == 2) {
				document.querySelector('.bozor').style.borderTop = '8px #2bf52b solid';
			}

			if (locate_1 == 2 && locate_2 == 2) {
				document.querySelector('.bozor').style.borderLeft = '8px red solid';
				document.querySelector('.bozor').style.borderRight = '8px #2bf52b solid';
			} 
		} else if (locate_3 == 3) {
			document.querySelector('.etazh').style.border = '6px black solid';
			if (locate_1 == 3) {
				document.querySelector('.etazh').style.borderTop = '8px red solid';
			} else if (locate_2 == 3) {
				document.querySelector('.etazh').style.borderTop = '8px #2bf52b solid';
			}

			if (locate_1 == 3 && locate_2 == 3) {
				document.querySelector('.etazh').style.borderLeft = '8px red solid';
				document.querySelector('.etazh').style.borderRight = '8px #2bf52b solid';
			} 
		} else if (locate_3 == 5) {
			document.querySelector('.rahimi').style.border = '6px black solid';
			if (locate_1 == 5) {
				document.querySelector('.rahimi').style.borderTop = '8px red solid';
			} else if (locate_2 == 5) {
				document.querySelector('.rahimi').style.borderTop = '8px #2bf52b solid';
			}

			if (locate_1 == 5 && locate_2 == 5) {
				document.querySelector('.rahimi').style.borderLeft = '8px red solid';
				document.querySelector('.rahimi').style.borderRight = '8px #2bf52b solid';
			} 
		} else if (locate_3 == 13) {
			document.querySelector('.etazh_2').style.border = '6px black solid';
			if (locate_1 == 13) {
				document.querySelector('.etazh_2').style.borderTop = '8px red solid';
			} else if (locate_2 == 13) {
				document.querySelector('.etazh_2').style.borderTop = '8px #2bf52b solid';
			}

			if (locate_1 == 13 && locate_2 == 13) {
				document.querySelector('.etazh_2').style.borderLeft = '8px red solid';
				document.querySelector('.etazh_2').style.borderRight = '8px #2bf52b solid';
			} 
		} else if (locate_3 == 22) {
			document.querySelector('.restoran').style.border = '6px black solid';
			if (locate_1 == 22) {
				document.querySelector('.restoran').style.borderTop = '8px red solid';
			} else if (locate_2 == 22) {
				document.querySelector('.restoran').style.borderTop = '8px #2bf52b solid';
			}

			if (locate_1 == 22 && locate_2 == 22) {
				document.querySelector('.restoran').style.borderLeft = '8px red solid';
				document.querySelector('.restoran').style.borderRight = '8px #2bf52b solid';
			} 
		} else if (locate_3 == 23) {
			document.querySelector('.xona').style.border = '6px black solid';
			if (locate_1 == 23) {
				document.querySelector('.xona').style.borderTop = '8px red solid';
			} else if (locate_2 == 23) {
				document.querySelector('.xona').style.borderTop = '8px #2bf52b solid';
			}

			if (locate_1 == 23 && locate_2 == 23) {
				document.querySelector('.xona').style.borderLeft = '8px red solid';
				document.querySelector('.xona').style.borderRight = '8px #2bf52b solid';
			} 
		}


		locate_3 = 7;
		turma3.in = 'on';
		turma3.rest = 5;
		document.getElementById('turma_time3').textContent = '5x турма';
		document.getElementById('turma_time3').style.display = 'block';

		document.querySelector('.turma').style.border = '8px blue solid';
		if (locate_1 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px red solid';
		} else if (locate_2 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px #2bf52b solid';
		}

		if (locate_1 == 7 && locate_2 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px red solid';
		 	document.querySelector('.turma').style.borderRight = '8px #2bf52b solid';
		}

	}

}


// kori arendi moshin !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

moshin.onclick = function() {
	if (turn_1 == 'on') {
		if (locate_1 == 16) {
		
			if (mersedes.manage == '1') {
				document.querySelector('.wrapper').style.display = 'none';
				document.querySelector('.choice').style.display = 'block';
			} else if (mersedes.manage == '2' || mersedes.manage == '3') {
				alert('Ин мошинаи дигар кас аст!');
			} else {
				alert('Аввал ин мошинаро бояд бихаред!');
			}
			
		} 
	} else if (turn_2 == 'on') {
		if (locate_2 == 16) {
			
			if (mersedes.manage == '2') {
				document.querySelector('.wrapper').style.display = 'none';
				document.querySelector('.choice').style.display = 'block';
			} else if (mersedes.manage == '1' || mersedes.manage == '3') {
				alert('Ин мошинаи дигар кас аст!');
			} else {
				alert('Аввал ин мошинаро бояд бихаред!');
			}
			
		}
	} else if (turn_3 == 'on') {
		if (locate_3 == 16) {
			
			if (mersedes.manage == '3') {
				document.querySelector('.wrapper').style.display = 'none';
				document.querySelector('.choice').style.display = 'block';
			} else if (mersedes.manage == '2' || mersedes.manage == '1') {
				alert('Ин мошинаи дигар кас аст!');
			} else {
				alert('Аввал ин мошинаро бояд бихаред!');
			}
			
		}
	}

	
}

var on = 'on';
var off = 'off';

function moshin_co(f, s, t, des) {
	if (f == on) {
		document.querySelector(des).style.border = '8px red solid';
		document.querySelector('.mersedes').style.border = '6px black solid';

		if (locate_2 == 16) {
			document.querySelector(des).style.borderTop = '8px #2bf52b solid';
		} else if (locate_3 == 16) {
			document.querySelector(des).style.borderTop = '8px blue solid';
		} 

		if (locate_2 == 16 && locate_3 == 16) {
			document.querySelector(des).style.borderTop = '8px #2bf52b solid';
			document.querySelector(des).style.borderBottom = '8px blue solid';
		}

	} else if( s == on) {
		document.querySelector(des).style.border = '8px #2bf52b solid';
		document.querySelector('.mersedes').style.border = '6px black solid';
		if (locate_1 == 16) {
			document.querySelector(des).style.borderTop = '8px red solid';
		} else if (locate_3 == 16) {
			document.querySelector(des).style.borderTop = '8px blue solid';
		} 

		if (locate_1 == 16 && locate_3 == 16) {
			document.querySelector(des).style.borderTop = '8px blue solid';
			document.querySelector(des).style.borderBottom = '8px red solid';
		}
	} else if( t == on) {
		document.querySelector(des).style.border = '8px blue solid';
		document.querySelector('.mersedes').style.border = '6px black solid';

		if (locate_1 == 16) {
			document.querySelector(des).style.borderTop = '8px red solid';
		} else if (locate_2 == 16) {
			document.querySelector(des).style.borderTop = '8px #2bf52b solid';
		} 

		if (locate_1 == 16 && locate_2 == 16) {
			document.querySelector(des).style.borderTop = '8px #2bf52b solid';
			document.querySelector(des).style.borderBottom = '8px red solid';
		}
	} 


}

bapeshm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 1;
		document.querySelector('.mersedes').style.border = "6px black solid";

		moshin_co(on , off, off, n1);
	} else if (turn_2 == 'on') {
		locate_2 = 1;
		document.querySelector('.mersedes').style.border = "6px black solid";

		moshin_co(off , on, off, n1);
	} else if (turn_3 == 'on') {
		locate_3 = 1;
		document.querySelector('.mersedes').style.border = "6px black solid";

		moshin_co(of , off, on, n1);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();
}

bozorm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 2;
		document.querySelector('.mersedes').style.border = "6px black solid";

		moshin_co(on, off, off, n2);
	} else if (turn_2 == 'on') {
		locate_2 = 2;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n2);
	} else if (turn_3 == 'on') {
		locate_3 = 2;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n2);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';	
	setScrollIntoViewOptions();
}

etazh_mosh.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 3;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n3);
	} else if (turn_2 == 'on') {
		locate_2 = 3;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n3);
	} else if (turn_3 == 'on') {
		locate_3 = 3;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n3);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

shtrafm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 4;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n4);
	} else if (turn_2 == 'on') {
		locate_2 = 4;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n4);
	} else if (turn_3 == 'on') {
		locate_3 = 4;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n4);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

rahimi_mob.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 5;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n5);
	} else if (turn_2 == 'on') {
		locate_2 = 5;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n5);
	} else if (turn_3 == 'on') {
		locate_3 = 5;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n5);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

tuhfam.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 6;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n6);
	} else if (turn_2 == 'on') {
		locate_2 = 6;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n6);
	} else if (turn_3 == 'on') {
		locate_3 = 6;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n6);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

turmam.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 7;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n7);
	} else if (turn_2 == 'on') {
		locate_2 = 7;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n7);
	} else if (turn_3 == 'on') {
		locate_3 = 7;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n7);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

policem.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 8;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n8);
	} else if (turn_2 == 'on') {
		locate_2 = 8;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n8);
	} else if (turn_3 == 'on') {
		locate_3 = 8;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n8);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
} 

nimi_pulm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 9;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n9);
	} else if (turn_2 == 'on') {
		locate_2 = 9;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n9);
	} else if (turn_3 == 'on') {
		locate_3 = 9;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n9);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

bolnisam.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 10;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n10);
	} else if (turn_2 == 'on') {
		locate_2 = 10;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n10);
	} else if (turn_3 == 'on') {
		locate_3 = 10;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n10);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

bankrotm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 11;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n11);
	} else if (turn_2 == 'on') {
		locate_2 = 11;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n11);
	} else if (turn_3 == 'on') {
		locate_3 = 11;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n11);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

bombam.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 12;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n12);
	} else if (turn_2 == 'on') {
		locate_2 = 12;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n12);
	} else if (turn_3 == 'on') {
		locate_3 = 12;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n12);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

etazh_2_mosh.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 13;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n13);
	} else if (turn_2 == 'on') {
		locate_2 = 13;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n13);
	} else if (turn_3 == 'on') {
		locate_3 = 13;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n13);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

avtomatm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 14;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n14);
	} else if (turn_2 == 'on') {
		locate_2 = 14;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n14);
	} else if (turn_3 == 'on') {
		locate_3 = 14;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n14);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

sipar.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 15;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n15);
	} else if (turn_2 == 'on') {
		locate_2 = 15;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n15);
	} else if (turn_3 == 'on') {
		locate_3 = 15;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n15);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';	
	setScrollIntoViewOptions();
}


lotoreyam.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 17;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n17);
	} else if (turn_2 == 'on') {
		locate_2 = 17;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n17);
	} else if (turn_3 == 'on') {
		locate_3 = 17;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n17);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';	
	setScrollIntoViewOptions();
}

najotm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 18;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n18);
	} else if (turn_2 == 'on') {
		locate_2 = 18;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n18);
	} else if (turn_3 == 'on') {
		locate_3 = 18;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n18);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

bankm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 19;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n19);
	} else if (turn_2 == 'on') {
		locate_2 = 19;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n19);
	} else if (turn_3 == 'on') {
		locate_3 = 19;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n19);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

duzd.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 20;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n20);
	} else if (turn_2 == 'on') {
		locate_2 = 20;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n20);
	} else if (turn_3 == 'on') {
		locate_3 = 20;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n20);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

bashkunm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 21;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n21);
	} else if (turn_2 == 'on') {
		locate_2 = 21;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n21);
	} else if (turn_3 == 'on') {
		locate_3 = 21;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n21);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';	
	setScrollIntoViewOptions();
}

restoranm.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 22;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n22);
	} else if (turn_2 == 'on') {
		locate_2 = 22;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n22);
	} else if (turn_3 == 'on') {
		locate_3 = 22;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n22);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}

xonam.onclick = function() {
	if (turn_1 == 'on') {
		locate_1 = 23;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(on, off, off, n23);
	} else if (turn_2 == 'on') {
		locate_2 = 23;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, on, off, n23);
	} else if (turn_3 == 'on') {
		locate_3 = 23;
		document.querySelector('.mersedes').style.border = "6px black solid";
		moshin_co(off, off, on, n23);
	}

	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	setScrollIntoViewOptions();	
}




//..........................................................................................................


ok_turma.onclick = function() {
	document.querySelector('.turma_rent').style.display = 'none';

	if (turn_1 == 'on') {

		document.querySelector('.turma').style.border = "8px red solid";
		if (locate_2  == 7) {
			document.querySelector('.turma').style.borderLeft = "8px #2bf52b solid";
		} else if (locate_3 == 7) {
			document.querySelector('.turma').style.borderLeft = "8px blue solid";
		}

		if (locate_2 == 7 && locate_3 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px #2bf52b solid';
			document.querySelector('.turma').style.borderRight = '8px blue solid';
		}

	} else if (turn_2 == 'on') {

		document.querySelector('.turma').style.border = "8px #2bf52b solid";
		if (locate_1  == 7) {
			document.querySelector('.turma').style.borderLeft = "8px red solid";
		} else if (locate_3 == 7) {
			document.querySelector('.turma').style.borderLeft = "8px blue solid";
		}

		if (locate_1 == 7 && locate_3 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px red solid';
			document.querySelector('.turma').style.borderRight = '8px blue solid';
		}		

	} else if (turn_3 == 'on') {

		document.querySelector('.turma').style.border = "8px blue solid";
		if (locate_2  == 7) {
			document.querySelector('.turma').style.borderLeft = "8px #2bf52b solid";
		} else if (locate_1 == 7) {
			document.querySelector('.turma').style.borderLeft = "8px red solid";
		}

		if (locate_1 == 7 && locate_2 == 7) {
			document.querySelector('.turma').style.borderLeft = '8px red solid';
			document.querySelector('.turma').style.borderRight = '8px #2bf52b solid';
		}		

	}
}

ok_amn.onclick = function() {
	document.querySelector('.turma_amn').style.display = 'none';
}

amn.onclick = function() {


	if (turn_1 == 'on' && locate_1 == 7) {
		if (money1 > 1000) {
			money1 -= 1000;
			document.querySelector('.money1').textContent = money1;
			turma1.in = 'off';
			turma1.rest = 999;
			document.getElementById('turma_time1').textContent = "Озод";
		} else {
			alert(player_1 + ' Пулатон намерасад!');
		}
	} else if (turn_2 == 'on' && locate_2 == 7) {
		if (money2 > 1000) {
			money2 -= 1000;
			document.querySelector('.money2').textContent = money2;
			turma2.in = 'off';
			turma2.rest = 999;
			document.getElementById('turma_time2').textContent = "Озод";
		} else {
			alert(player_2 + ' Пулатон намерасад!');
		}
	} else if (turn_3 == 'on' && locate_3 == 7) {
		if (money3 > 1000) {
			money3 -= 1000;
			turma3.in = 'off';
			turma3.rest = 999;
			document.getElementById('turma_time3').textContent = "Озод";
			document.querySelector('.money3').textContent = money3;
		} else {
			alert(player_3 + ' Пулатон намерасад!');
		}
	}
	document.getElementById('amn').style.display = 'none';

}



hp.onclick = function() {


	if (turn_1 == 'on') {
		if (money1 > 500) {
			money1 -= 500;
			document.querySelector('.money1').textContent = money1;
			hp1 = 100;
			document.querySelector('.hp1').textContent = hp1;
		} else {
			alert('Пулатон барои лечение намерасад!');
		}
	} else if (turn_2 == 'on') {
		if (money2 > 500) {
			money2 -= 500;
			document.querySelector('.money2').textContent = money2;
			hp2 = 100;
			document.querySelector('.hp2').textContent = hp2;
		} else {
			alert('Пулатон барои лечение намерасад!');
		}
	} else if (turn_3 == 'on') {
		if (money3 > 500) {
			money3 -= 500;
			document.querySelector('.money3').textContent = money3;
			hp3 = 100;
			document.querySelector('.hp3').textContent = hp3;
		} else {
			alert('Пулатон барои лечение намерасад!');
		}
	}
	

}

yes_lech.onclick = function() {


	if (turn_1 == 'on') {
		if (money1 > 800) {
			money1 -= 800;
			hp1 = 100;

			document.querySelector('.money1').textContent = money1;
			document.querySelector('.hp1').textContent = hp1;
			document.getElementById('percent1').style.display = 'block';
		} else {
			document.querySelector('.lechenie').style.display = 'block';
			document.querySelector('.lechenie_txt').textContent = player_1 + ' пулатон барои лечение намерасад , метавонед карз гирифта лечение кунед!';
		}
	} else if (turn_2 == 'on') {
		if (money2 > 800) {
			money2 -= 800;
			hp2 = 100;

			document.querySelector('.money2').textContent = money2;
			document.querySelector('.hp2').textContent = hp2;
			document.getElementById('percent3').style.display = 'block';
		} else {
			document.querySelector('.lechenie').style.display = 'block';
			document.querySelector('.lechenie_txt').textContent = player_2 + ' пулатон барои лечение намерасад , метавонед карз гирифта лечение кунед!';
		}
	} else if (turn_3 == 'on') {
		if (money3 > 800) {
			money3 -= 800;
			hp3 = 100;

			document.querySelector('.money3').textContent = money3;
			document.querySelector('.hp3').textContent = hp3;
			document.getElementById('percent2').style.display = 'block';
		} else {
			document.querySelector('.lechenie').style.display = 'block';
			document.querySelector('.lechenie_txt').textContent = player_3 + ' пулатон барои лечение намерасад , метавонед карз гирифта лечение кунед!';
		}
	}

	document.querySelector('.hp_end').style.display = 'none';
	document.querySelector('.turma_amn').style.display = 'none';

}

function departate() {
	if (turn_1 == 'on') {
		turma1.in = 'on';
		turma1.rest = 1e6;

		in_game.first = 'off';

		

		document.getElementById('info1').style.display = 'none';
		document.querySelector('.karz1').style.display = 'none';
		document.getElementById('najot_pro1').style.display = 'none';
		document.getElementById('turma_time1').style.display = 'none';
		document.querySelector('.profit_1').style.display = 'none';

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


				if (turma1.in == 'off') {
					document.querySelector('.turma').style.border = '6px black solid'
				}

				if (locate_2 == 7) {
					document.querySelector('.turma').style.border = "8px #2bf52b solid";
				} else if (locate_3 == 7) {
					document.querySelector('.turma').style.border = "8px blue solid";
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

		locate_1 = 24;	

		document.querySelector('.loose').style.display = 'block';
		document.querySelector('.name_loose').textContent = player_1;

		setTimeout(function() {
			document.querySelector('.loose').style.display = 'none';
		}, 5000);

		if (in_game.first == 'off' && in_game.second == 'off') {
			document.querySelector('.win').style.display = 'block';
			document.querySelector('.name_win').textContent = player_3;
			document.querySelector('.win_txt').textContent = 'Табрик , шумо голиби бози шудед!';
		} else if (in_game.first == 'off' && in_game.third == 'off') {
			document.querySelector('.win').style.display = 'block';
			document.querySelector('.name_win').textContent = player_2;
			document.querySelector('.win_txt').textContent = 'Табрик , шумо голиби бози шудед!';
		}


	} else if (turn_2 == 'on') {
		turma2.in = 'on';
		turma2.rest = 1e6;

		in_game.second = 'off';

		

		document.querySelector('.money2').style.display = 'none';
		document.querySelector('.dollar2').style.display = 'none';
		document.querySelector('.hp2').style.display = 'none';
		document.getElementById('percent3').style.display = 'none';
		document.querySelector('.player_name3').style.display = 'none';
		document.querySelector('.karz2').style.display = 'none';
		document.getElementById('najot_pro2').style.display = 'none';
		document.getElementById('turma_time2').style.display = 'none';
		document.querySelector('.profit_2').style.display = 'none';

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

			if (turma2.in == 'off') {
				document.querySelector('.turma').style.border = '6px black solid'
			}

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

		locate_2 = 24;


		document.querySelector('.loose').style.display = 'block';
		document.querySelector('.name_loose').textContent = player_2;

		setTimeout(function() {
			document.querySelector('.loose').style.display = 'none';
		}, 5000);

		if (in_game.first == 'off' && in_game.second == 'off') {
			document.querySelector('.win').style.display = 'block';
			document.querySelector('.name_win').textContent = player_3;
			document.querySelector('.win_txt').textContent = 'Табрик , шумо голиби бози шудед!';
		} else if (in_game.third == 'off' && in_game.second == 'off') {
			document.querySelector('.win').style.display = 'block';
			document.querySelector('.name_win').textContent = player_1;
			document.querySelector('.win_txt').textContent = 'Табрик , шумо голиби бози шудед!';
		}				

	} else if (turn_3 == 'on') {
		turma3.in = 'on';
		turma3.rest = 1e6;


		document.querySelector('.money3').style.display = 'none';
		document.querySelector('.dollar3').style.display = 'none';
		document.querySelector('.hp3').style.display = 'none';
		document.getElementById('percent2').style.display = 'none';
		document.querySelector('.player_name2').style.display = 'none';
		document.querySelector('.karz3').style.display = 'none';
		document.getElementById('najot_pro3').style.display = 'none';
		document.getElementById('turma_time3').style.display = 'none';
		document.querySelector('.profit_3').style.display = 'none';

		in_game.third = 'off';

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
			if (turma3.in == 'off') {
				document.querySelector('.turma').style.border = '6px black solid'
			}

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

		locate_3 = 24;

		document.querySelector('.loose').style.display = 'block';
		document.querySelector('.name_loose').textContent = player_3;

		setTimeout(function() {
			document.querySelector('.loose').style.display = 'none';
		}, 5000);

		if (in_game.first == 'off' && in_game.third == 'off') {
			document.querySelector('.win').style.display = 'block';
			document.querySelector('.name_win').textContent = player_2;
			document.querySelector('.win_txt').textContent = 'Табрик , шумо голиби бози шудед!';
		} else if (in_game.second == 'off' && in_game.third == 'off') {
			document.querySelector('.win').style.display = 'block';
			document.querySelector('.name_win').textContent = player_1;
			document.querySelector('.win_txt').textContent = 'Табрик , шумо голиби бози шудед!';
		}				

	}
}


no_lech.onclick = function() {
	alert('Набошад шумо аз бози мебароед!');
	
	departate();


	document.querySelector('.hp_end').style.display = 'none';
	document.querySelector('.turma_amn').style.display = 'none';

}

no_lechenie.onclick = function() {
	document.querySelector('.lechenie').style.display = 'none';
	alert('Набошад шумо аз бози мебароед!');

	departate();

}


karz_btn.onclick = function() {


	if (turn_1 == 'on') {
		if (karz_t1 > 0) {
			in_karz.f = 'on';
			
			
			karz_obor.rest1 = 3;
			document.querySelector('.karz_obor1').textContent = karz_obor.rest1 + 'x то карз';
			document.querySelector('.karz_obor1').style.display = 'block';

			document.querySelector('.karza_te').style.display = 'block';
			document.querySelector('#yes_te').style.display = 'none';
			document.querySelector('#no_te').style.display = 'none';
			document.getElementById('karz_select').style.display = 'block';
			document.querySelector('#yes_select').style.display = 'block';
			document.querySelector('.karza_te_txt').textContent = 'Чи кадар пул мегирифтагиатонро интихоб кунед!'

		} else {
			alert("Мутаасифона , шумо алкай се бор карз гирифтед , барои хамин дигар карз гирифта наметавонед");
		}
	} else if (turn_2 == 'on') {
		if (karz_t2 > 0) {
			in_karz.s = 'on';
			karz_t2 -= 1;
			money2 += 500;
			document.querySelector('.money2').textContent = money2;
			karz_obor.rest2 = 3;
			document.querySelector('.karz_obor2').textContent = karz_obor.rest2 + 'x то карз';
			document.querySelector('.karz_obor2').style.display = 'block';
		} else {
			alert("Мутаасифона , шумо алкай се бор карз гирифтед , барои хамин дигар карз гирифта наметавонед");
		}
	} else if (turn_3 == 'on') {
		if (karz_t3 > 0) {
			in_karz.t = 'on';
			karz_t3 -= 1;
			money3 += 500;
			document.querySelector('.money3').textContent = money3;
			karz_obor.rest3 = 3;
			document.querySelector('.karz_obor3').textContent = karz_obor.rest3 + 'x то карз';
			document.querySelector('.karz_obor3').style.display = 'block';
		} else {
			alert("Мутаасифона , шумо алкай се бор карз гирифтед , барои хамин дигар карз гирифта наметавонед");
		}
	}


}

yes_te.onclick = function() {


	if (turn_1 == 'on' || turma1.in == 'on') {
		if (money1 > 500) {
			money1 -= 500;
			document.querySelector('.money1').textContent = money1;

			in_karz.f = 'off';
			karz_obor.rest1 = 0;

			document.querySelector('.karz_obor1').textContent = 'Карз супорида шуд';

			document.querySelector('.karza_te').style.display = 'none';

		} else {
			alert('Пулатон барои додани карз намерасад! Барои хамин шумо аз бози мебароед');
			departate();
			document.querySelector('.karza_te').style.display = 'none';
		}
	}


}

no_te.onclick = function() {
	alert('Набошад шумо аз бози мебароед!');
	departate();
	document.querySelector('.karza_te').style.display = 'none';
} 

yes_select.onclick = function() {

	if (turn_1 == 'on') {
		if (document.getElementById('karz_select').value == 500) {
			money1 += 500;
			document.querySelector('.money1').textContent = money1;
			karz_t1 -= 1; 
		} else if (document.getElementById('karz_select').value == 1000) {
			money1 += 1000;
			document.querySelector('.money1').textContent = money1;
			karz_t1 -= 2;
			alert('Агар 1000 $ гиред , танхо як бори дигар карз гирифта метавонед халос!'); 
		} else if (document.getElementById('karz_select').value == 1500) {
			money1 += 1500;
			document.querySelector('.money1').textContent = money1;
			karz_t1 -= 3; 
			alert('Агар 1500 $ гиред , дигар карз гирифта наметавонед!');
		}
	} else if (turn_2 == 'on') {
		if (document.getElementById('karz_select').value == 500) {
			money2 += 500;
			document.querySelector('.money2').textContent = money2;
			karz_t2 -= 1; 
		} else if (document.getElementById('karz_select').value == 1000) {
			money2 += 1000;
			document.querySelector('.money2').textContent = money2;
			karz_t2 -= 2; 
			alert('Агар 1000 $ гиред , танхо як бори дигар карз гирифта метавонед халос!');
		} else if (document.getElementById('karz_select').value == 1500) {
			money2 += 1500;
			document.querySelector('.money2').textContent = money2;
			karz_t2 -= 3; 
			alert('Агар 1500 $ гиред , дигар карз гирифта наметавонед!');
		}
	} else if (turn_3 == 'on') {
		if (document.getElementById('karz_select').value == 500) {
			money3 += 500;
			document.querySelector('.money3').textContent = money3;
			karz_t3 -= 1; 
		} else if (document.getElementById('karz_select').value == 1000) {
			money3 += 1000;
			document.querySelector('.money3').textContent = money3;
			karz_t3 -= 2; 
			alert('Агар 1000 $ гиред , танхо як бори дигар карз гирифта метавонед халос!'); 
		} else if (document.getElementById('karz_select').value == 1500) {
			money3 += 1500;
			document.querySelector('.money3').textContent = money3;
			karz_t3 -= 3;
			alert('Агар 1500 $ гиред , дигар карз гирифта наметавонед!'); 
		}
	}

	document.querySelector('.karza_te').style.display = 'none';

}










