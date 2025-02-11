// bismillohirrahmanirrahim


let locate_1 = 1;
let locate_2 = 1;
let locate_3 = 1;

let turn_1 = 'on';
let turn_2 = 'off';
let turn_3 = 'off';

let reserve1 ;
let reserve2 ;
let reserve3 ;


var money1 = 0;
var money2 = 0;
var money3 = 0;

play.onclick = function() {
	document.querySelector('.wrapper').style.display = 'block';
}


xod_kun.onclick = function() {
	let rand  = Math.floor(Math.random() * (7 - 1) + 1);
	document.getElementById('demo').textContent = rand;
	document.getElementById('demo').style.display = 'block';

	// first turn___________________________________________________________________________________________________________________

	if (turn_1 == 'on') {

		document.getElementById('turn').textContent = "Xodi: Aliakbar";

		if (locate_1 == 1) {
			document.querySelector('.bapesh').style.border = "6 black solid";
			if (locate_2 == 1) {
				document.querySelector('.bapesh').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 1) {
				document.querySelector('.bapesh').style.border = "8px blue solid";
			} else {
				document.querySelector('.bapesh').style.border = "6 black solid";
			}
		} else if (locate_1 == 2) {
			document.querySelector('.bozor').style.border = "6 black solid";
			if (locate_2 == 2) {
				document.querySelector('.bozor').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 2) {
				document.querySelector('.bozor').style.border = "8px blue solid";
			} else {
				document.querySelector('.bozor').style.border = "6 black solid";
			}
		} else if (locate_1 == 3) {
			document.querySelector('.etazh').style.border = "6 black solid";
			if (locate_2 == 3) {
				document.querySelector('.etazh').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 3) {
				document.querySelector('.etazh').style.border = "8px blue solid";
			} else {
				document.querySelector('.etazh').style.border = "6 black solid";
			}
		} else if (locate_1 == 4) {
			document.querySelector('.shtraf').style.border = "6 black solid";
			if (locate_2 == 4) {
				document.querySelector('.shtraf').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 4) {
				document.querySelector('.shtraf').style.border = "8px blue solid";
			} else {
				document.querySelector('.shtraf').style.border = "6 black solid";
			}
		} else if (locate_1 == 5) {
			document.querySelector('.rahimi').style.border = "6 black solid";
			if (locate_2 == 5) {
				document.querySelector('.rahimi').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 5) {
				document.querySelector('.rahimi').style.border = "8px blue solid";
			} else {
				document.querySelector('.rahimi').style.border = "6 black solid";
			}
		} else if (locate_1 == 6) {
			document.querySelector('.tuhfa').style.border = "6 black solid";
			if (locate_2 == 6) {
				document.querySelector('.tuhfa').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 6) {
				document.querySelector('.tuhfa').style.border = "8px blue solid";
			} else {
				document.querySelector('.tuhfa').style.border = "6 black solid";
			}
		} else if (locate_1 == 7) {
			document.querySelector('.turma').style.border = "6 black solid";
			if (locate_2 == 7) {
				document.querySelector('.turma').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 7) {
				document.querySelector('.turma').style.border = "8px blue solid";
			} else {
				document.querySelector('.turma').style.border = "6 black solid";
			}
		} else if (locate_1 == 8) {
			document.querySelector('.police').style.border = "6 black solid";
			if (locate_2 == 8) {
				document.querySelector('.police').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 8) {
				document.querySelector('.police').style.border = "8px blue solid";
			} else {
				document.querySelector('.police').style.border = "6 black solid";
			}
		} else if (locate_1 == 9) {
			document.querySelector('.nimi_pul').style.border = "6 black solid";
			if (locate_2 == 9) {
				document.querySelector('.nimi_pul').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 9) {
				document.querySelector('.nimi_pul').style.border = "8px blue solid";
			} else {
				document.querySelector('.nimi_pul').style.border = "6 black solid";
			}
		} else if (locate_1 == 10) {
			document.querySelector('.bolnisa').style.border = "6 black solid";
			if (locate_2 == 10) {
				document.querySelector('.bolnisa').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 10) {
				document.querySelector('.bolnisa').style.border = "8px blue solid";
			} else {
				document.querySelector('.bolnisa').style.border = "6 black solid";
			}
		} else if (locate_1 == 11) {
			document.querySelector('.bankrot').style.border = "6 black solid";
			if (locate_2 == 11) {
				document.querySelector('.bankrot').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 11) {
				document.querySelector('.bankrot').style.border = "8px blue solid";
			} else {
				document.querySelector('.bankrot').style.border = "6 black solid";
			}
		} else if (locate_1 == 12) {
			document.querySelector('.bomba').style.border = "6 black solid";
			if (locate_2 == 12) {
				document.querySelector('.bomba').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 12) {
				document.querySelector('.bomba').style.border = "8px blue solid";
			} else {
				document.querySelector('.bomba').style.border = "6 black solid";
			}
		} else if (locate_1 == 13) {
			document.querySelector('.etazh_2').style.border = "6 black solid";
			if (locate_2 == 13) {
				document.querySelector('.etazh_2').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 13) {
				document.querySelector('.etazh_2').style.border = "8px blue solid";
			} else {
				document.querySelector('.etazh_2').style.border = "6 black solid";
			}
		} else if (locate_1 == 14) {
			document.querySelector('.avtomat').style.border = "6 black solid";
			if (locate_2 == 14) {
				document.querySelector('.avtomat').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 14) {
				document.querySelector('.avtomat').style.border = "8px blue solid";
			} else {
				document.querySelector('.avtomat').style.border = "6 black solid";
			}
		} else if (locate_1 == 15) {
			document.querySelector('.bomba_2').style.border = "6 black solid";
			if (locate_2 == 15) {
				document.querySelector('.bomba_2').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 15) {
				document.querySelector('.bomba_2').style.border = "8px blue solid";
			} else {
				document.querySelector('.bomba_2').style.border = "6 black solid";
			}
		} else if (locate_1 == 16) {
			document.querySelector('.mersedes').style.border = "6 black solid";
			if (locate_2 == 16) {
				document.querySelector('.mersedes').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 16) {
				document.querySelector('.mersedes').style.border = "8px blue solid";
			} else {
				document.querySelector('.mersedes').style.border = "6 black solid";
			}
		} else if (locate_1 == 17) {
			document.querySelector('.lotoreya').style.border = "6 black solid";
			if (locate_2 == 17) {
				document.querySelector('.lotoreya').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 17) {
				document.querySelector('.lotoreya').style.border = "8px blue solid";
			} else {
				document.querySelector('.lotoreya').style.border = "6 black solid";
			}
		} else if (locate_1 == 18) {
			document.querySelector('.najot').style.border = "6 black solid";
			if (locate_2 == 18) {
				document.querySelector('.najot').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 18) {
				document.querySelector('.najot').style.border = "8px blue solid";
			} else {
				document.querySelector('.najot').style.border = "6 black solid";
			}
		} else if (locate_1 == 19) {
			document.querySelector('.bank').style.border = "6 black solid";
			if (locate_2 == 19) {
				document.querySelector('.bank').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 19) {
				document.querySelector('.bank').style.border = "8px blue solid";
			} else {
				document.querySelector('.bank').style.border = "6 black solid";
			}
		} else if (locate_1 == 20) {
			document.querySelector('.two_x').style.border = "6 black solid";
			if (locate_2 == 20) {
				document.querySelector('.two_x').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 20) {
				document.querySelector('.two_x').style.border = "8px blue solid";
			} else {
				document.querySelector('.two_x').style.border = "6 black solid";
			}
		} else if (locate_1 == 21) {
			document.querySelector('.bashkun').style.border = "6 black solid";
			if (locate_2 == 21) {
				document.querySelector('.bashkun').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 21) {
				document.querySelector('.bashkun').style.border = "8px blue solid";
			} else {
				document.querySelector('.bashkun').style.border = "6 black solid";
			}
		} else if (locate_1 == 22) {
			document.querySelector('.restoran').style.border = "6 black solid";
			if (locate_2 == 22) {
				document.querySelector('.restoran').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 22) {
				document.querySelector('.restoran').style.border = "8px blue solid";
			} else {
				document.querySelector('.restoran').style.border = "6 black solid";
			}
		} else if (locate_1 == 23) {
			document.querySelector('.xona').style.border = "6 black solid";
			if (locate_2 == 23) {
				document.querySelector('.xona').style.border = "8px #2bf52b solid";
			} else if (locate_3 == 23) {
				document.querySelector('.xona').style.border = "8px blue solid";
			} else {
				document.querySelector('.xona').style.border = "6 black solid";
			}
		}

		locate_1 += rand;
		turn_1 = 'off';
		turn_2 = 'on';

		if (locate_1 > 23) {
			money1 += 1500;
			document.querySelector(.'money1').textContent = money1;

			var f_rest = locate_1 - 23;

			locate_1 = 0;

			locate_1 = f_rest;

		}

		
		if (locate_1 == 1) {
			document.querySelector('.bapesh').style.border = "8px red solid";
		} else if (locate_1 == 2) {
			document.querySelector('.bozor').style.border = "8px red solid";
		} else if (locate_1 == 3) {
			document.querySelector('.etazh').style.border = "8px red solid";
		} else if (locate_1 == 4) {
			document.querySelector('.shtraf').style.border = "8px red solid";
		} else if (locate_1 == 5) {
			document.querySelector('.rahimi').style.border = "8px red solid";
		} else if (locate_1 == 6) {
			document.querySelector('.tuhfa').style.border = "8px red solid";
		} else if (locate_1 == 7) {
			document.querySelector('.turma').style.border = "8px red solid";
		} else if (locate_1 == 8) {
			document.querySelector('.police').style.border = "8px red solid";
		} else if (locate_1 == 9) {
			document.querySelector('.nimi_pul').style.border = "8px red solid";
		} else if (locate_1 == 10) {
			document.querySelector('.bolnisa').style.border = "8px red solid";
		} else if (locate_1 == 11) {
			document.querySelector('.bankrot').style.border = "8px red solid";
		} else if (locate_1 == 12) {
			document.querySelector('.bomba').style.border = "8px red solid";
		} else if (locate_1 == 13) {
			document.querySelector('.etazh_2').style.border = "8px red solid";
		} else if (locate_1 == 14) {
			document.querySelector('.avtomat').style.border = "8px red solid";
		} else if (locate_1 == 15) {
			document.querySelector('.bomba_2').style.border = "8px red solid";
		} else if (locate_1 == 16) {
			document.querySelector('.mersedes').style.border = "8px red solid";
		} else if (locate_1 == 17) {
			document.querySelector('.lotoreya').style.border = "8px red solid";
		} else if (locate_1 == 18) {
			document.querySelector('.najot').style.border = "8px red solid";
		} else if (locate_1 == 19) {
			document.querySelector('.bank').style.border = "8px red solid";
		} else if (locate_1 == 20) {
			document.querySelector('.two_x').style.border = "8px red solid";
		} else if (locate_1 == 21) {
			document.querySelector('.bashkun').style.border = "8px red solid";
		} else if (locate_1 == 22) {
			document.querySelector('.restoran').style.border = "8px red solid";
		} else if (locate_1 == 23) {
			document.querySelector('.xona').style.border = "8px red solid";
		}

	// second turn_________________________________________________________________________________________________________________	

	} else if (turn_2 == 'on') {

		document.getElementById('turn').textContent = "Xodi: Yosinjon";

		if (locate_2 == 1) {
			document.querySelector('.bapesh').style.border = "6px black solid";
		} else if (locate_2 == 2) {
			document.querySelector('.bozor').style.border = "6px black solid";
		} else if (locate_2 == 3) {
			document.querySelector('.etazh').style.border = "6px black solid";
		} else if (locate_2 == 4) {
			document.querySelector('.shtraf').style.border = "6px black solid";
		} else if (locate_2 == 5) {
			document.querySelector('.rahimi').style.border = "6px black solid";
		} else if (locate_2 == 6) {
			document.querySelector('.tuhfa').style.border = "6px black solid";
		} else if (locate_2 == 7) {
			document.querySelector('.turma').style.border = "6px black solid";
		} else if (locate_2 == 8) {
			document.querySelector('.police').style.border = "6px black solid";
		} else if (locate_2 == 9) {
			document.querySelector('.nimi_pul').style.border = "6px black solid";
		} else if (locate_2 == 10) {
			document.querySelector('.bolnisa').style.border = "6px black solid";
		} else if (locate_2 == 11) {
			document.querySelector('.bankrot').style.border = "6px black solid";
		} else if (locate_2 == 12) {
			document.querySelector('.bomba').style.border = "6px black solid";
		} else if (locate_2 == 13) {
			document.querySelector('.etazh_2').style.border = "6px black solid";
		} else if (locate_2 == 14) {
			document.querySelector('.avtomat').style.border = "6px black solid";
		} else if (locate_2 == 15) {
			document.querySelector('.bomba_2').style.border = "6px black solid";
		} else if (locate_2 == 16) {
			document.querySelector('.mersedes').style.border = "6px black solid";
		} else if (locate_2 == 17) {
			document.querySelector('.lotoreya').style.border = "6px black solid";
		} else if (locate_2 == 18) {
			document.querySelector('.najot').style.border = "6px black solid";
		} else if (locate_2 == 19) {
			document.querySelector('.bank').style.border = "6px black solid";
		} else if (locate_2 == 20) {
			document.querySelector('.two_x').style.border = "6px black solid";
		} else if (locate_2 == 21) {
			document.querySelector('.bashkun').style.border = "6px black solid";
		} else if (locate_2 == 22) {
			document.querySelector('.restoran').style.border = "6px black solid";
		} else if (locate_2 == 23) {
			document.querySelector('.xona').style.border = "6px black solid";
		}


		locate_2 += rand;
		turn_2 = 'off';
		turn_3 = 'on';

		if (locate_2 > 23) {
			var s_rest = locate_2 - 23; 
			locate_2 = 0;

			locate_2 = s_rest;
		}

		
		
		if (locate_2 == 1) {
			document.querySelector('.bapesh').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 2) {
			document.querySelector('.bozor').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 3) {
			document.querySelector('.etazh').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 4) {
			document.querySelector('.shtraf').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 5) {
			document.querySelector('.rahimi').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 6) {
			document.querySelector('.tuhfa').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 7) {
			document.querySelector('.turma').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 8) {
			document.querySelector('.police').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 9) {
			document.querySelector('.nimi_pul').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 10) {
			document.querySelector('.bolnisa').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 11) {
			document.querySelector('.bankrot').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 12) {
			document.querySelector('.bomba').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 13) {
			document.querySelector('.etazh_2').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 14) {
			document.querySelector('.avtomat').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 15) {
			document.querySelector('.bomba_2').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 16) {
			document.querySelector('.mersedes').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 17) {
			document.querySelector('.lotoreya').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 18) {
			document.querySelector('.najot').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 19) {
			document.querySelector('.bank').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 20) {
			document.querySelector('.two_x').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 21) {
			document.querySelector('.bashkun').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 22) {
			document.querySelector('.restoran').style.border = "8px #2bf52b solid";
		} else if (locate_2 == 23) {
			document.querySelector('.xona').style.border = "8px #2bf52b solid";
		}
	//  third turn_________________________________________________________________________________________________________________	

	} else if (turn_3 == 'on') {

		document.getElementById('turn').textContent = "Xodi: Abubakr";


		if (locate_3 == 1) {
			document.querySelector('.bapesh').style.border = "6px black solid";
		} else if (locate_3 == 2) {
			document.querySelector('.bozor').style.border = "6px black solid";
		} else if (locate_3 == 3) {
			document.querySelector('.etazh').style.border = "6px black solid";
		} else if (locate_3 == 4) {
			document.querySelector('.shtraf').style.border = "6px black solid";
		} else if (locate_3 == 5) {
			document.querySelector('.rahimi').style.border = "6px black solid";
		} else if (locate_3 == 6) {
			document.querySelector('.tuhfa').style.border = "6px black solid";
		} else if (locate_3 == 7) {
			document.querySelector('.turma').style.border = "6px black solid";
		} else if (locate_3 == 8) {
			document.querySelector('.police').style.border = "6px black solid";
		} else if (locate_3 == 9) {
			document.querySelector('.nimi_pul').style.border = "6px black solid";
		} else if (locate_3 == 10) {
			document.querySelector('.bolnisa').style.border = "6px black solid";
		} else if (locate_3 == 11) {
			document.querySelector('.bankrot').style.border = "6px black solid";
		} else if (locate_3 == 12) {
			document.querySelector('.bomba').style.border = "6px black solid";
		} else if (locate_3 == 13) {
			document.querySelector('.etazh_2').style.border = "6px black solid";
		} else if (locate_3 == 14) {
			document.querySelector('.avtomat').style.border = "6px black solid";
		} else if (locate_3 == 15) {
			document.querySelector('.bomba_2').style.border = "6px black solid";
		} else if (locate_3 == 16) {
			document.querySelector('.mersedes').style.border = "6px black solid";
		} else if (locate_3 == 17) {
			document.querySelector('.lotoreya').style.border = "6px black solid";
		} else if (locate_3 == 18) {
			document.querySelector('.najot').style.border = "6px black solid";
		} else if (locate_3 == 19) {
			document.querySelector('.bank').style.border = "6px black solid";
		} else if (locate_3 == 20) {
			document.querySelector('.two_x').style.border = "6px black solid";
		} else if (locate_3 == 21) {
			document.querySelector('.bashkun').style.border = "6px black solid";
		} else if (locate_3 == 22) {
			document.querySelector('.restoran').style.border = "6px black solid";
		} else if (locate_3 == 23) {
			document.querySelector('.xona').style.border = "6px black solid";
		}


		locate_3 += rand;
		turn_1 = 'on';
		turn_2 = 'off';
		turn_3 = 'off';

		if (locate_3 > 23) {
			var t_rest = locate_3 - 23; 
			locate_3 = 0;

			locate_3 = t_rest;
		}


		

		if (locate_3 == 1) {
			document.querySelector('.bapesh').style.border = "8px blue solid";
		} else if (locate_3 == 2) {
			document.querySelector('.bozor').style.border = "8px blue solid";
		} else if (locate_3 == 3) {
			document.querySelector('.etazh').style.border = "8px blue solid";
		} else if (locate_3 == 4) {
			document.querySelector('.shtraf').style.border = "8px blue solid";
		} else if (locate_3 == 5) {
			document.querySelector('.rahimi').style.border = "8px blue solid";
		} else if (locate_3 == 6) {
			document.querySelector('.tuhfa').style.border = "8px blue solid";
		} else if (locate_3 == 7) {
			document.querySelector('.turma').style.border = "8px blue solid";
		} else if (locate_3 == 8) {
			document.querySelector('.police').style.border = "8px blue solid";
		} else if (locate_3 == 9) {
			document.querySelector('.nimi_pul').style.border = "8px blue solid";
		} else if (locate_3 == 10) {
			document.querySelector('.bolnisa').style.border = "8px blue solid";
		} else if (locate_3 == 11) {
			document.querySelector('.bankrot').style.border = "8px blue solid";
		} else if (locate_3 == 12) {
			document.querySelector('.bomba').style.border = "8px blue solid";
		} else if (locate_3 == 13) {
			document.querySelector('.etazh_2').style.border = "8px blue solid";
		} else if (locate_3 == 14) {
			document.querySelector('.avtomat').style.border = "8px blue solid";
		} else if (locate_3 == 15) {
			document.querySelector('.bomba_2').style.border = "8px blue solid";
		} else if (locate_3 == 16) {
			document.querySelector('.mersedes').style.border = "8px blue solid";
		} else if (locate_3 == 17) {
			document.querySelector('.lotoreya').style.border = "8px blue solid";
		} else if (locate_3 == 18) {
			document.querySelector('.najot').style.border = "8px blue solid";
		} else if (locate_3 == 19) {
			document.querySelector('.bank').style.border = "8px blue solid";
		} else if (locate_3 == 20) {
			document.querySelector('.two_x').style.border = "8px blue solid";
		} else if (locate_3 == 21) {
			document.querySelector('.bashkun').style.border = "8px blue solid";
		} else if (locate_3 == 22) {
			document.querySelector('.restoran').style.border = "8px blue solid";
		} else if (locate_3 == 23) {
			document.querySelector('.xona').style.border = "8px blue solid";
		}
	}
}







