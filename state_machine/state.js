import { Keys } from './inputHandler.js';

export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3,
    RUNNING_LEFT: 4,
    RUNNING_RIGHT: 5,
    JUMPING_LEFT: 6,
    JUMPING_RIGHT: 7,
    FALLING_LEFT: 8,
    FALLING_RIGHT: 9

}

export class StandingLeft {
    constructor() {
        this.stateName = states.STANDING_LEFT;
        this.frameY = 1;
        this.numberOfFrames = 7;
    }

    getState(lastKey) {
        if (lastKey === Keys.KU_LEFT) {
            return states.RUNNING_LEFT;
        } else if (lastKey === Keys.KD_DOWN) {
            return states.SITTING_LEFT;
        }

    }

    getSpeed(player) {
        return 0;
    }
}

export class StandingRight {
    constructor() {
        this.stateName = states.STANDING_RIGHT;
        this.frameY = 0;
        this.numberOfFrames = 7;
    }

    getState(lastKey) {
        if (lastKey === Keys.KU_RIGHT) {
            return states.RUNNING_RIGHT;
        } else if (lastKey === Keys.KD_DOWN) {
            return states.SITTING_RIGHT;
        }
    }

    getSpeed(player) {
        return 0;
    }
}

export class SittingLeft {
    constructor() {
        this.stateName = states.SITTING_LEFT;
        this.frameY = 9;
        this.numberOfFrames = 5;
    }

    getState(lastKey) {
        if (lastKey === Keys.KD_RIGHT) {
            return states.RUNNING_RIGHT;
        } else if (lastKey === Keys.KD_LEFT) {
            return states.RUNNING_LEFT;
        }else if (lastKey === Keys.KD_UP) {
            return states.RUNNING_LEFT;
        }
    }

    getSpeed(player) {
        return 0;
    }
}

export class SittingRight {
    constructor() {
        this.stateName = states.SITTING_RIGHT;
        this.frameY = 8;
        this.numberOfFrames = 5;
    }

    getState(lastKey) {
        if (lastKey === Keys.KD_LEFT) {
            return states.RUNNING_LEFT;
        } else if (lastKey === Keys.KD_RIGHT) {
            return states.RUNNING_RIGHT;
        }else if (lastKey === Keys.KD_UP) {
            return states.RUNNING_RIGHT;
        }
    }

    getSpeed(player) {
        return 0;
    }
}

export class RunningLeft {
    constructor() {
        this.stateName = states.RUNNING_LEFT;
        this.frameY = 7;
        this.numberOfFrames = 9;
    }
    getState(lastKey) {
        if (lastKey === Keys.KD_RIGHT) {
            return states.RUNNING_RIGHT;
        } else if (lastKey === Keys.KD_DOWN) {
            return states.SITTING_LEFT;
        } else if (lastKey === Keys.KD_LEFT) {
            return states.STANDING_LEFT;
        }
    }

    getSpeed(player) {
        return -player.maxSpeed;
    }
}

export class RunningRight {
    constructor() {
        this.stateName = states.RUNNING_RIGHT;
        this.frameY = 6;
        this.numberOfFrames = 9;
    }

    getState(lastKey) {
        if (lastKey === Keys.KD_RIGHT) {
            return states.STANDING_RIGHT;
        } else if (lastKey === Keys.KD_DOWN) {
            return states.SITTING_RIGHT;
        } else if (lastKey === Keys.KD_LEFT) {
            return states.RUNNING_LEFT;
        } else if (lastKey === Keys.KD_UP){
            return states.JUMPING_RIGHT;
        }
    }

    getSpeed(player) {
        return player.maxSpeed;
    }
}

export class JumpingLeft {
    constructor() {
        this.stateName = states.JUMPING_LEFT;
        this.frameY = 3;
        this.numberOfFrames = 7;
    }

    getState(lastKey) {

    }


    getSpeed(player) {
        return player.maxSpeed;
    }
}

export class JumpingRight{
    constructor() {
        this.stateName = states.JUMPING_RIGHT;
        this.frameY = 2;
        this.numberOfFrames = 7;
    }

    getState(lastKey, player) {
        if(player.speedY > 0)
        return states.FALLING_RIGHT
       
    }
    getSpeed(player) {
        if (player.isOnGround()){
            player.speedY = player.speedY - 30
        }
        return player.maxSpeed * 0.5;
    }
}


export class FallingLeft {
    constructor() {
        this.stateName = states.FALLING_LEFT;
        this.frameY = 5;
        this.numberOfFrames = 7;
    }

    getState(lastKey) {

    } 
    
    getSpeed(player) {
        return player.maxSpeed;
    }
}


export class FallingRight {
    constructor() {
        this.stateName = states.FALLING_RIGHT;
        this.frameY = 4;
        this.numberOfFrames = 7;
    }

    getState(lastKey, player) {
        if (player.isOnGround()) {
            return states.RUNNING_RIGHT;
        }

    }
    getSpeed(player) {
        return player.maxSpeed;
    }
}