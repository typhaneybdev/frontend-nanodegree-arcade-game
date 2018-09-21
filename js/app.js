//checking files


// Enemies our player must avoid
//var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  //  this.sprite = 'images/enemy-bug.png';
//};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
//};

// Draw the enemy on the screen, required method for game
//Enemy.prototype.render = function() {
  //  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
//};

//walkthrough https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000 w/rodrick
class Entity { //defines class for players and enemys
    constructor() { //initializes objects within class
      this.sprite = 'images/'; //targets image folder
      this.x = 203;
      this.y = 420;
    }

    render() { //renders content
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
}

class Player extends Entity { //defines player class
    constructor() {
        super(); //inherits Entity methods
        this.sprite += 'char-boy.png';
        Player.prototype.update = function() {
        };
    }
    handleInput(input) { //update player x & Y coordinates base on input
      //https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/ 7/10/18
      switch(input) {
          case 'left':
              this.x -= 20;
              break;
          case 'up':
              this.y -= 20;
              break;
          case 'right':
              this.x += 20;
              break;
          case 'down':
              this.y += 20;
              break;

      }
    }
}

// This class requires an update(), render() and
// a handleInput() method.
class Enemy extends Entity {
    constructor(x, y) {
        super();
        this.sprite += 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        Enemy.prototype.update = function() {
        };
    }


}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player(); //declares player

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
