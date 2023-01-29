export class BackgroundLayer {
    constructor(game, image, speedModifier) {
        this.gameWidth = game.canvas.width;
        this.gameHeight = game.canvas.height;
        this.game = game;
        this.ctx = this.game.ctx;
        this.speed = -this.game.gameSpeed * speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.speedModifier = speedModifier;
    }

    update() {
        if (this.x < -this.gameWidth) {
            this.x = 0
        }
        this.x = this.x + this.speed;
        this.speed = -this.game.gameSpeed * this.speedModifier;
    }

    draw() {
        this.ctx.drawImage(this.image,
            this.x, this.y, this.gameWidth, this.gameHeight);
        this.ctx.drawImage(this.image,
            this.x + this.gameWidth, this.y, this.gameWidth, this.gameHeight);
    }
}