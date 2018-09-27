'use strict';


//walkthrough https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000 w/rodrick
class Entity { //defines class for players and enemys
    constructor() { //initializes objects within class
      this.sprite = 'images/'; //targets image folder
      this.x = 2;
      this.y = 5;
    }

    update(dt) { //set canvas boundary for enemies and players
      this.isOutofBoundsX = this.x > 5;
      this.isOutofBoundsy = this.y < 1;
    }

    render() { //renders content
      ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }
}

class Player extends Entity { //defines player class
    constructor() {
        super(); //inherits Entity methods
        this.sprite += 'char-princess-girl.png';

    }

    handleInput(input) { // sets player key stroke block movement and boundary
        switch (input) {
            case 'left':
                this.x = this.x > 0 ? this.x - 1 : this.x;
                break;
            case 'up':
                this.y = this.y > 0 ? this.y - 1 : this.y;
                break;
            case 'right':
                this.x = this.x < 4 ? this.x + 1 : this.x;
                break;
            case 'down':
                this.y = this.y < 5 ? this.y + 1 : this.y;
                break;
            default:
                break;
        }

    }
}

class Enemy extends Entity { // defines enemy class
    constructor(x, y) {
        super();// //inherits Entity methods
        this.sprite += 'enemy-bug.png';
        this.x = x;
        this.y = y;
    }

    update(dt) {
        super.update(); //inherits update from entity to set boundary
        if (this.isOutofBoundsX) {
              this.x = -1; //enemy moves off board
        }
        else {
          this.x += dt;
        }
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(){
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player(); //declares player
const allEnemies = [...Array(3)].map((_,i)=> new Enemy(0,i+1)); //places enemies in an array
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
