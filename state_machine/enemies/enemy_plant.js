import { Enemy } from './enemy.js';
export class EnemyPlant extends Enemy {
    constructor(game) {
        super(game);
        this.image = document.getElementById("enemy_plant");
        this.width = 60;
        this.height = 87;
        this.speedY = 0;
        this.speedX = 0;
        

        this.x = Math.random() * this.gameWidth / 2 + this.game.gameWidth;
        this.y = this.game.gameHeight  - this.height - 160;


        this.numberOfFrames = 2;
     
    }
    update(){
        super.update();
    }
}