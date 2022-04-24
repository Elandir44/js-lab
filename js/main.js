
function animacja() {
const kostka = document.getElementById('kostka');

const randomCoordinate = Math.random()*100;

const coordinate = randomCoordinate > 50 ? 'X' : 'Y';

const randomWaye = Math.random()*100;

const whichWay  = randomWaye > 50 ? '-' : '+';

const wKtoraStrone = 'rotate' + coordinate + '(' + whichWay + '90deg)';

const obracanieKostki = new KeyframeEffect(
    kostka, // element to animate

     [
       { transform: wKtoraStrone}
     ],
     { duration: 3000, fill: 'forwards' } // keyframe options
   );

 const animacjaKostki = new Animation(obracanieKostki, document.timeline);

 animacjaKostki.play();
  }
