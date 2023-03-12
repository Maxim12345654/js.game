
import { Keys } from './inputHandler.js';

export const states = {
    STANDING_RIGHT: 0,
    SITTING_RIGHT: 1,
    RUNNING_RIGHT: 2,
    JUMPING_RIGHT: 3,
    FALLING_RIGHT: 4,
    ROLLING_RIGHT: 5,
    DIVING: 6,
    HIT: 7
}

export class State {
    constructor(frameY, maxOfXFrames, stateName, game) {
        this.frameY = frameY;
        this.maxOfXFrames = maxOfXFrames;
        this.stateName = stateName;
        this.game = game;
    }

    getXSpeed() {
        return 0;
    }
}

export class StandingRight extends State {
    constructor(game) {
        super(0, 7, states.STANDING_RIGHT, game);
    }

    getState(inputHandler) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Keys.KD_RIGHT) === -1) { //TODO
            return states.RUNNING_RIGHT;
        }
        else if (keys.indexOf(Keys.KD_DOWN) > -1) {
            return states.SITTING_RIGHT;
        } else if (keys.indexOf(Keys.KD_UP) > -1) {
            return states.JUMPING_RIGHT;
        }
    }
}



export class SittingRight extends State {
    constructor(game) {
        super(5, 5, states.SITTING_RIGHT, game);
    }

    getState(inputHandler) {
        let keys1 = inputHandler.lastKey;
        if (keys1.indexOf(Keys.KD_UP) > -1) {
            return states.RUNNING_RIGHT;
        } else if (keys1.indexOf(Keys.KD_RIGHT) > -1) {
            return states.RUNNING_RIGHT;
        }
    }
}

export class RunningRight extends State {
    constructor(game) {
        super(3, 9, states.RUNNING_RIGHT, game);
    }

    getXSpeed() {

        return this.game.player.maxSpeed;
    }

    getState(inputHandler) {
        this.game.addDustParticle();
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Keys.KD_UP) > -1) {
            return states.JUMPING_RIGHT;
        } else if (keys.indexOf(Keys.KD_RIGHT) > -1) {
            return states.STANDING_RIGHT;
        } else if (keys.indexOf(Keys.KD_DOWN) > -1) {
            return states.SITTING_RIGHT;
        } else if (keys.indexOf(Keys.KD_ENTER) > -1) {
            return states.ROLLING_RIGHT;

        }
    }
}


export class JumpingRight extends State {
    constructor(game) {
        super(1, 7, states.JUMPING_RIGHT, game);
    }

    getXSpeed() {

        if (this.game.player.onGround()) {
            this.game.player.decreaseVY();
        }
        return this.game.player.maxSpeed;

    }


    getState(inputHandler) {
        let keys = inputHandler.lastKey;
        if (this.game.player.speedY > 0) {
            return states.FALLING_RIGHT;
        } else if (keys.indexOf(Keys.KD_ENTER) > -1) {
            return states.ROLLING_RIGHT;
        } else if (keys.indexOf(Keys.KD_DOWN) > -1) {
            return states.DIVING;
        }
    }
}



export class FallingRight extends State {
    constructor(game) {
        super(2, 7, states.FALLING_RIGHT, game);
    }


    getState(inputHandler) {
        let keys = inputHandler.lastKey;
        if (this.game.player.onGround()) {
            return states.RUNNING_RIGHT;
        } else if (keys.indexOf(Keys.KD_ENTER) > -1) {
            return states.ROLLING_RIGHT;
        } else if (keys.indexOf(Keys.KD_DOWN) > -1) {
            return states.DIVING;
        }
    }

    getXSpeed() {
        return this.game.player.maxSpeed;
    }
}



export class RollingRight extends State {
    constructor(game) {
        super(6, 7, states.ROLLING_RIGHT, game);
    }


    getState(inputHandler) {

        this.game.addFireParticle();
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Keys.KD_ENTER) === -1 && this.game.player.onGround()) {
            return states.RUNNING_RIGHT;
        } else if (keys.indexOf(Keys.KD_ENTER) > -1 && keys.indexOf(Keys.KD_UP) > -1) {
            if (this.game.player.onGround()) {
                this.game.player.decreaseVY();
            }
        }
    }

    getXSpeed() {
        return this.game.player.maxSpeed * 2;
    }
}

export class Diving extends State {
    constructor(game) {
        super(6, 7, states.DIVING, game);

    }
    getState(inputHandler) {
        this.game.addFireParticle();
        let keys = inputHandler.lastKey;;
        if (keys.indexOf(Keys.KD_ENTER) === -1 && this.game.player.onGround()) {
            for (let i = 0; i < 30; i++) {
                this.game.addSplashParticle();
            }
            return states.RUNNING_RIGHT;
        } else if (keys.indexOf(Keys.KD_ENTER) > -1 && this.game.player.onGround()) {
            return states.ROLLING_RIGHT;
        }
    }
}
// speedY
export class Hit extends State {
    constructor(game) {
        super(4, 11, states.HIT, game);
    }

    getState(inputHandler) {
        // let keys = inputHandler.lastKey;;
        if (this.game.player.onGround() && this.game.player.frameX === 9) {

            return states.RUNNING_RIGHT;
        } else if (!this.game.player.onGround()) {
            return states.FALLING_RIGHT;
        }
    }
}