export class Enemy{
    constructor(game){
        this.game = game;
        this.ctx = this.game.ctx;

        this.gameWidth = game.canvas.width;
        this.gameHeight = game.canvas.height;

        this.index = 0;
        this.animationSpeedModifier = 5;

        this.frameX = 0;
        this.frameY = 0;
        
        this.markForDeletion = false;
    }
    update(){
        this.frameX = Math.floor(this.index / this.animationSpeedModifier) % this.numberOfFrames;
        this.index = this.index + 1;
        this.x = this.x - this.speedX - this.game.gameSpeed;
        
        if (this.x < -50) {
            this.markForDeletion = true;
        }

    }
    draw(){
        this.ctx.drawImage(this.image,
            this.width * this.frameX, this.height * this.frameY, this.width, this.height,
            this.x, this.y, this.width, this.height);
        if (this.game.debug === true) {
            this.ctx.strokeRect(this.x, this.y, this.width, this.height)
        }

    }
} 
