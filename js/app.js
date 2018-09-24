
// Enemies our player must avoid
// Variables applied to each of our instances go here,
// we've provided one for you to get started
// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images
//walkthrough and own logic https://matthewcranford.com/arcade-game-walkthrough-part-5-adding-enemies/ 7/13
function resetPlayer() {
  location.reload(); ////https://developer.mozilla.org/en-US/docs/Web/API/Location/reload reloads game
}

var Enemy = function(x, y, speed) { //position and speed parameters
    this.x = x;
    this.y = y;
    this.step = 101
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.resetPos = -101;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 101 * 4) {
       this.x += this.speed * dt;
    }
    else { //resets enemy position
      this.x = this.resetPos;
    }
    this.checkCollision();
};
//checking for collision based on coordinates
Enemy.prototype.checkCollision = function() {

    if (player.y === this.y && (this.x + this.step > player.x && this.x < player.x + player.step)) {

      resetPlayer();
}
if (player.y === 26) {
  this.y = 0;
  this.x = 0;
  toggleModal();
  win.cancelAnimationFrame(main);
}//check for win
}


  function toggleModal() { // function to toggle modal
  const modal = document.querySelector('.modal_background');
  modal.classList.toggle('hide');
}

toggleModal();
toggleModal();

//button code and styling from my memory game project
const replay = document.querySelector('.modal_btn_replay');
replay.addEventListener('click', function(e) {
  toggleModal();
  resetPlayer();

})



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//walkthrough https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000 w/rodrick
class Entity { //defines class for players and enemys
    constructor() { //initializes objects within class
      this.sprite = 'images/'; //targets image folder
      this.x = 0;
      this.y = 0;
      this.step = 101;
    }

    render() { //renders content
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
}


class Player extends Entity { //defines player class
    constructor() {
        super(); //inherits Entity methods
        this.startx = 101 * 2; //calculates position of player based on square
        this.starty = (83 * 5) + 15;
        this.x = this.startx;
        this.y = this.starty; //positions player at start
        this.sprite += 'char-princess-girl.png';
        Player.prototype.update = function() {
        };
    }
    handleInput(input) { //update player x & Y coordinates based on input
      //https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/ 7/10/18
      //switch statement handles canvas boundary
      switch(input) {
          case 'left':
              if (this.x > 0) {
                  this.x -= 101;
              }
              break;
          case 'up':
              if (this.y > 101) {
              this.y -= 101;
              }
              break;
          case 'right':
              if (this.x < 101 * 4) {
                  this.x += 101;
              }
              break;
          case 'down':
              if (this.y < 101 * 4) {
              this.y += 101;
              }
              break;

      }
    }
}

// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//initiate objects
const player = new Player(); //declares player stores player object in variable
const enemy1 = new Enemy(-101, 26, 60); //declares enemy stores enemy object in variable
const enemy2 = new Enemy(-101, 127, 200);
const enemy3 = new Enemy((-101*2.5), 228, 100);
const allEnemies = []; // array to store enemies
allEnemies.push(enemy1, enemy2, enemy3); //pushes enemies into array

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
