export class Particle{
    constructor(game){
        this.game = game;
        this.ctx = this.game.ctx;
        this.markForDeletion = false;

    }
    update(){
        this.x -= this.speedX ///+ this.game.gameSpeed;
        this.y -= this.speedY;
        this.size *= 0.95;
        if (this.size < 0.5) {
            this.markForDeletion = true;
        }
    }
    
    
}