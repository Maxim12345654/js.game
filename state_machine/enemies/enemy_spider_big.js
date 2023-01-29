export class EnemySpiderBig {
    constructor(game) {
        this.game = game;
        this.ctx = this.game.ctx;

        this.gameWidth = game.canvas.width;
        this.gameHeight = game.canvas.height;
        this.image = document.getElementById("enemy_spider_big");

        this.x = this.game.gameWidth;
        this.y = Math.random() * this.game.gameHeight * 0.5;



        this.frameX = 0;
        this.frameY = 0;
        this.numberOfFrames = 6;

        this.speedX = 0;
        this.speedY = Math.random() > 0.5 ? 1 : -1;

        this.width = 120;
        this.height = 144;
        this.index = 0;

        this.animationSpeedModifier = 5;
        //this.markForDeletion = false;

    }
    update() {
        this.frameX = Math.floor(this.index / this.animationSpeedModifier) % this.numberOfFrames;
        this.index = this.index + 1;
        if (this.y > this.game.gameHeight - this.height - 150) {
            this.speedY = this.speedY * -1
        }

        this.x = this.x - this.game.gameSpeed;
        this.y = this.y + this.speedY;

        if (this.y < 0) {
            this.markForDeletion = true;
        }
        if (this.x < -50) {
            this.markForDeletion = true;
        }

    }

    draw() {
        this.ctx.drawImage(this.image,
            this.width * this.frameX, this.height * this.frameY, this.width, this.height,
            this.x, this.y, this.width, this.height);
        if (this.game.debug === true) {
            this.ctx.strokeRect(this.x, this.y, this.width, this.height)
        }
        this.ctx.beginPath();
        this.ctx.moveTo(this.x + this.width / 2, 0);
        this.ctx.lineTo(this.x + this.width / 2, this.y + 50);
        this.ctx.stroke();
    }
}