import { Particle } from "./particle.js";
export class Splash extends Particle {
    constructor(game) {
        super(game);
        this.size = Math.random() * 100 + 100;
        this.x = this.game.player.x + this.game.player.width * 0.5 - this.size * 0.5;
        this.y = this.game.player.y + this.game.player.height * 0.5 - this.size * 0.5;

        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 2 + 2;
        this.gravity = 0;

        this.image = document.getElementById('fire');

    }
    draw() {
        this.ctx.drawImage(this.image,
            this.x, this.y, this.size, this.size);
        if (this.game.debug === true) {
            this.ctx.strokeRect(this.x, this.y, this.size, this.size)
        }
    }
    update() {
        super.update();
        this.gravity += 0.1;
        this.y += this.gravity;
    }
}