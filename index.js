//====================== Rewrote to use 'this' and 'bind' =============================

let wackAMole = {
  score: 0,
  eachTime: 0,
  randomOdd: [1, 3, 5, 7, 9, 11, 13, 15, 17],
  showMole: function() {
    let moleHoles = document.getElementById('whack-a-mole').childNodes;
    let randomOddIndex = Math.floor(Math.random() * 9);
    let random = this.randomOdd[randomOddIndex];
    moleHoles[random].classList.toggle('mole');
    moleHoles[random].classList.toggle('hole');

    function hideMole() {
      moleHoles[random].classList.toggle('mole');
      moleHoles[random].classList.toggle('hole');
    }
    setTimeout(hideMole, 1000);
  },
  repeatShowHideMole: function() {
    this.showMole();
    if (this.eachTime < 20) {
      setTimeout(this.repeatShowHideMole.bind(wackAMole), 1000); //needed to bing wackAMole to this.repeatShowHideMole
    }

    this.eachTime++;
  },
};

wackAMole.repeatShowHideMole();

document
  .getElementById('whack-a-mole')
  .addEventListener('click', function(event) {
    if (event.target.classList[0] === 'mole') {
      wackAMole.score++;
      document.getElementById('score').innerHTML = wackAMole.score;
    }
  });

//====================== First Attempt =============================

// let score = 0;
// let eachTime = 0;
// let randomOdd;

// function showMole () {
//   let moleHoles = document.getElementById('whack-a-mole').childNodes;
//   let randomOddIndex = Math.floor( Math.random() * 9 )
//   randomOdd = [1, 3, 5, 7, 9, 11, 13, 15, 17][randomOddIndex];
//   moleHoles[randomOdd].classList.toggle("mole");
//   moleHoles[randomOdd].classList.toggle("hole");

//   function hideMole () {
//     moleHoles[randomOdd].classList.toggle("mole");
//     moleHoles[randomOdd].classList.toggle("hole");
//   }

//   setTimeout(hideMole, 1000);

// }

// function repeatShowHideMole () {

//   showMole ()

//   if (eachTime < 20) {
//     setTimeout(repeatShowHideMole, 1000);
//   }
//     eachTime++;

// }

// repeatShowHideMole ()

// document.getElementById('whack-a-mole').addEventListener('click', function(event) {
//   if (event.target.classList[0] === 'mole') {
//     score++;
//     document.getElementById('score').innerHTML = score;
//   }
// })
