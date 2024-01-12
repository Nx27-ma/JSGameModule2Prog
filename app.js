const canvas = document.getElementById("GameCanvas");
console.log(canvas);
let g = canvas.getContext("2d");
g.font = "30px Arial";
let playerDead = false;

g.beginPath();

g.moveTo(1, 1);
g.lineTo(1999, 1199);
g.lineTo(175, 100);
g.lineTo(20, 100);
g.lineTo(20, 20);
g.stroke();
//while (playerDead != true) {
    
//}

class AnimationHandler {
    playerAnimation(xPlayerLocation, yPlayerLocation) {

    }

    enemyAnimation(xEmemyLocation, yEmemyLocation) {

    }
}
class EnitityHandler {
    constructor(hp, speed) {
        hp = this.hp;
        speed = this.speed;
    }


    movement(img, isEnemy, isParticle) {
        let movingEntity = document.getElementById(img);
        if (isEnemy == true && isParticle == true) {
            g.drawImage(img, )
        }
        g.drawImage(movingEntity, xLocation, yLocation);
        
    }

    deathHandler() {
        switch (hp) {
            case 0:
                playerDead = true;
                g.drawImage(zerohp, 10, 10)
        }
    }

    displayHandler() {

    }
}


g.fillText("Hello", 10, 100)
class EnemyWaves extends EnitityHandler {
    
    spawner() {
        let enemyAmount = Math.floor(Math.random() * 20);
        for (let i = 0; i > enemyAmount; i++) {
            this.movement()
        }
    }
}

g.drawImage(Madman, 10, 10);