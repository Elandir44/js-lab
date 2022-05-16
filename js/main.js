// noinspection LoopStatementThatDoesntLoopJS

window.onload = function() {

//bok back Gra w zgadywanie
    let myTextGame = document.getElementById("formPlay").myTextGame;

    let info = document.getElementById("infoPlay");

    const tablicaZnakow = [8, "Backspace", 9, "Tab", 13, "Enter", 16, "Shift", 17, "Ctrl", 18, "Alt", 19, "Pause/Break", 20, "Caps Lock", 32, "Spacja", 33, "Page UP", 34, "Page Down", 35, "End", 36, "Home", 37, "Strzałka w lewo", 38, "Strzałka w górę", 39, "Strzałka w prawo", 40, "Strzałka w dół", 45, "Insert", 46, "Delete", 91, "Znaczek Windows", 93, "Menu", 96, "0 na klawiaturze numerycznej", 97, "1 na klawiaturze numerycznej", 98, "2 na klawiaturze numerycznej", 99, "3 na klawiaturze numerycznej", 100, "4 na klawiaturze numerycznej", 101, "5 na klawiaturze numerycznej", 102, "6 na klawiaturze numerycznej", 103, "7 na klawiaturze numerycznej", 104, "8 na klawiaturze numerycznej", 105, "9 na klawiaturze numerycznej", 106, "* na klawiaturze numerycznej", 107, "+ na klawiaturze numerycznej", 109, "- na klawiaturze numerycznej", 110, ", na klawiaturze numerycznej", 111, ". na klawiaturze numerycznej", 144, "Num Lock", 145, "Scroll Lock", 173, "-", 188, ",", 190, ".", 191, "/", 192, "` ~"]; /*, 219, "'['", 220, "'\'", 221, "']'", 222, '"'];*/

    const dlugoscTablicy = tablicaZnakow.length;

    myTextGame.onkeydown = function (e) {

        let kodKey = e.which;

        for (let i = 0; i < dlugoscTablicy; i++){

            let kod = tablicaZnakow[i];

            if (kodKey === kod){
                info.innerHTML = tablicaZnakow [i+1];
                break
            }
            info.innerHTML = String.fromCharCode(e.which);
        }

    };

};

function wyczysc() {

    let myTextGame = document.getElementById("formPlay").myTextGame;
    let info = document.getElementById("infoPlay");

    let firstSign = myTextGame.value.substring(0, 1);

    if (firstSign == "/") {

        komendy(info, myTextGame);

    } else {

        myTextGame.value = "";
        info.innerHTML = "";
    }

}

//bok front - Cześć jak masz na imię?

function letsIntroduce () {
    let myYoursName = document.getElementById("formIntroduce").myYoursName;
    let infoIntroduce = document.getElementById("infoIntroduce");

    let guestName = myYoursName.value;
    let firstSign = guestName.substring(0, 1);
    //var firstSign = guestName.charCodeAt(0);
    let nameLenght = guestName.length;

    if (firstSign == "/") {

        komendy(infoIntroduce, myYoursName);

    } else {

    for (let k = 0; k < nameLenght; k++) {

        let nextSign = guestName.substring(k, k + 1);

            if (!isNaN(nextSign * 1)) {

                let wnerw = Math.floor(Math.random() * 100 + 1);

                if (wnerw > 50) {
                    infoIntroduce.innerHTML = 'Kufa cyfra w imieniu? Co ty myślisz, że jesteś jakiś piepszony Henryk III ?!';
                } else {
                    infoIntroduce.innerHTML = 'Cyfra w imieniu? Co ty myślisz, że jesteś jakiś Henryk III ?!';
                }

                break;
            } else {
                if (firstSign == firstSign.toUpperCase()) {
                    infoIntroduce.innerHTML = 'Witaj ' + guestName + ". Jak tam zajęcie z JavaSctipt? ";
                }
                if (firstSign == firstSign.toLowerCase()) {
                    infoIntroduce.innerHTML = 'siemka ' + guestName + "! Co tam mordo?";
                }
            }
        }


    }
}
//bok left


