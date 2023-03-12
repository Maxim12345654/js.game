export class CollisionAnimation{
    constructor(game,x,y){
        this.game = game;
        this.ctx = this.game.ctx;
        this.x = x;
        this.y = y;
        this.image = document.getElementById("boom");
        this.spriteWidth = 100;
        this.spriteHeight = 90;
        this.modifair = Math.random () + 0.5;
        this.width = this.spriteWidth * this.modifair;
        this.height = this.spriteHeight * this.modifair;
        this.markForDeletion = false;
        this.index = 0
        this.maxOfXFrames = 5;
        this.animationSpeedModifier = 5;
        this.frameX = 0;
        this.frameY = 0;
        

    }
    update(){
        this.frameX = Math.floor(this.index / this.animationSpeedModifier) % this.maxOfXFrames;
        this.index = this.index + 1;
        this.x -= this.game.gameSpeed;

        
        if (this.frameX === this.maxOfXFrames - 1) {
            this.markForDeletion = true;
        }

    }
    draw(){
        this.ctx.drawImage(this.image,
            this.spriteWidth * this.frameX, this.spriteHeight * this.frameY, this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width, this.height);
        if (this.game.debug === true) {
            this.ctx.strokeRect(this.x, this.y, this.width, this.height)
        }

    }
}