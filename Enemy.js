class enemy {
    id;

    constructor(Player, hitBox, boundingBox, id) {

        this.id = id;

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
        }
    }

    drawEnemy(enemyPos) {
        g.drawImage(Madman, enemyPos[0], enemyPos[1]);
    }

    invertory() {
        this.hp
    }
}

export { enemy };