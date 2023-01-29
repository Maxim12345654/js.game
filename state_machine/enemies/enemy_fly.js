export class EnemyFly {
    constructor(game) {
        this.game = game;
        this.ctx = this.game.ctx;

        this.gameWidth = game.canvas.width;
        this.gameHeight = game.canvas.height;
        this.image = document.getElementById("enemy_fly");
        this.x = Math.random() * this.gameWidth / 2 + this.game.gameWidth;
        this.y = Math.random() * this.gameHeight / 2;


        this.frameX = 0;
        this.frameY = 0;
        this.numberOfFrames = 6;

        this.speedX = 1 + Math.random();
        this.speedY = 0;

        this.width = 60;
        this.height = 44;
        this.index = 0;

        this.animationSpeedModifier = 5;
        this.markForDeletion = false;
        this.angle = 0
        this.angleSpeed = Math.random(0, 1.5) * 0.1 + 0.01;

    }
    update() {
        this.frameX = Math.floor(this.index / this.animationSpeedModifier) % this.numberOfFrames;
        this.index = this.index + 1;

        this.x = this.x - this.speedX - this.game.gameSpeed;
        this.angle = this.angle + this.angleSpeed;
        this.y = this.y + Math.sin(this.angle);

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

    }
}