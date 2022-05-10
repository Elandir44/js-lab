//bok front - Cześć jak masz na imię?

window.onload = function() { //letsIntroduce() {

    const poleTekstowe = document.getElementById("formIntroduce").myYoursName;
   /* var info = document.getElementById("info");*/
    //poleTekstowe.value = "aaaa";


    poleTekstowe.onkeydown = function (e) {
        const wcisnietyKlawisz = String.fromCharCode(e.which);

        info.innerHTML = "Wcisnąłeś klawisz: " + wcisnietyKlawisz;
    };


//bok back Gra w zgadywanie
    var myTextGame = document.getElementById("formPlay").myTextGame;

    var info = document.getElementById("infoPlay");
    //myYoursName.value = "asa";

    const tablicaZnakow = [8, "Backspace", 9, "Tab", 13, "Enter", 16, "Shift", 17, "Ctrl", 18, "Alt", 19, "Pause/Break", 20, "Caps Lock", 32, "Spacja", 33, "Page UP", 34, "Page Down", 35, "End", 36, "Home", 37, "Strzałka w lewo", 38, "Strzałka w górę", 39, "Strzałka w prawo", 40, "Strzałka w dół", 45, "Insert", 46, "Delete", 91, "Znaczek Windows", 93, "Menu", 96, "0 na klawiaturze numerycznej", 97, "1 na klawiaturze numerycznej", 98, "2 na klawiaturze numerycznej", 99, "3 na klawiaturze numerycznej", 100, "4 na klawiaturze numerycznej", 101, "5 na klawiaturze numerycznej", 102, "6 na klawiaturze numerycznej", 103, "7 na klawiaturze numerycznej", 104, "8 na klawiaturze numerycznej", 105, "9 na klawiaturze numerycznej", 106, "* na klawiaturze numerycznej", 107, "+ na klawiaturze numerycznej", 109, "- na klawiaturze numerycznej", 110, ", na klawiaturze numerycznej", 111, ". na klawiaturze numerycznej", 144, "Num Lock", 145, "Scroll Lock", 173, "-", 188, ",", 190, ".", 191, "/", 192, "` ~"]; /*, 219, "'['", 220, "'\'", 221, "']'", 222, '"'];*/

    var dlugoscTablicy = tablicaZnakow.length;

    myTextGame.onkeydown = function (e) {

        var kodKey = e.which;

        for (var i = 0; i < dlugoscTablicy; i++){

            var kod = tablicaZnakow[i];

            if (kodKey == kod){
                info.innerHTML = tablicaZnakow [i+1];
                break
            }
            info.innerHTML = String.fromCharCode(e.which);
        }

    };

}

function wyczysc() {

    var myTextGame = document.getElementById("formPlay").myTextGame;
    var info = document.getElementById("infoPlay");

    myTextGame.value = "";
    info.innerHTML = "";

}

//bok left

//bok right

//bok top

//bok bottom

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

