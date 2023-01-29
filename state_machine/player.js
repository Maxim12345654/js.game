
import { StandingLeft, StandingRight, SittingLeft, SittingRight, RunningLeft, RunningRight, JumpingLeft, JumpingRight, FallingLeft, FallingRight } from "./state.js";


export class Player {

    constructor(game) {
        this.gameWidth = game.canvas.width;
        this.gameHeight = game.canvas.height;
        this.game = game;
        this.ctx = this.game.ctx;

        this.width = 200;
        this.height = 181.83;

        this.x0 = 0;
        this.y0 = this.gameHeight - this.height - 150;

        this.x = this.x0;
        this.y = this.y0;

        this.image = document.getElementById('dogImg');

        this.frameX = 0;
        this.frameY = 0;

        this.states = [new StandingLeft(this.game), new StandingRight(this.game), new SittingLeft(this.game), new SittingRight(this.game), new RunningLeft(this.game), new RunningRight(this.game), new JumpingLeft(this.game), new JumpingRight(this.game), new FallingLeft(this.game), new FallingRight(this.game)];
        this.currentState = this.states[1];

        this.speed = 0;
        this.maxSpeed = this.game.gameSpeed;

        this.index = 0
        this.numberOfFrames = 0;
        this.animationSpeedModifier = 5;

        this.speedY = 0;
        this.weight = 1;

    }

    update(lastKey) {
        this.checkCollision();
        //get the next state name based on the last key pressed
        let stateName = this.currentState.getState(lastKey, this);

        // check if state Name is defined
        stateName = stateName === '' || stateName === undefined ? this.currentState.stateName : stateName;

        //find a state object based on the next state name
        const state = this.states.find((state) => {
            return state.stateName === stateName;
        });

        //set the currnet frames row
        this.frameY = state.frameY;

        this.currentState = state;

        //get a speed of the current state
        this.speed = this.currentState.getSpeed(this);
        this.game.gameSpeed = this.speed;

        //moving
        this.x = this.x + this.speed;
        this.y = this.y + this.speedY;

        //limitation
        if (this.x > this.gameWidth / 2 - this.width) {
            this.x = this.gameWidth / 2 - this.width
        } else if (this.x < 0) {
            this.x = 0;
        }

        if (this.y > this.y0) {
            this.y = this.y0;
        }

        //update x frames
        this.numberOfFrames = this.currentState.numberOfFrames;
        this.frameX = Math.floor(this.index / this.animationSpeedModifier) % this.numberOfFrames;
        this.index = this.index + 1;
        if (!this.isOnGround()) {
            this.speedY = this.speedY + 1;
        } else {
            this.speedY = 0;
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

    isOnGround() {
        return this.y === this.y0;
    }
    checkCollision() {

        this.game.enemies.forEach((enemy) => {
            if (this.x < enemy.x + enemy.width &&
                this.x + this.width > enemy.x &&
                this.y < enemy.y + enemy.height &&
                this.y + this.height > enemy.y) {
                enemy.markForDeletion = true;
                this.game.score += 1;
            }
        })
    }

}