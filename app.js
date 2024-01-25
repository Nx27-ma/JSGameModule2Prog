'use strict;'
import player from "Player.js"
import player from "Enemy.js"
const canvas = document.getElementById("GameCanvas");
console.log(canvas);
let g = canvas.getContext("2d");
g.font = "30px Arial";
const Madman = document.getElementById("Madman");
let MadmanHitBox = [134, 162];       //pixel size of your image
let BoundingBox = [canvas.width, canvas.height];




class bullets {

    constructor(enemyHitBox, ) {
        this.enemyHitBox = enemyHitBox;
    }

    enemyHitBoxChecker() {                                                  //gpt is beter in dit soort dingen (mn brein werkte niet alr??)
        return this.mousePos[0] >= enemyPosX && this.mousePos[0] <= rect.x + enemyHitBox[0] &&
            this.mousePos[1] >= enemyPosY && this.mousePos[1] <= enemyPosY + enemyHitBox[1];
    }
}





class factory {

    nextEnemyId = 0;

    createEnemy() {
            nextEnemyId++;
        return new enemy(pleya, MadmanHitBox, BoundingBox, nextEnemyId);
    }

    spanwer() {
        let enemyPool = [];
        let enemyAmount = Math.floor(Math.random() * 20);
        console.log("EnemyAmount: " + enemyAmount);
        for (let i = 0; i > enemyAmount; i++) {
            var newEnemy = this.createEnemy();
            enemyPool.push(newEnemy);
        }
        return enemyPool;
    }

}

let pleya = new player();
let factoryGO = new factory();
let enemyPool = factoryGO.spanwer();
Loop();
function Loop(enemies) {

    console.log("looping")
    pleya.movement();
    pleya.shooting();

    requestAnimationFrame(Loop);
}



