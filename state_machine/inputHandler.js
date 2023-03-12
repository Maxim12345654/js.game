export const Keys = {
    KD_LEFT: 0,
    KD_RIGHT: 1,
    KD_UP: 2,
    KD_DOWN: 3,
    KU_LEFT: 4,
    KU_RIGHT: 5,
    KU_UP: 6,
    KU_DOWN: 7,
    KD_ENTER:8
}

export class InputHandler {
    constructor(game) {
        this.game = game;
        this.lastKey = [];
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    if (this.lastKey.indexOf(Keys.KD_LEFT) === -1) {
                        this.lastKey.push(Keys.KD_LEFT);
                    }

                    break;
                case "ArrowRight":
                    if (this.lastKey.indexOf(Keys.KD_RIGHT) === -1) {
                        this.lastKey.push(Keys.KD_RIGHT);
                    }
                    break;
                case "ArrowDown":
                    if (this.lastKey.indexOf(Keys.KD_DOWN) === -1) {
                        this.lastKey.push(Keys.KD_DOWN);
                    }

                    break;
                case "ArrowUp":
                    if (this.lastKey.indexOf(Keys.KD_UP) === -1) {
                        this.lastKey.push(Keys.KD_UP);
                    }

                    break;
                case "d":
                    this.game.debug = !this.game.debug;
                case "Enter":
                    if (this.lastKey.indexOf(Keys.KD_ENTER) === -1) {
                        this.lastKey.push(Keys.KD_ENTER);
                    }
                    break;
            }
        });

        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    if (this.lastKey.indexOf(Keys.KD_LEFT) > -1) {
                       this.lastKey.splice(this.lastKey.indexOf(Keys.KD_LEFT), 1);
                    }

                    break;
                case "ArrowRight":
                    if (this.lastKey.indexOf(Keys.KD_RIGHT) > -1) {
                       this.lastKey.splice(this.lastKey.indexOf(Keys.KD_RIGHT), 1);
                    }
                    break;
                case "ArrowDown":
                    if (this.lastKey.indexOf(Keys.KD_DOWN) > -1) {
                       this.lastKey.splice(this.lastKey.indexOf(Keys.KD_DOWN), 1);
                    }
                    break;
                case "ArrowUp":
                    if (this.lastKey.indexOf(Keys.KD_UP) > -1) {
                        this.lastKey.splice(this.lastKey.indexOf(Keys.KD_UP), 1);
                    }
                    break;
            }
        });

    }

}