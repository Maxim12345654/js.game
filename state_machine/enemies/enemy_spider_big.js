import { Enemy } from './enemy.js';
export class EnemySpiderBig extends Enemy {
    constructor(game) {
        super(game);
        this.image = document.getElementById("enemy_spider_big");

        this.x = this.game.gameWidth;
        this.y = Math.random() * this.game.gameHeight * 0.5;

        this.numberOfFrames = 6;

        this.speedX = 0;
        this.speedY = Math.random() > 0.5 ? 1 : -1;

        this.width = 120;
        this.height = 144;
       
       

    }
    update() {
        super.update();
        if (this.y > this.game.gameHeight - this.height - 150) {
            this.speedY = this.speedY * -1
        }
        this.y = this.y + this.speedY;

        if (this.y < 0) {
            this.markForDeletion = true;
        }
      

    }

    draw() {
        super.draw();
        this.ctx.beginPath();
        this.ctx.moveTo(this.x + this.width / 2, 0);
        this.ctx.lineTo(this.x + this.width / 2, this.y + 50);
        this.ctx.stroke();
    }
}