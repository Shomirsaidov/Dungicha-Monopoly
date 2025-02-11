

var main1 = function() {

    if (locate_1 == 1) {
        document.querySelector('.bapesh').style.borderColor = "red";
        if (locate_2 == 1 ) {
            document.querySelector('.bapesh').style.borderTopColor = "8px #2bf52b solid";
        } else if (locate_3 == 1) {
            document.querySelector('.bapesh').style.borderTopColor = "blue"
        }
        if (locate_2 == 1 && locate_3 = 1) {
            document.querySelector('.bapesh').style.borderTopColor = "#2bf52b";
            document.querySelector('.bapesh').style.borderBottomColor = "#2bf52b";
        }

    } else if (locate_1 == 2) {
        document.querySelector('.bozor').style.borderColor = "red";
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
            document.querySelector('.bozor').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 2) {
            document.querySelector('.bozor').style.borderTopColor = "blue"
        }

    } else if (locate_1 == 3) {
        document.querySelector('.etazh').style.borderColor = "red";
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
            document.querySelector('.etazh').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 3) {
            document.querySelector('.etazh').style.borderTopColor = "blue"
        }

    } else if (locate_1 == 4) {
        document.querySelector('.shtraf').style.borderColor = "red";
        if (locate_2 == 4 ) {
            document.querySelector('.shtraf').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 4) {
            document.querySelector('.shtraf').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 5) {
        document.querySelector('.rahimi').style.borderColor = "red";
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
            document.querySelector('.rahimi').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 5) {
            document.querySelector('.rahimi').style.borderTopColor = "blue"
        }

    } else if (locate_1 == 6) {
        document.querySelector('.tuhfa').style.borderColor = "red";
        if (locate_2 == 6 ) {
            document.querySelector('.tuhfa').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 6) {
            document.querySelector('.tuhfa').style.borderTopColor = "blue"
        }

    } else if (locate_1 == 7) {
        document.querySelector('.turma').style.borderColor = "red";
        
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
            document.querySelector('.turma').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 7) {
            document.querySelector('.turma').style.borderTopColor = "blue"
        }

    } else if (locate_1 == 8) {
        document.querySelector('.police').style.borderColor = "red";
        if (locate_2 == 8 ) {
            document.querySelector('.police').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 8) {
            document.querySelector('.police').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 9) {
        document.querySelector('.nimi_pul').style.borderColor = "red";
        if (locate_2 == 9 ) {
            document.querySelector('.nimi_pul').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 9) {
            document.querySelector('.nimi_pul').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 10) {
        document.querySelector('.bolnisa').style.borderColor = "red";
        if (locate_2 == 10 ) {
            document.querySelector('.bolnisa').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 10) {
            document.querySelector('.bolnisa').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 11) {
        document.querySelector('.bankrot').style.borderColor = "red";
        if (locate_2 == 11 ) {
            document.querySelector('.bankrot').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 11) {
            document.querySelector('.bankrot').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 12) {
        document.querySelector('.bomba').style.borderColor = "red";
        

        if (locate_2 == 12 ) {
            document.querySelector('.bomba').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 12) {
            document.querySelector('.bomba').style.borderTopColor = "blue"
        }

        bomba1 = 'on';
        document.querySelector('.turma_amn').style.display = 'block';
        document.querySelector('.turma_amn_txt').textContent = 'Шумо акнун бомба доред , метавонед уро ба ягон кас партоед!';
        document.querySelector('.turma_amn').style.background = 'skyblue';
        document.querySelector('#strike').style.display = 'block';

        document.documentElement.requestFullscreen();		

    } else if (locate_1 == 13) {
        document.querySelector('.etazh_2').style.borderColor = "red";
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
            document.querySelector('.etazh_2').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 13) {
            document.querySelector('.etazh_2').style.borderTopColor = "blue"
        }

    } else if (locate_1 == 14) {
        document.querySelector('.avtomat').style.borderColor = "red";
        if (locate_2 == 14 ) {
            document.querySelector('.avtomat').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 14) {
            document.querySelector('.avtomat').style.borderTopColor = "blue"
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
        document.querySelector('.bomba_2').style.borderColor = "red";
        if (locate_2 == 15 ) {
            document.querySelector('.bomba_2').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 15) {
            document.querySelector('.bomba_2').style.borderTopColor = "blue"
        }

        

    } else if (locate_1 == 16) {
        document.querySelector('.mersedes').style.borderColor = "red";

        if (mersedes.manage == '1') {
        document.getElementById('moshin').textContent = 'Бепул рафтан';
        }
        document.getElementById('moshin').style.display = 'block';
        if (mersedes.manage == '2' || mersedes.manage == '3') {
            document.getElementById('moshin').style.display = 'none';
        }


        if (locate_2 == 16 ) {
            document.querySelector('.mersedes').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 16) {
            document.querySelector('.mersedes').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 17) {
        document.querySelector('.lotoreya').style.borderColor = "red";
        if (locate_2 == 17 ) {
            document.querySelector('.lotoreya').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 17) {
            document.querySelector('.lotoreya').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 18) {
        document.querySelector('.najot').style.borderColor = "red";
        if (locate_2 == 18 ) {
            document.querySelector('.najot').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 18) {
            document.querySelector('.najot').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 19) {
        document.querySelector('.bank').style.borderColor = "red";
        if (locate_2 == 19 ) {
            document.querySelector('.bank').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 19) {
            document.querySelector('.bank').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 20) {
        document.querySelector('.two_x').style.borderColor = "red";
        if (locate_2 == 20 ) {
            document.querySelector('.two_x').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 20) {
            document.querySelector('.two_x').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 21) {
        document.querySelector('.bashkun').style.borderColor = "red";
        if (locate_2 == 21 ) {
            document.querySelector('.bashkun').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 21) {
            document.querySelector('.bashkun').style.borderTopColor = "blue"
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
        document.querySelector('.restoran').style.borderColor = "red";
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
            document.querySelector('.restoran').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 22) {
            document.querySelector('.restoran').style.borderTopColor = "blue"
        }
    } else if (locate_1 == 23) {
        document.querySelector('.xona').style.borderColor = "red";
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
            document.querySelector('.xona').style.borderTopColor = "#2bf52b";
        } else if (locate_3 == 23) {
            document.querySelector('.xona').style.borderTopColor = "blue"
        }

        


    }

}

export {main1};