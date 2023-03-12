import {Particle} from "./particle.js";
export class Fire extends Particle{
    constructor(game){
        super(game);
        this.x = this.game.player.x + this.game.player.width * 0.5 - this.size * 0.5;
        this.y = this.game.player.y + this.game.player.height * 0.5 - this.size * 0.5;

        this.speedX = 1;
        this.speedY = 1;

        this.size = Math.random() * 100 + 50;
        this.image = document.getElementById('fire');

    }
    draw() {
        this.ctx.drawImage(this.image,
            this.x, this.y, this.size, this.size);
        if (this.game.debug === true) {
            this.ctx.strokeRect(this.x, this.y, this.size, this.size)
        }
    }
}