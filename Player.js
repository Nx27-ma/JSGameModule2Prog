class player {

    constructor(enemyHitBox) {
        console.log("player been made")
        this.enemyHitBox = enemyHitBox;
        this.playerPosX = canvas.width / 2;
        this.playerPosY = canvas.height / 2;
        this.bulletsArray = [];
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
        this.shooting(playerPos);
    }



    shooting(playerPos) {
        if (this.isClicked == 0) {
            this.bulletsArray.push(new bullets(enemyHitBox, playerPos));
        }
    }

    invertory() {
        let hp;
    }

}

export { player };