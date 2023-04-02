export class UI {
    constructor(game) {
        this.game = game;
        this.ctx = this.game.ctx;
        this.fontSize = 30;
        this.fontFamily = "Helvetica";
        this.sound = new Audio();
        this.sound.src = './sounds/success-fanfare-trumpets-6185.mp3';
    }

    draw() {
        this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
        this.ctx.textAlign = 'left';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Score:' + this.game.score, 20, 50);

        this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
        this.ctx.textAlign = 'left';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Time:' + this.game.time, 20, 90);

        if (this.game.gameOver) {
            this.fontSize = 100
            this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = 'black';
            this.ctx.fillText('Time is over!', this.game.gameWidth / 2, this.game.gameHeight / 2);
            this.sound.play();
        }
    }
}