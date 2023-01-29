export class UI {
    constructor(game) {
        this.game = game;
        this.ctx = this.game.ctx;
        this.fontSize = 30;
        this.fontFamily = "Helvetica";
    }

    draw() {
        this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
        this.ctx.textAlign = 'left';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Score:' + this.game.score, 20, 50);
    }
}