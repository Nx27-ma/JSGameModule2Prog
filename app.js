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

class PlayerController {

    wasd() {
        let w, a, s, d;
        if (KeyboardEvent.key == "w"/* && KeyboardEvent.repeat*/) {
            w = true;
        } else if (KeyboardEvent.key == "a") {
            a = true;
        } else if (KeyboardEvent.key == "s") {
            s = true;
        } else if (KeyboardEvent.key == "d") {
            d = true;
        } else {
            w = false;

        }


        
    }

}

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

    deathHandler() {
        switch (hp) {
            case 0:
                playerDead = true;
                g.drawImage(zerohp, 10, 10);
                break;
            case 1:
                g.drawImage(onehp, 10, 10);
                break;
            case 2:
                g.drawImage(twohp, 10, 10);
            case 3:
                g.drawImage(threehp, 10, 10);
                break;

        }
    }

    displayHandler() {

    }
}



class EnemyWaves extends EnitityHandler {
    
    spawner() {
        let enemyAmount = Math.floor(Math.random() * 20);
        for (let i = 0; i > enemyAmount; i++) {
            
        }
    }
}
g.fillText("Hello", 10, 100);
g.drawImage(Madman, 10, 10);