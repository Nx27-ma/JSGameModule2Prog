'use strict;'
const canvas = document.getElementById("GameCanvas");
console.log(canvas);
let g = canvas.getContext("2d");
g.font = "30px Arial";
const Madman = document.getElementById("Madman");
let MadmanHitBox = [134, 162];       //pixel size of your image
let BoundingBox = [canvas.width, canvas.height];
class player {

    constructor(enemyHitBox) {
        console.log("player been made")
        this.enemyHitBox = enemyHitBox;
        this.playerPosX = canvas.width / 2;
        this.playerPosY = canvas.height / 2;
        this.Move = {
            Up: false,
            Down: false,
            Right: false,
            Left: false,
        }
        document.addEventListener('mousedown', (event) => {
            let mouseX = event.clientX - canvas.getBoundingClientRect().left;
            let mouseY = event.clientY - canvas.getBoundingClientRect().top;
            this.isClicked = event.button;                                  //event.button returns a number 0 for primary 2 for right mouse button;
            this.mousePos = [mouseX, mouseY];
        });
        document.addEventListener("keydown", (event) => {
            if (event.key == "w" || event.key == "W") {
                this.Move.Up = true;
            } else if (event.key == "s" || event.key == "S") {
                this.Move.Down = true;
            } else if (event.key == "a" || event.key == "A") {
                this.Move.Left = true;
            } else if (event.key == "d" || event.key == "D") {
                this.Move.Right = true;
            }
        });
        document.addEventListener("keyup", (event) => {
            if (event.key == "w" || event.key == "W") {
                this.Move.Up = false;
            } else if (event.key == "s" || event.key == "S") {
                this.Move.Down = false;
            } else if (event.key == "a" || event.key == "A") {
                this.Move.Left = false;
            } else if (event.key == "d" || event.key == "D") {
                this.Move.Right = false;
            }
        });
    }

    movement() {
        g.clearRect(0, 0, canvas.width, canvas.height);
        if (this.Move.Up == true) {
            this.playerPosY--;
        } else if (this.Move.Down == true) {
            this.playerPosY++;
        } else if (this.Move.Right == true) {
            this.playerPosX++;
        } else if (this.Move.Left == true) {
            this.playerPosX--;
        }
        g.drawImage(Madman, this.playerPosX, this.playerPosY);

        let playerPos = [this.playerPosX, this.playerPosY];                 //nog niet aan enemy doorgegeven;
    }

    enemyHitBoxChecker() {                                                  //gpt is beter in dit soort dingen (mn brein werkte niet alr??)
        return this.mousePos[0] >= enemyPosX && this.mousePos[0] <= rect.x + enemyHitBox[0] &&                 
            this.mousePos[1] >= enemyPosY && this.mousePos[1] <= enemyPosY + enemyHitBox[1];
    }

    shooting() {
        this.bullets;
        console.log("Mouse Location: " + this.mousePos);
        console.log("Clicked?: " + this.isClicked);
        if (this.isClicked === 0 && this.enemyHitBoxChecker() == true) {

        }
    }

    invertory() {
        let hp;


    }

}


class enemy {

    constructor(Player, hitBox, boundingBox) {

        Player.
            console.log("playerPos: " + this.playerPos);
        console.log("hitBox status: " + hitBox)
        console.log("boundingBox status: " + boundingBox);

        let calc, tempLoc;
        this.enemyPos = [];
        for (let i = 0; i < 2; i++) {
            calc = Math.floor(Math.random() * 2);
            console.log(calc);

            if (calc === 0 && i === 0) {
                tempLoc = Math.floor(Math.random() * boundingBox[0] + boundingBox[0]);
                this.enemyPos[0] = -tempLoc - hitBox[0] + boundingBox[0];
            }
            else if (calc === 1 && i === 0) {
                tempLoc = Math.floor(Math.random() * boundingBox[0] + boundingBox[0]);
                this.enemyPos[0] = tempLoc + hitBox[0];
            }
            else if (calc === 0 && i === 1) {
                tempLoc = Math.floor(Math.random() * boundingBox[1] + boundingBox[1]);
                this.enemyPos[1] = -tempLoc - hitBox[1] + boundingBox[1];
            }
            else if (calc === 1 && i === 1) {
                tempLoc = Math.floor(Math.random() * boundingBox[1] + boundingBox[1]);
                this.enemyPos[1] = tempLoc + hitBox[1];
            }
        }
        console.log(this.enemyPos);

        console.log("EnemyPos in randomEnemyPos: " + this.enemyPos);
    }

    moveToPlayer() {
        let changeX, changeY, speed = 400;
        console.log('im being run')
        if (this.enemyPos[0] != this.playerPos[0] && this.enemyPos[1] != this.playerPos[1] /*&& !dead*/) {

            changeX = Math.floor((enemyPos[0] + playerPos[0]) / speed);
            changeY = Math.floor((enemyPos[1] + playerPos[1]) / speed);
            enemyPos[0] = enemyPos[0] - changeX;
            enemyPos[1] = enemyPos[1] - changeY;
            this.damage();
        }
    }

    drawEnemy(enemyPos) {
        g.drawImage(Madman, enemyPos[0], enemyPos[1]);
    }

    damage() {
        this.hp = 2;
        if (this.hp > 0) {
            this.drawEnemy(enemyPos);
        }
        this.invertory();
    }

    invertory() {
        this.hp
    }
}

let playerpostemp = [100, 300];

let pleya = new player();
function spawner() {
    let enemyAmount = Math.floor(Math.random() * 20);
    console.log("EnemyAmount: " + enemyAmount)
    let enemies = [];                           //how to get this out
    for (let i = 0; i < enemyAmount; i++) {
        enemies.push(new enemy(player, MadmanHitBox, BoundingBox));
    }
}
/*spawner();*/

Loop();
function Loop(enemies) {

    console.log("k doe uberhaupt wat")
    pleya.movement();
    pleya.shooting();

    //for (let i = 0; i < enemies.lenght; i++) {
    //    enemies[i].moveToPlayer();
    //}

    requestAnimationFrame(Loop);
}



