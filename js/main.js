//bok front - Cześć jak masz na imię?

function letsIntroduce() {



}



////bok back Gra w zgadywanie
//
//function letsPlay() {
//
//}
//
////bok left
//
////bok right
//
////bok top
//
////bok bottom
//
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