function wymowki () {

const wymowkiPoczatek = ["SŁUCHAJ, PRZYKRO MI ALE", "NO NIE UWIERZYSSZ!", "NIE MOGĘ DZISIAJ, BO", "ODPUSZCZĘ, BO WŁAŚNIE", "WIEM JAK TO BRZMI ALE", "NIE DAM RADY, BO WŁAŚNIE", "STRASZNIE ŻAŁUJĘ, ALE"];

const wymowkiKto = ["KOT SĄSIADA", "MÓJ DYREKTOR", "WICEPREMIER", "ANDRZEJ (WIESZ KTÓRY)", "TWÓJ STARY", "JAKIŚ RUSKI", "TEN ZIOMEK Z 2 PIĘTRA"];

const wymowkiCoZrobil = ["WŁAŚNIE ZAJEBAŁ MI ROWER", "NASRAŁ W PRZEDPOKOJU", "ZARAZIŁ MNIE JAKIMŚ GÓWNEM", "WSKOCZYŁ MI DO STUDNI", "WYPIŁ MI CAŁA WODĘ Z KIBLA", "LATA NAGI PO MOIM TRAWNIKU", "PRZEBRAŁ SIĘ ZA KROWĘ I MUCZY"];

    let myTextWymowki= document.getElementById("formWymowki").myTextWymowki;
    let infoWymowki = document.getElementById("infoWymowki");

    let losPoczatek= Math.floor(Math.random() * 7);
    let losKto= Math.floor(Math.random() * 7);
    let losCoZrobil= Math.floor(Math.random() * 7);

    let poczatek = wymowkiPoczatek[losPoczatek];
    let kto = wymowkiKto[losKto];
    let coZrobil = wymowkiCoZrobil[losCoZrobil];

    infoWymowki.innerHTML = "Oto twoja wymówka: " + poczatek + " " + kto + " " + coZrobil + ".";

}



//bok right

function pisanie (){

    let myTextPisanie = document.getElementById("formPisanie").myTextPisanie;
    let infoPisanie = document.getElementById("infoPisanie");

    var tekst = "NIE MOGĘ DZISIAJ, BO TWÓJ STARY PRZEBRAŁ SIĘ ZA KROWĘ I MUCZY.";

    var i =0;

    var nextLeter = tekst.substring(i, i+1);

    i++

    infoPisanie.innerHTML = infoPisanie.valueOf() + nextLeter;

    setTimeout("pisanie()", 500);



}

//bok top

//bok bottom


function komendy (info, box) {

    const version = "Wersja oprogramowania: v1.2.3"

    if (box.value == "/version") {

        info.innerHTML = version;
    } else if (box.value == "/pogoda kraków" ) {
        info.innerHTML = "W kraków jest 22 stopnie";
    } else if (box.value == "/gra"){
        animacjaBack();
    } else if (box.value == "/generator"){
        animacjaLeft();
    }



}

//animacje oobracania kostki

/*
animacjaFront: X+0 Y+0  Z+0
animacjaRigth: X+0 Y-90 Z+0
animacjaLeft: X+0 Y+90 Z+0
animacjaTop: X-90 Y+0 Z+0
animacjaBottom: X+90 Y+0 Z+0
animacjaBack: X-180 Y+0 Z+180

[0, 0, 0, 0, -90, 0, 0, 90, 0, -90, 0, 0, 90, 0, 0, -180, 0, 180]
*/

function animacja(x, y, z) {
const kostka = document.getElementById('kostka');

const obracanieKostki = new KeyframeEffect(
    kostka, // element to animate

     [
       { transform: x + " " + y + " " + z } // 'rotateX(+90deg) rotateY(+0deg) rotateZ(+0deg)'
     ],
     { duration: 3000, fill: 'forwards' } // keyframe options
   );

 const animacjaKostki = new Animation(obracanieKostki, document.timeline);

 animacjaKostki.play();
  }

function animacjaFront() {

const x = 'rotateX(+0deg)';
const y = 'rotateY(+0deg)';
const z = 'rotateZ(+0deg)';

animacja(x, y, z);
}

function animacjaBack() {
  const x = 'rotateX(180deg)';
  const y = 'rotateY(+0deg)';
  const z = 'rotateZ(+180deg)';

  animacja(x, y, z);
}
function animacjaLeft() {
  const x = 'rotateX(+0deg)';
  const y = 'rotateY(+90deg)';
  const z = 'rotateZ(+0deg)';

  animacja(x, y, z);
}

function animacjaRigth() {

const x = 'rotateX(+0deg)';
const y = 'rotateY(-90deg)';
const z = 'rotateZ(+0deg)';

animacja(x, y, z);
}

function animacjaTop() {
  const x = 'rotateX(-90deg)';
  const y = 'rotateY(+0deg)';
  const z = 'rotateZ(+0deg)';

  animacja(x, y, z);
}

function animacjaBottom() {
  const x = 'rotateX(+90deg)';
  const y = 'rotateY(+0deg)';
  const z = 'rotateZ(+0deg)';

  animacja(x, y, z);
}


