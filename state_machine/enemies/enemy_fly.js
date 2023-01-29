import { Enemy } from './enemy.js';
export class EnemyFly extends Enemy {
    constructor(game) {
        super(game);
        this.image = document.getElementById("enemy_fly");
        this.x = Math.random() * this.gameWidth / 2 + this.game.gameWidth;
        this.y = Math.random() * this.gameHeight / 2;

        this.numberOfFrames = 6;

        this.speedX = 1 + Math.random();
        this.speedY = 0;

        this.width = 60;
        this.height = 44;
 

        this.angle = 0
        this.angleSpeed = Math.random(0, 1.5) * 0.1 + 0.01;

    }
    update() {
        super.update();

        
        this.angle = this.angle + this.angleSpeed;
        this.y = this.y + Math.sin(this.angle);

    }

    draw() {
        super.draw();
        }

    }
