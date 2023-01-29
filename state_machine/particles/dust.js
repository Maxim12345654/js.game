import { Particle } from "./particle.js";

export class Dust extends Particle {
    constructor(game) {
        super(game);
        this.x = this.game.player.x;
        this.y = this.game.player.y;

        this.speedX = Math.random();
        this.speedY = Math.random();

        this.Size = Math.random() * 10 + 10;
        this.color = 'rgba(0,0,0,0.2)';
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        

    }


}